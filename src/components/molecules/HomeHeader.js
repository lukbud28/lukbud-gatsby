/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

// components
import Color from "components/atoms/Color"
import Button from "components/atoms/Button"

const StyledContainer = styled.div`
  margin-top: 60px;
`

const StyledH1 = styled.h1`
  font-size: 2.5rem;
`

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 10px;
`

const StyledButton = styled(Button)`
  margin-top: 20px;
`

const HomeHeader = () => {
  return (
    <StyledContainer>
      <StyledH1>
        Tworzymy domy z <Color color="blue">pasji</Color>, lorem ipsum dolor sit
        amet
      </StyledH1>
      <StyledP>
        Whether you&apos; re a <Color color="blue">Fortune 500</Color> or a
        startup in stealth mode - we give our clients the creative, technical
        and <Color color="blue">business</Color> talent they need.
      </StyledP>
      <Link to="/about">
        <StyledButton color="white" background="blue" weight="bold">
          O nas
        </StyledButton>
      </Link>
    </StyledContainer>
  )
}

export default HomeHeader
