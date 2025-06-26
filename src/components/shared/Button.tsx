import {
  ButtonColor,
  ButtonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakMap,
} from '@/styles/button'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '5px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : ButtonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,

  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: iniitial;
        `
      : undefined,
)

export default Button
