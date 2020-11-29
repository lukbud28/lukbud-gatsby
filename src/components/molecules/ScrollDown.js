import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledText = styled.p`
  color: black;
  position: fixed;
  bottom: 5px;
  right: 5px;
  transform: rotate(90deg) translateX(-150%) translateY(-50%);
  display: none;

  @media ${response.tablet} {
    display: block;
  }

  &::after {
    content: "";
    width: 80%;
    height: 2px;
    background-color: black;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 120%;
  }
`

const ScrollDown = () => {
  return <StyledText>scroll down</StyledText>
}

export default ScrollDown
