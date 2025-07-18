import { COLLECTIONS } from '@/constants'
import { card_list } from '@/mock/data'
import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import Button from '../shared/Button'

export default function CardListAddButton() {
  const handleButtonCLick = async () => {
    const batch = writeBatch(store)

    card_list.forEach((card) => {
      const docRef = doc(collection(store, COLLECTIONS.CARD))

      batch.set(docRef, card)
    })

    await batch.commit()

    alert('카드 리스트 추가 완료')
  }

  return <Button onClick={handleButtonCLick}>카드 리스트 추가하기</Button>
}
