import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"
import { response } from "layout/theme"

import About from "components/sections/About"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;
`

const AboutPage = () => (
  <MainLayout>
    <StyledContainer>
      <About />
    </StyledContainer>
  </MainLayout>
)

export default AboutPage
