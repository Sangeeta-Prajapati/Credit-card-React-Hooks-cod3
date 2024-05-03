// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CardHeading,
  CardContainer,
  HorizontalLine,
  Card,
  CardHolderName,
  CardHolderNameText,
  CardNumber,
  PaymentContainer,
  PaymentMethodContainer,
  PaymentMethodHeading,
  Input,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardHolderName, setCardHolderName] = useState('')
  const cardHolderNameUppercase = cardHolderName.toUpperCase()

  const onChangeNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardHoldername = event => {
    setCardHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CardHeading>CREDIT CARD</CardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CardNumber>{cardNumber}</CardNumber>
            <CardHolderNameText>CARDHOLDER NAME</CardHolderNameText>
            <CardHolderName>{cardHolderNameUppercase}</CardHolderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>
      <PaymentContainer>
        <PaymentMethodContainer>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <Input
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
            value={cardNumber}
          />
          <Input
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeCardHoldername}
            value={cardHolderName}
          />
        </PaymentMethodContainer>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard
