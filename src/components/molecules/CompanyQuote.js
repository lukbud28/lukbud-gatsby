import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledQuote = styled.h2`
  font-family: "Lora";
  color: ${({ theme }) => theme.grey};
  font-size: 1.5rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.weights.medium};

  @media ${response.tablet} {
    font-size: 2rem;
  }
`

const StyledLink = styled(Link)`
  margin-top: 10px;
  color: ${({ theme }) => theme.secondGrey};

  @media ${response.tablet} {
    margin0-top: 30px;
    font-size: 1.4rem;
  }
`

const CompanyQuote = () => {
  return (
    <StyledContainer>
      <StyledQuote>
        I work with my client to build a space that reflects their own unique
        style. Whether it&apos;s residential or commercial, it should be 100%
        you.
      </StyledQuote>
      <StyledLink to="/about">zobacz więcej o nas</StyledLink>
    </StyledContainer>
  )
}

export default CompanyQuote
