import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"

import ContactFormSection from "components/sections/ContactFormSection"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;
`

const ContactPage = () => (
  <MainLayout>
    <StyledContainer>
      <ContactFormSection />
    </StyledContainer>
  </MainLayout>
)

export default ContactPage
