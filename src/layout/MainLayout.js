import React, { useState } from "react"
import styled, { ThemeProvider, css } from "styled-components"
import GlobalStyles from "layout/GlobalStyles"
import { theme, response } from "layout/theme"
import PropTypes from "prop-types"
import clsx from "clsx"

// imports
import MainMenu from "components/organisms/MainMenu"
import SidebarMenu from "components/organisms/SidebarMenu"
import Footer from "components/organisms/Footer"
import PhoneMenu from "components/organisms/PhoneMenu"
import ScrollDown from "components/molecules/ScrollDown"

const StyledPhoneMenu = styled(PhoneMenu)`
  transform: translateX(-100%);
  transition: transform 0.5s;

  &.active {
    transform: translateX(0%);
  }
`

const StyledMain = styled.main`
  @media ${response.desktop} {
    margin-left: 80px;
  }

  ${({ blackTheme }) =>
    blackTheme &&
    css`
      background-colors: #111111;
    `}
`

const MainLayout = ({ children, absoluteFooter, scrollDown }) => {
  const [isPhoneMenuOpen, setPhoneMenuOpenmet] = useState(false)

  const turnPhoneMenuOn = () => setPhoneMenuOpenmet(true)
  const turnPhoneMenuOff = () => setPhoneMenuOpenmet(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainMenu turnMenuOnFunc={turnPhoneMenuOn} />
      <SidebarMenu />
      <StyledMain>
        {children}
        <Footer absolutePosition={absoluteFooter} />
      </StyledMain>
      {scrollDown && <ScrollDown />}
      <StyledPhoneMenu
        className={clsx({ active: isPhoneMenuOpen })}
        turnMenuOffFunc={turnPhoneMenuOff}
      />
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  absoluteFooter: PropTypes.bool,
  scrollDown: PropTypes.bool,
}

MainLayout.defaultProps = {
  absoluteFooter: false,
  scrollDown: false,
}

export default MainLayout
