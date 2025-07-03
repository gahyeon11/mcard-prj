import { colors } from '@/styles/colorPalette'
import { css, keyframes } from '@emotion/react'
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

const slideUp = keyframes`
  to{
    transform: translateY(0)
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateX(-50%);
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideUp} 0.5s ease-in-out forwards;
`
const buttonStyle = css`
  border-radius: 8px;
`
