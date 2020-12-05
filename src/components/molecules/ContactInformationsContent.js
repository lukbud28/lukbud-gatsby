import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledContaiener = styled.div`
  margin-bottom: 50px;
`

const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.grey};
  margin: 10px 0;

  @media ${response.tablet} {
    font-size: 1.4rem;
    margin: 15px 0;
  }

  @media ${response.desktop} {
    margin: 20px 0;
  }
`

const StyledContactMethods = styled.div`
  display: flex;
`

const StyledMethodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
`
const StyledMethodKey = styled.span`
  color: ${({ theme }) => theme.blue};
  font-size: 1.2rem;

  @media ${response.tablet} {
    font-size: 1.4rem;
  }
`

const StyledMethodValue = styled.span`
  color: ${({ theme }) => theme.grey};
  font-size: 1.2rem;

  @media ${response.tablet} {
    font-size: 1.4rem;
  }
`

const ContactInformationsContent = () => {
  return (
    <StyledContaiener>
      <StyledParagraph>
        Skontaktuj się z nami, by otrzymać dalsze informacje naszej przyszłej
        współpracy
      </StyledParagraph>
      <StyledContactMethods>
        <StyledMethodsWrapper>
          <StyledMethodKey>Telefon:</StyledMethodKey>
          <StyledMethodKey>Email:</StyledMethodKey>
          <StyledMethodKey>Adres:</StyledMethodKey>
        </StyledMethodsWrapper>
        <StyledMethodsWrapper>
          <StyledMethodValue>(+48) 555 555 555</StyledMethodValue>
          <StyledMethodValue>lukasz@lukbud.pl</StyledMethodValue>
          <StyledMethodValue>
            37-430 Stary Nart,
            <br />
            gm. Jeżowe
          </StyledMethodValue>
        </StyledMethodsWrapper>
      </StyledContactMethods>
    </StyledContaiener>
  )
}

export default ContactInformationsContent
