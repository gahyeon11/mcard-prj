import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import Button from './Button'

interface FixedBottomButton {
  label: string
  onClick: () => void
}

export default function FixedBottomButton({
  label,
  onClick,
}: FixedBottomButton) {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot == null) {
    return null
  }
  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyle}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`
const buttonStyle = css`
  border-radius: 8px;
`
