import BasicInfo from '@/components/apply/BasicInfo'
import CardInfo from '@/components/apply/CardInfo'
import Terms from '@/components/apply/Terms'
import { useState } from 'react'

export default function ApplyPage() {
  const [step, setStep] = useState(0)

  const handleTermsChange = (terms: string[]) => {}

  return (
    <div>
      {step === 0 ? <Terms onNext={handleTermsChange} /> : null}
      {step === 1 ? <CardInfo /> : null}
      {step === 2 ? <BasicInfo /> : null}
    </div>
  )
}
