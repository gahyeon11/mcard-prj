import { css } from '@emotion/react'
import FixedBottomButton from '../shared/FixedBottomButton'
import Flex from '../shared/Flex'
import { Spacing } from '../shared/Spacing'
import TextField from '../shared/TextField'

export default function Form() {
  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField label="이메일" placeholder="000@gmail.com" />
      <Spacing size={16} />
      <TextField label="비밀번호" type="password" />
      <Spacing size={16} />
      <TextField label="비밀번호 확인" type="password" />
      <Spacing size={16} />
      <TextField label="이름" placeholder="이름" />

      <FixedBottomButton label="회원가입" disabled={true} onClick={() => {}} />
    </Flex>
  )
}

const formContainerStyles = css`
  padding: 24px;
`
