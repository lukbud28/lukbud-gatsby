import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 10%;
  height: 10%;
`

const ImagePreview = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

ImagePreview.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ImagePreview
