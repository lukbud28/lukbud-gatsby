/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { response } from "layout/theme"

// components
import Color from "components/atoms/Color"
import Button from "components/atoms/Button"

const StyledContainer = styled.div`
  margin-top: 60px;

  @media ${response.tablet} {
    margin: 100px 0 0 40px;
    width: 70%;
  }

  @media ${response.bigTablet} {
    margin: 150px 0 0 50px;
  }

  @media ${response.desktop} {
    width: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media ${response.huge} {
    width: 40%;
  }
`

const StyledH1 = styled.h1`
  font-size: 2.5rem;

  @media ${response.tablet} {
    font-size: 3.3rem;
  }

  @media ${response.desktop} {
    font-size: 3rem;
  }
`

const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 10px;

  @media ${response.tablet} {
    font-size: 1.9rem;
  }

  @media ${response.desktop} {
    font-size: 1.7rem;
  }
`

const StyledButton = styled(Button)`
  margin-top: 20px;

  @media ${response.tablet} {
    font-size: 1.9rem;
    padding: 10px 100px;
  }

  @media ${response.desktop} {
    font-size: 1.7rem;
    padding: 7px 70px;
  }
`

const HomeHeader = () => {
  return (
    <StyledContainer>
      <StyledH1>
        Oferujemy kompleksowe <Color color="blue">usługi</Color>w zakresie
        wykonywania pokryć dachowych
      </StyledH1>
      <StyledP>
        Do każdego zlecenia podchodzimy w pełni{" "}
        <Color color="blue">indywidualnie</Color> i staramy się dopasować do
        każdego klienta.
      </StyledP>
      <Link to="/about">
        <StyledButton
          color="white"
          background="blue"
          weight="bold"
          hoverColor="black"
          hoverBackground="white"
        >
          O nas
        </StyledButton>
      </Link>
    </StyledContainer>
  )
}

export default HomeHeader
