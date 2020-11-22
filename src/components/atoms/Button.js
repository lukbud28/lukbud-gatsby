import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledButton = styled.button`
  background-color: ${({ theme, background }) => theme[background]};
  color: ${({ theme, color }) => theme[color]};
  font-weight: ${({ theme, weight }) => theme.weights[weight]};
  padding: 5px 50px;
  border-radius: 30px;
  font-size: 1.4rem;
  transition: background-color 0.5s, color 0.5s;

  &:hover {
    color: ${({ theme, hoverColor }) => theme[hoverColor]};
    background-color: ${({ theme, hoverBackground }) => theme[hoverBackground]};
  }
`

const Button = ({
  children,
  color,
  background,
  weight,
  hoverColor,
  hoverBackground,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      color={color}
      background={background}
      weight={weight}
      hoverColor={hoverColor}
      hoverBackground={hoverBackground}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  hoverBackground: PropTypes.string.isRequired,
}

export default Button
