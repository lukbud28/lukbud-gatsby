import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  background-color: transparent;
`

const StyledHamburgerArm = styled.div`
  width: 100%;
  height: 5px;
  background-color: black;
  position: relative;

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

const Hamburger = () => {
  return (
    <StyledHamburger>
      <StyledHamburgerArm />
    </StyledHamburger>
  )
}

export default Hamburger
