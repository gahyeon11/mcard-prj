import { FormValue } from '@/models/signin'
import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import Button from '../shared/Button'
import Flex from '../shared/Flex'
import { Spacing } from '../shared/Spacing'
import Text from '../shared/Text'
import TextField from '../shared/TextField'

export default function Form({
  onSubmit,
}: {
  onSubmit: (formValues: FormValue) => void
}) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const errors = useMemo(() => validate(formValues), [formValues])

  const submit = Object.keys(errors).length === 0

  return (
    <Flex direction="column" css={formContainerStyles}>
      <TextField
        label="이메일"
        name="email"
        placeholder="000@gmail.com"
        onChange={handleFormValues}
        value={formValues.email}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        name="password"
        type="password"
        onChange={handleFormValues}
        value={formValues.password}
      />
      <Spacing size={32} />
      <Button
        size="medium"
        disabled={submit === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      >
        로그인
      </Button>
      <Spacing size={12} />
      <Link to="/signup" css={linkStyles}>
        <Text typography="t7">아직 계정이 없으신가요?</Text>
      </Link>
    </Flex>
  )
}

function validate(formValues: FormValue) {
  let errors: Partial<FormValue> = {}

  if (validator.isEmail(formValues.email) === false) {
    errors.email = '이메일 형식을 확인해주세요.'
  }
  if (formValues.password.length < 8) {
    errors.password = '비밀번호는 8글자 이상 입력해주세요.'
  }
  return errors
}

const formContainerStyles = css`
  padding: 24px;
`

const linkStyles = css`
  text-align: center;

  & > span:hover {
    color: ${colors.blue};
  }
`
