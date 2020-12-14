import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  @media ${response.tablet} {
    padding: 20px 20%;
  }

  @media ${response.desktop} {
    padding: 50px 30%;
  }

  @media ${response.huge} {
    padding: 80px 40%;
  }
`

const StyledHeader = styled.h1`
  font-size: 1.6rem;
  text-align: center;

  @media ${response.phone} {
    font-size: 1.8rem;
  }

  @media ${response.tablet} {
    font-size: 2rem;
  }

  @media ${response.desktop} {
    font-size: 2.1rem;
  }
`

const StyledParagraph = styled.p`
  text-align: center;

  @media ${response.phone} {
    font-size: 1.2rem;
  }

  @media ${response.tablet} {
    font-size: 1.3rem;
  }

  @media ${response.desktop} {
    font-size: 1.4rem;
  }
`

const GalleryIntroduction = () => {
  return (
    <StyledContainer>
      <StyledHeader>Galeria</StyledHeader>
      <StyledParagraph>
        I work with my client to build a space that reflects their own unique
        style. Whether it residential or commercial, it should be 100% you.
      </StyledParagraph>
    </StyledContainer>
  )
}

export default GalleryIntroduction
