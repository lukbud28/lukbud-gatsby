import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"
import { response } from "layout/theme"

import About from "components/sections/About"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;

  @media ${response.tablet} {
    padding: 130px 100px 50px;
  }

  @media ${response.desktop} {
    padding: 140px 200px 60px;
  }

  @media ${response.huge} {
    padding: 180px 300px 120px;
  }
`

const AboutPage = () => (
  <MainLayout>
    <StyledContainer>
      <About />
    </StyledContainer>
  </MainLayout>
)

export default AboutPage
