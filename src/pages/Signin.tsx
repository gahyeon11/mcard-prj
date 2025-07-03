import Form from '@/components/signin/Form'
import { useAlertContext } from '@/context/AlertContext'
import { FormValue } from '@/models/signin'
import { auth } from '@/remote/firebase'
import { FirebaseError } from 'firebase/app'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SigninPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { open } = useAlertContext()

  const from = location.state?.from || '/'

  const handleSubmit = useCallback(async (formValues: FormValue) => {
    const { email, password } = formValues
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      navigate(from, { replace: true })
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e.code)
        if (
          [
            'auth/wrong-password',
            'auth/invalid-email',
            'auth/user-not-found',
            'auth/invalid-credential',
          ].includes(e.code)
        ) {
          open({
            title: '계정 정보를 다시 확인해주세요.',
            onButtonClick: () => {},
          })
          return
        }
      }
      open({
        title: '잠시 후 다시 시도해주세요.',
        onButtonClick: () => {},
      })
    }
  }, [])
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
