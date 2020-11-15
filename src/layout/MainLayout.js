import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "layout/globalStyles"
import { theme } from "layout/theme"
import PropTypes from "prop-types"

// imports
import MainMenu from "components/organisms/MainMenu"

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainMenu />
      <main>{children}</main>
    </ThemeProvider>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
