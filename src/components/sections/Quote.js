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

  @media ${response.desktop} {
    padding: 150px 30%;
  }

  @media ${response.huge} {
    padding: 200px 35%;
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
