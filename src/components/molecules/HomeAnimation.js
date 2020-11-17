import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import HomeImage from "assets/images/animation.svg"

const StyledImage = styled.img`
  max-width: 100%;
`

const HomeAnimation = ({ className }) => (
  <StyledImage
    className={className}
    src={HomeImage}
    alt="Animation with building house"
  />
)

HomeAnimation.propTypes = { className: PropTypes.string }

HomeAnimation.defaultProps = { className: null }

export default HomeAnimation
