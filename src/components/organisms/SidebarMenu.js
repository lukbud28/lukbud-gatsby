import React, { useState } from "react"
import styled from "styled-components"
import { breakpoints, response } from "layout/theme"
import { Link } from "gatsby"
import clsx from "clsx"

// imports
import Logo from "assets/logos/logo.png"
import InstagramIcon from "assets/icons/instagram.svg"
import FacebookIcon from "assets/icons/facebook.svg"

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

  @media ${response.desktop} {
    position: fixed;
    width: 80px;
    height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.grey};
    background: linear-gradient(${({ theme }) => theme.lightgrey}, #777777);
  }
`

const StyledTopSide = styled.div`
  width: 100%;

  @media ${response.bigTablet} {
    display: flex;
    flex-direction: column;
  }
`

const StyledBottomSide = styled.div``

const StyledLogo = styled.img`
  max-height: 30px;
  filter: grayscale(90%) contrast(60%);
  transition: width 0.4s, filter 0.4s;

  @media ${response.tablet} {
    width: 70px;
    max-height: none;
  }

  @media ${response.desktop} {
    width: 90px;

    &.notTop {
      width: 60px;
    }
  }

  &:hover {
    filter: grayscale(0%) contrast(100%);
  }
`

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
`

const StyledMenuLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.4rem;

  &.active {
    color: ${({ theme }) => theme.blue};
  }
`

const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFacebookIcon = styled(FacebookIcon)`
  width: 30px;
  height: auto;
`

const StyledInstagramIcon = styled(InstagramIcon)`
  width: 30px;
  height: auto;
`

const SidebarMenu = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
  const [pageYOffset, setPageYOffset] = useState(window.pageYOffset)

  window.addEventListener("resize", () => {
    setViewportWidth(window.innerWidth)
  })

  window.addEventListener("scroll", () => {
    setPageYOffset(window.pageYOffset)
  })

  return (
    <StyledSidebarMenu>
      <StyledTopSide>
        <Link to="/">
          <StyledLogo
            className={clsx({ notTop: pageYOffset > 0 })}
            src={Logo}
            alt="logo of company"
          />
        </Link>
        {viewportWidth >= breakpoints.desktop && (
          <StyledMenu>
            <StyledMenuLink to="/" activeClassName="active">
              Home
            </StyledMenuLink>
            <StyledMenuLink to="/about" activeClassName="active">
              About
            </StyledMenuLink>
            <StyledMenuLink to="/offer" activeClassName="active">
              Offer
            </StyledMenuLink>
            <StyledMenuLink to="/gallery" activeClassName="active">
              Gallery
            </StyledMenuLink>
            <StyledMenuLink to="/contact" activeClassName="active">
              Contact
            </StyledMenuLink>
          </StyledMenu>
        )}
      </StyledTopSide>
      <StyledBottomSide>
        {viewportWidth >= breakpoints.desktop && (
          <StyledSocialMedia>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledInstagramIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledFacebookIcon />
            </a>
          </StyledSocialMedia>
        )}
      </StyledBottomSide>
    </StyledSidebarMenu>
  )
}

export default SidebarMenu
