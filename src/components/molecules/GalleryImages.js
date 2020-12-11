import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import ImagePreview from "components/molecules/ImagePreview"

const StyledContainer = styled.div`
  margin-top: 20px;
`

const GalleryImages = () => {
  const [imagePreviewSource, setImagePreviewSource] = useState(false)

  const OpenImagesPreview = (path, fluid) => {
    setImagePreviewSource({
      indexInArray: arrayOfPhotoes.indexOf(path),
      src: path,
      fluid,
    })
  }

  const nextPrevImage = operator => {
    setImagePreviewSource(prevState => {
      const count = prevState.indexInArray + operator

      if (count !== 0 && count !== arrayOfPhotoes.length) {
        return {
          indexInArray: count,
          src: arrayOfPhotoes[count],
          fluid: allFile.nodes[count].childImageSharp.fluid,
        }
      }
      return prevState
    })
  }

  const closePreview = () => setImagePreviewSource(false)

  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
          nodes {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
            relativePath
          }
        }
      }
    `
  )

  const arrayOfPhotoes = []

  return (
    <StyledContainer>
      {allFile.nodes.map(node => {
        arrayOfPhotoes.push(node.relativePath)
        return (
          <div
            role="presentation"
            onClick={
              () =>
                OpenImagesPreview(node.relativePath, node.childImageSharp.fluid)
              // eslint-disable-next-line react/jsx-curly-newline
            }
            key={node.relativePath}
          >
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        )
      })}
      {imagePreviewSource !== false && (
        <ImagePreview
          imageSource={imagePreviewSource.fluid}
          switchImageFunc={nextPrevImage}
          closePreviewFunc={closePreview}
        />
      )}
    </StyledContainer>
  )
}

export default GalleryImages
