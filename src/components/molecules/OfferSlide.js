import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response } from "layout/theme"

const StyledContainer = styled.div``

const StyledParagraph = styled.p`
  height: 150px;
  font-size: 1.2rem;

  @media ${response.tablet} {
    font-size: 1.4rem;
  }

  @media ${response.desktop} {
    height: auto;
  }
`

const StyledTitle = styled.h3`
  display: none;

  @media ${response.tablet} {
    display: block;
    font-size: 2rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.blue};
  }
`

const OfferSlide = ({ children, title }) => {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledParagraph>{children}</StyledParagraph>
    </StyledContainer>
  )
}

OfferSlide.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default OfferSlide
