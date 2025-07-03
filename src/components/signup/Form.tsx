import { FormValue } from '@/models/signup'
import { css } from '@emotion/react'
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import validator from 'validator'
import FixedBottomButton from '../shared/FixedBottomButton'
import Flex from '../shared/Flex'
import { Spacing } from '../shared/Spacing'
import TextField from '../shared/TextField'

export default function Form({
  onSubmit,
}: {
  onSubmit: (formValues: FormValue) => void
}) {
  const [formValues, setFormValues] = useState<FormValue>({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  })

  const [dirty, setDirty] = useState<Partial<FormValue>>({})

  const handleFormValues = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setDirty((prevDirty) => ({
      ...prevDirty,
      [e.target.name]: true,
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
        value={formValues.email}
        onChange={handleFormValues}
        hasError={Boolean(dirty.email) && Boolean(errors.email)}
        helpMessage={Boolean(dirty.email) ? errors.email : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleFormValues}
        hasError={Boolean(dirty.password) && Boolean(errors.password)}
        helpMessage={Boolean(dirty.password) ? errors.password : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="비밀번호 확인"
        name="rePassword"
        type="password"
        value={formValues.rePassword}
        onChange={handleFormValues}
        hasError={Boolean(dirty.rePassword) && Boolean(errors.rePassword)}
        helpMessage={Boolean(dirty.rePassword) ? errors.rePassword : ''}
        onBlur={handleBlur}
      />
      <Spacing size={16} />
      <TextField
        label="이름"
        name="name"
        value={formValues.name}
        onChange={handleFormValues}
        hasError={Boolean(dirty.name) && Boolean(errors.name)}
        helpMessage={Boolean(dirty.name) ? errors.name : ''}
        onBlur={handleBlur}
      />
      <FixedBottomButton
        label="회원가입"
        disabled={submit === false}
        onClick={() => {
          onSubmit(formValues)
        }}
      />
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
  if (formValues.rePassword.length < 8) {
    errors.rePassword = '비밀번호 확인은 8글자 이상 입력해주세요.'
  } else if (
    validator.equals(formValues.rePassword, formValues.password) === false
  ) {
    errors.rePassword = '비밀번호 값과 비밀번호 확인 값이 다릅니다.'
  }
  if (formValues.name.length < 2) {
    errors.name = '이름은 2글자 이상 입력해주세요'
  }
  return errors
}

const formContainerStyles = css`
  padding: 24px;
`
