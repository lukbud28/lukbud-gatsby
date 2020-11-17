import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledSpan = styled.span`
  color: ${({ color, theme }) => theme[color]};
  font-size: inherit;
`

const Color = ({ color, children }) => {
  return <StyledSpan color={color}>{children}</StyledSpan>
}

Color.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Color
