import React, { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyles from "layout/GlobalStyles"
import { theme } from "layout/theme"
import PropTypes from "prop-types"
import clsx from "clsx"

// imports
import MainMenu from "components/organisms/MainMenu"
import SidebarMenu from "components/organisms/SidebarMenu"
import Footer from "components/organisms/Footer"
import PhoneMenu from "components/organisms/PhoneMenu"

const StyledPhoneMenu = styled(PhoneMenu)`
  transform: translateX(-100%);
  transition: transform 0.5s;

  &.active {
    transform: translateX(0%);
  }
`

const MainLayout = ({ children }) => {
  const [isPhoneMenuOpen, setPhoneMenuOpenmet] = useState(false)

  const turnPhoneMenuOn = () => setPhoneMenuOpenmet(true)
  const turnPhoneMenuOff = () => setPhoneMenuOpenmet(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainMenu turnMenuOnFunc={turnPhoneMenuOn} />
      <SidebarMenu />
      <main>{children}</main>
      <Footer />
      <StyledPhoneMenu
        className={clsx({ active: isPhoneMenuOpen })}
        turnMenuOffFunc={turnPhoneMenuOff}
      />
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
