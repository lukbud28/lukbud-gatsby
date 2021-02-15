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
        Naszym głównym zajęciem i profilem działalności jest kompleksowe
        świadczenie usług dekarskich. Pragniemy oferować swoim Klientom jedynie
        najlepsze możliwe rozwiązania w tej dziedzinie, gdyż chcemy spełniać
        pokładane w nas oczekiwania.
      </StyledQuote>
      <StyledLink to="/about">zobacz więcej o nas</StyledLink>
    </StyledContainer>
  )
}

export default CompanyQuote
