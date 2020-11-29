import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import HomeHeader from "components/molecules/HomeHeader"
import HomeAnimation from "components/molecules/HomeAnimation"

const StyledContentContainer = styled.section`
  padding: 80px 30px 50px;
  min-height: 100vh;
  background: linear-gradient(${({ theme }) => theme.lightgrey}, #777777);

  @media ${response.bigTablet} {
    padding: 150px 50px 100px;
  }

  @media ${response.desktop} {
    display: flex;
    padding: 0 80px;
  }
`

const Landing = () => (
  <StyledContentContainer>
    <HomeAnimation />
    <HomeHeader />
  </StyledContentContainer>
)

export default Landing
