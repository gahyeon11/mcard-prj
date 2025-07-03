import { 약관목록 } from '@/constants/apply'
import { ApplyValues } from '@/models/apply'
import { MouseEvent, useCallback, useState } from 'react'
import Agreement from '../shared/Agreement'
import FixedBottomButton from '../shared/FixedBottomButton'

export default function Terms({
  onNext,
}: {
  onNext: (terms: ApplyValues['terms']) => void
}) {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    )
  })

  const AllAgreement = Object.values(termsAgreements).every(
    (동의여부) => 동의여부,
  )

  const HandleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      setTermsAgreements((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        )
      })
    },
    [],
  )
  return (
    <>
      <Agreement>
        <Agreement.Title
          checked={AllAgreement}
          withCircle={true}
          onChange={HandleAllAgreement}
        >
          약관에 모두 동의
        </Agreement.Title>
        {약관목록.map(({ id, title, link }) => (
          <Agreement.Discription
            key={id}
            link={link}
            checked={termsAgreements[id]}
            onChange={(_, checked) => {
              setTermsAgreements((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }))
            }}
          >
            {title}
          </Agreement.Discription>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관 동의"
        disabled={AllAgreement === false}
        onClick={() => {
          onNext(Object.keys(termsAgreements))
        }}
      />
    </>
  )
}
