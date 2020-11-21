import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response } from "layout/theme"

import HomeImage from "assets/images/animation.svg"

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledImage = styled.img`
  width: 100%;

  @media ${response.tablet} {
    width: 70%;
    max-width: 470px;
  }
`

const HomeAnimation = ({ className }) => (
  <StyledContainer>
    <StyledImage
      className={className}
      src={HomeImage}
      alt="Animation with building house"
    />
  </StyledContainer>
)

HomeAnimation.propTypes = { className: PropTypes.string }

HomeAnimation.defaultProps = { className: null }

export default HomeAnimation
