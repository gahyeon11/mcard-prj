import { ApplyValues } from '@/models/apply'
import { getAppliedCard } from '@/remote/apply'
import { useQuery, UseQueryOptions } from 'react-query'

export default function useAppliedCard({
  cardId,
  userId,
  options,
}: {
  cardId: string
  userId: string
  options?: Pick<
    UseQueryOptions<ApplyValues | null>,
    'onSuccess' | 'onError' | 'suspense'
  >
}) {
  return useQuery(
    ['applied', userId, cardId],
    () => getAppliedCard({ userId, cardId }),
    options,
  )
}
