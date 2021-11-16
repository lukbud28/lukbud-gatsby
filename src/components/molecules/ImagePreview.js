import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`

const StyledImage = styled(Img)`
  width: auto;
  height: auto;
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

const StyledCancel = styled.button`
  width: 35px;
  height: 30px;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;

  @media ${response.tablet} {
    width: 45px;
    top: 20px;
  }
`

const StyledCancelArm = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: white;
    transform: rotate(-90deg);
  }
`

const ImagePreview = ({ imageSource, switchImageFunc, closePreviewFunc }) => {
  return (
    <StyledContainer>
      <StyledCancel onClick={closePreviewFunc}>
        <StyledCancelArm />
      </StyledCancel>
      <StyledImage fluid={imageSource} objectFit="contain" />
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
