import { getCards } from '@/remote/card'
import { flatten } from 'lodash'
import { useCallback } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteQuery, useQuery } from 'react-query'
import ListRow from '../shared/ListRow'

export default function CardList() {
  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam)
    },
    {
      getNextPageParam: (snapShot) => {
        return snapShot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    if (hasNextPage === false || isFetching) {
      return
    }
    fetchNextPage()
  }, [hasNextPage, hasNextPage, isFetching])

  const cards = flatten(data?.pages.map(({ items }) => items))

  if (data === null) {
    return null
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
      >
        {cards.map((card, idx) => {
          return (
            <ListRow
              key={idx}
              contents={
                <ListRow.Texts title={`${idx + 1}위`} subTitle={card.name} />
              }
              right={card.payback != null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          )
        })}
      </InfiniteScroll>
    </div>
  )
}
