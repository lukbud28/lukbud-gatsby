import React, { useState } from "react"
import styled from "styled-components"
import { breakpoints, response } from "layout/theme"
import { Link } from "gatsby"

// imports
import Logo from "assets/logos/logo.png"

const StyledSidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;

  @media ${response.tablet} {
    padding: 10px;
  }
`

const StyledTopSide = styled.div`
  width: 100%;
`

const StyledBottomSide = styled.div``

const StyledLogo = styled.img`
  max-height: 30px;
  filter: grayscale(90%) contrast(60%);

  @media ${response.tablet} {
    max-height: 45px;
  }

  &:hover {
    filter: grayscale(0%) contrast(100%);
  }
`

const SidebarMenu = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => {
    setViewportWidth(window.innerWidth)
  })

  return (
    <StyledSidebarMenu>
      <StyledTopSide>
        <Link to="/">
          <StyledLogo src={Logo} alt="logo of company" />
        </Link>
        {viewportWidth >= breakpoints.bigTablet && "menu"}
      </StyledTopSide>
      <StyledBottomSide>
        {viewportWidth >= breakpoints.bigTablet && "social media"}
      </StyledBottomSide>
    </StyledSidebarMenu>
  )
}

export default SidebarMenu
