import { 결제일옵션, 신용점수옵션, 연소득옵션 } from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import { ChangeEvent, useCallback, useState } from 'react'
import FixedBottomButton from '../shared/FixedBottomButton'
import Select from '../shared/Select'
import { Spacing } from '../shared/Spacing'

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>

export default function BasicInfo({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void
}) {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  })

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setInfoValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }))
  }, [])

  const allSelected = Object.values(infoValues).every((value) => value)

  return (
    <div>
      <Select
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
        name="salary"
      />
      <Spacing size={20} />
      <Select
        label="신용정보"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
        name="creditScore"
      />
      <Spacing size={20} />

      <Select
        label="결제일"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
        name="payDate"
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues)
        }}
        disabled={allSelected === false}
      />
    </div>
  )
}
