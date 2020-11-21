import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import CompanyQuote from "components/molecules/CompanyQuote"

const StyledContainer = styled.section`
  width: 100%;
  padding: 70px 60px;

  @media ${response.tablet} {
    padding: 100px 20%;
  }
`

const Quote = () => {
  return (
    <StyledContainer>
      <CompanyQuote />
    </StyledContainer>
  )
}

export default Quote
