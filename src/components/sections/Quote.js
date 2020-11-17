import React from "react"
import styled from "styled-components"

import CompanyQuote from "components/molecules/CompanyQuote"

const StyledContainer = styled.section`
  width: 100%;
  padding: 70px 60px;
`

const Quote = () => {
  return (
    <StyledContainer>
      <CompanyQuote />
    </StyledContainer>
  )
}

export default Quote
