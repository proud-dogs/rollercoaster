import React from 'react'
import LoanEntryField from './LoanEntryField'

export default function LoanEntry ({id, amountOwed, interestRate, monthlyPayment}) {
  const amountOwedFieldId = `${id}-${amountOwedFieldName}`
  const amountOwedFieldName = 'amount-owed'
  const amountOwedFieldValue = amountOwed
  const interestRateFieldId = `${id}-${interestRateFieldName}`
  const interestRateFieldName = 'interest-rate'
  const interestRateFieldValue = interestRate
  const monthlyPaymentFieldId = `${id}-${monthlyPaymentFieldName}`
  const monthlyPaymentFieldName = 'monthly-payment'
  const monthlyPaymentFieldValue = monthlyPayment
  
  return (
    <div id={id}>
      <LoanEntryField
        field_id={amountOwedFieldId}
        name={amountOwedFieldName}
        value={amountOwedFieldValue}
        label={'Amount Owed:'} />
      <LoanEntryField
        field_id={interestRateFieldId}
        name={interestRateFieldName}
        value={interestRateFieldValue}
        label={'Interest Rate:'} />
      <LoanEntryField
        field_id={monthlyPaymentFieldId}
        name={monthlyPaymentFieldName}
        value={monthlyPaymentFieldValue}
        label={'Monthly Payment:'} />
    </div>
  )
}
