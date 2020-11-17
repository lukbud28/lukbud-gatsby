import React from "react"
import styled from "styled-components"

import HomeHeader from "components/molecules/HomeHeader"
import HomeAnimation from "components/molecules/HomeAnimation"

const StyledContentContainer = styled.section`
  padding: 80px 30px 50px;
  min-height: 100vh;
  background: linear-gradient(
    ${({ theme }) => theme.lightgrey},
    ${({ theme }) => theme.secondGrey}
  );
`

const Landing = () => (
  <StyledContentContainer>
    <HomeAnimation />
    <HomeHeader />
  </StyledContentContainer>
)

export default Landing
