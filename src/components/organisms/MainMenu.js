import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

// imports
import Hamburger from "components/molecules/Hamburger"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
`

const MainMenu = () => {
  return (
    <StyledNavigation>
      <Hamburger />

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/offer">Offer</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link> */}
    </StyledNavigation>
  )
}

export default MainMenu
