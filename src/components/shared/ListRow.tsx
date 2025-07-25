import { css } from '@emotion/react'
import Flex from './Flex'
import Skeleton from './Skeleton'
import { Spacing } from './Spacing'
import Text from './Text'

interface ListRowProps {
  left?: React.ReactNode
  contents: React.ReactNode
  right?: React.ReactNode
  onClick?: () => void
  withArrow?: boolean
  as?: 'div' | 'li'
}

export default function ListRow({
  as = 'li',
  left,
  contents,
  right,
  withArrow,
  onClick,
}: ListRowProps) {
  return (
    <Flex as={as} css={ListRowContainerStyles} onClick={onClick} align="center">
      <Flex css={ListRowLeftStyles}>{left}</Flex>
      <Flex css={ListRowContentsStyle}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <IconArrowRight /> : null}
    </Flex>
  )
}

const ListRowContainerStyles = css`
  padding: 8px 24px;
  cursor: pointer;
`
const ListRowLeftStyles = css`
  margin-right: 14px;
`
const ListRowContentsStyle = css`
  flex: 1;
`

function ListRowTexts({
  title,
  subTitle,
}: {
  title: React.ReactNode
  subTitle: React.ReactNode
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  )
}

function ListRowSkeleton() {
  return (
    <Flex as="li" css={ListRowContainerStyles} align="center">
      <Flex css={ListRowLeftStyles}></Flex>
      <Flex css={ListRowContentsStyle}>
        <ListRow.Texts
          title={
            <>
              <Skeleton width={67} height={23} />
              <Spacing size={2} />
            </>
          }
          subTitle={<Skeleton width={85} height={20} />}
        />
      </Flex>
      <IconArrowRight />
    </Flex>
  )
}

function IconArrowRight() {
  return (
    <svg
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
    >
      <title />
      <path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" />
    </svg>
  )
}

ListRow.Texts = ListRowTexts
ListRow.Skeleton = ListRowSkeleton
