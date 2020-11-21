import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response } from "layout/theme"

const StyledHamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background-color: transparent;

  @media ${response.tablet} {
    width: 50px;
    height: 40px;
  }
`

const StyledHamburgerArm = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
  position: relative;

  @media ${response.tablet} {
    height: 6px;
  }

  &::before,
  &::after {
    content: "";
    width: inherit;
    height: inherit;
    position: absolute;
    left: 0;
    background-color: black;
  }

  &::before {
    top: -200%;
  }

  &::after {
    top: 200%;
  }
`

const Hamburger = ({ turnMenuOnFunc }) => {
  return (
    <StyledHamburger onClick={turnMenuOnFunc}>
      <StyledHamburgerArm />
    </StyledHamburger>
  )
}

Hamburger.propTypes = {
  turnMenuOnFunc: PropTypes.func.isRequired,
}

export default Hamburger
