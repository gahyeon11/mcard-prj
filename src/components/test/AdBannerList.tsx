import { COLLECTIONS } from '@/constants'
import { adBanners, card_list } from '@/mock/data'
import { store } from '@/remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'
import Button from '../shared/Button'

export default function AdBannerList() {
  const handleButtonCLick = async () => {
    const batch = writeBatch(store)

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER))

      batch.set(docRef, banner)
    })

    await batch.commit()

    alert('배너 리스트 추가 완료')
  }

  return <Button onClick={handleButtonCLick}>배너 리스트 추가하기</Button>
}
