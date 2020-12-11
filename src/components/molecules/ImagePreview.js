import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`

const StyledImage = styled(Img)`
  max-width: 80%;
  max-height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const StyledControlsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
`

const StyledImageSwitchButton = styled.button`
  font-size: 5rem;
`

const ImagePreview = ({ imageSource, switchImageFunc, closePreviewFunc }) => {
  return (
    <StyledContainer
      onClick={e => {
        e.stopPropagation()
        closePreviewFunc()
      }}
    >
      <StyledImage fluid={imageSource} />
      <StyledControlsWrapper>
        <StyledImageSwitchButton onClick={() => switchImageFunc(-1)}>
          {"<"}
        </StyledImageSwitchButton>
        <StyledImageSwitchButton onClick={() => switchImageFunc(1)}>
          {">"}
        </StyledImageSwitchButton>
      </StyledControlsWrapper>
    </StyledContainer>
  )
}

ImagePreview.propTypes = {
  imageSource: PropTypes.shape({
    aspectRatio: PropTypes.number,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    tracedSvg: PropTypes.string,
  }).isRequired,
  switchImageFunc: PropTypes.func.isRequired,
  closePreviewFunc: PropTypes.func.isRequired,
}

export default ImagePreview
