import ListRow from '../shared/ListRow'

export default function CardList() {
  return (
    <div>
      <ul>
        <ListRow
          left={<div>왼</div>}
          contents={<ListRow.Texts title="안녕" subTitle="히세여" />}
          right={<>ㅎ</>}
          withArrow={true}
        />
      </ul>
    </div>
  )
}
