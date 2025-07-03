import { COLLECTIONS } from '@/constants'
import { Card } from '@/models/card'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

// pageParam: 지금 보이고 있는 맨 마지막 요소, 이걸 커서로 활용
export async function getCards(pageParam?: QuerySnapshot<Card>) {
  const cardQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.CARD), limit(10))
      : query(
          collection(store, COLLECTIONS.CARD),
          startAfter(pageParam),
          limit(10),
        )
  // startAfter pageParam이 있는 경우 다음 데이터를 불러오는 용도

  const cardSnapShot = await getDocs(cardQuery)

  const lastVisible = cardSnapShot.docs[cardSnapShot.docs.length - 1]

  const items = cardSnapShot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Card),
  }))
  return { items, lastVisible }
}

export async function getCard(id: string) {
  const snapshot = await getDoc(doc(store, COLLECTIONS.CARD, id))

  return {
    id,
    ...(snapshot.data() as Card),
  }
}
