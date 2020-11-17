import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "layout/globalStyles"
import { theme } from "layout/theme"
import PropTypes from "prop-types"

// imports
import MainMenu from "components/organisms/MainMenu"
import SidebarMenu from "components/organisms/SidebarMenu"

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainMenu />
      <SidebarMenu />
      <main>{children}</main>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
