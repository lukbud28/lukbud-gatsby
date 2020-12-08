import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"

import GalleryIntroduction from "components/molecules/GalleryIntroduction"
import GalleryImages from "components/molecules/GalleryImages"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;
`

const GalleryPage = () => {
  return (
    <MainLayout>
      <StyledContainer>
        <GalleryIntroduction />
        <GalleryImages />
      </StyledContainer>
    </MainLayout>
  )
}

export default GalleryPage
