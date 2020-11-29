import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"
import { response } from "layout/theme"

import OfferSlider from "components/sections/OfferSlider"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;

  @media ${response.tablet} {
    padding: 130px 100px 50px;
  }

  @media ${response.desktop} {
    padding: 140px 150px 40px;
  }

  @media ${response.huge} {
    padding: 240px 300px 50px;
  }
`

const OfferPage = () => (
  <MainLayout absoluteFooter>
    <StyledContainer>
      <OfferSlider />
    </StyledContainer>
  </MainLayout>
)

export default OfferPage
