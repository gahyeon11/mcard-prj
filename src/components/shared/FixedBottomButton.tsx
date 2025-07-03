import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'
import Button from './Button'
import { motion } from 'framer-motion'

interface FixedBottomButton {
  label: string
  onClick: () => void
  disabled?: boolean
}

export default function FixedBottomButton({
  label,
  onClick,
  disabled,
}: FixedBottomButton) {
  const $portalRoot = document.getElementById('root-portal')

  if ($portalRoot == null) {
    return null
  }
  return createPortal(
    <MotionContainer
      initial={{ opacity: 0, translateY: 90 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 1.0,
        ease: 'easeInOut',
      }}
    >
      <ContentWrapper>
        <Button
          size="medium"
          full={true}
          onClick={onClick}
          css={buttonStyle}
          disabled={disabled}
        >
          {label}
        </Button>
      </ContentWrapper>
    </MotionContainer>,
    $portalRoot,
  )
}

const MotionContainer = styled(motion.div)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`

const buttonStyle = css`
  border-radius: 8px;
`
