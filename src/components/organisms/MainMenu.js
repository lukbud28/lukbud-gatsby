import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

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

const MainMenu = ({ turnMenuOnFunc }) => {
  return (
    <StyledNavigation>
      <Hamburger turnMenuOnFunc={turnMenuOnFunc} />

      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/offer">Offer</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/contact">Contact</Link> */}
    </StyledNavigation>
  )
}

MainMenu.propTypes = {
  turnMenuOnFunc: PropTypes.func.isRequired,
}

export default MainMenu
