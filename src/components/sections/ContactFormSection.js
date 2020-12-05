import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import ContactForm from "components/molecules/ContactForm"
import ContactFormIntroduction from "components/molecules/ContactFormIntroduction"

const StyledContainer = styled.div`
  @media ${response.bigDesktop} {
    width: 48%;
  }
`

const ContactFormSection = () => {
  return (
    <StyledContainer>
      <ContactFormIntroduction />
      <ContactForm />
    </StyledContainer>
  )
}

export default ContactFormSection
