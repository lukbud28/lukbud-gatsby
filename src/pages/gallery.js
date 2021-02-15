import React from "react"
import MainLayout from "layout/MainLayout"
import styled from "styled-components"

import GalleryIntroduction from "components/molecules/GalleryIntroduction"
import GalleryImages from "components/molecules/GalleryImages"
import SEO from "components/sections/SEO"

const StyledContainer = styled.div`
  padding: 80px 30px 50px;
`

const GalleryPage = () => {
  return (
    <MainLayout>
      <SEO title="Galeria" />
      <StyledContainer>
        <GalleryIntroduction />
        <GalleryImages />
      </StyledContainer>
    </MainLayout>
  )
}

export default GalleryPage
