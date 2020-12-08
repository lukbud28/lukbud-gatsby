import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div``

const StyledHeader = styled.h1`
  font-size: 1.6rem;
  text-align: center;
`

const StyledParagraph = styled.p`
  text-align: center;
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
