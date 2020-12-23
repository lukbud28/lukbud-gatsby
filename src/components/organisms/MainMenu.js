import React, { useState, useEffect } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response, breakpoints } from "layout/theme"
import { Link } from "gatsby"

// imports
import Hamburger from "components/molecules/Hamburger"

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;

  @media ${response.tablet} {
    padding: 10px;
  }
`

const StyledMenuList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 20px;
`

const StyledMenuListItem = styled.li``

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.grey};
  text-decoration: none;
  font-size: 1.8rem;
  margin-left: 20px;

  &.active {
    color: ${({ theme }) => theme.blue};
  }
`

const MainMenu = ({ turnMenuOnFunc }) => {
  const [viewportWidth, setViewportWidth] = useState(null)

  useEffect(() => {
    setViewportWidth(window.innerWidth)

    window.addEventListener("resize", () => {
      setViewportWidth(window.innerWidth)
    })
  }, [])

  return (
    <StyledNavigation>
      {viewportWidth >= breakpoints.desktop ? (
        <StyledMenuList>
          <StyledMenuListItem>
            <StyledLink to="/" activeClassName="active">
              Home
            </StyledLink>
          </StyledMenuListItem>
          <StyledMenuListItem>
            <StyledLink to="/about" activeClassName="active">
              About
            </StyledLink>
          </StyledMenuListItem>
          <StyledMenuListItem>
            <StyledLink to="/offer" activeClassName="active">
              Offer
            </StyledLink>
          </StyledMenuListItem>
          <StyledMenuListItem>
            <StyledLink to="/gallery" activeClassName="active">
              Gallery
            </StyledLink>
          </StyledMenuListItem>
          <StyledMenuListItem>
            <StyledLink to="/contact" activeClassName="active">
              Contact
            </StyledLink>
          </StyledMenuListItem>
        </StyledMenuList>
      ) : (
        <Hamburger turnMenuOnFunc={turnMenuOnFunc} />
      )}
    </StyledNavigation>
  )
}

MainMenu.propTypes = {
  turnMenuOnFunc: PropTypes.func.isRequired,
}

export default MainMenu
