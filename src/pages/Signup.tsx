import Form from '@/components/signup/Form'
import { COLLECTIONS } from '@/constants'
import { FormValue } from '@/models/signup'
import { auth, store } from '@/remote/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { collection, doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function SignupPage() {
  const navigate = useNavigate()
  const handleSubmit = async (formValues: FormValue) => {
    const { email, password, name } = formValues
    const { user } = await createUserWithEmailAndPassword(auth, email, password)

    await updateProfile(user, {
      displayName: name,
    })

    const newUser = {
      uid: user.uid,
      email: user.email,
      displayname: name,
    }

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser)

    navigate('/')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
