import { colors } from '@/styles/colorPalette'
import styled from '@emotion/styled'
import Text from './Text'

interface BadgeProps {
  label: string
}

export default function Badge({ label }: BadgeProps) {
  return (
    <Container>
      <Text bold={true} color="white" typography="t7">
        {label}
      </Text>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 12px;
  background-color: ${colors.blue};
  padding: 2px 10px;
`
