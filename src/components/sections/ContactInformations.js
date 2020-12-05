import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import ContactMap from "components/atoms/ContactMap"
import ContactInformationsContent from "components/molecules/ContactInformationsContent"

const StyledContainer = styled.div`
  @media ${response.bigDesktop} {
    width: 48%;
  }
`

const StyledMap = styled(ContactMap)`
  width: 100%;

  @media ${response.tablet} {
    height: 220px;
  }

  @media ${response.desktop} {
    height: 250px;
  }

  @media ${response.bigDesktop} {
    height: 220px;
  }

  @media ${response.huge} {
    height: 270px;
  }
`

const ContactInformations = () => {
  return (
    <StyledContainer>
      <StyledMap />
      <ContactInformationsContent />
    </StyledContainer>
  )
}

export default ContactInformations
