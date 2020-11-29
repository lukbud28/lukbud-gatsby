import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { response } from "layout/theme"
import Animation from "assets/images/svg/animation.svg"
import gsap from "gsap"

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${response.desktop} {
    width: 50%;
  }
`

const StyledImage = styled(Animation)`
  width: 100%;
  height: auto;

  @media ${response.tablet} {
    width: 70%;
    max-width: 470px;
  }
`

const HomeAnimation = () => {
  const wrapper = useRef()

  useEffect(() => {
    const [elements] = wrapper.current.children

    // From top: plate, boards, base
    const house = elements.querySelector("#house").children

    const plateRight = [...elements.querySelector("#plate-right").children]
    const boardsRight = [...elements.querySelector("#boards-right").children]
    const baseRight = [...elements.querySelector("#base-right").children]

    const plateLeft = elements.querySelector("#plate-left")
    const boardsLeft = elements.querySelector("#boards-left")
    const baseLeft = [...elements.querySelector("#base-left").children]

    const setInvisibility = childrens => {
      childrens.forEach(children => {
        gsap.set(children, { autoAlpha: 0 })
      })
    }

    // Set invisibilities for whole roof elements
    setInvisibility(plateRight)
    setInvisibility(boardsRight)
    setInvisibility(baseRight)
    setInvisibility(baseLeft)
    gsap.set([plateLeft, boardsLeft, house], { autoAlpha: 0 })

    const TL = gsap.timeline({ defaults: { ease: "power3.inOut" } })

    // Animation
    TL.fromTo(house, { y: "+=100" }, { duration: 2, autoAlpha: 1, y: "-=100" })
    baseLeft.forEach(base => {
      TL.to(base, { duration: 0.2, autoAlpha: 1 })
    })
    TL.fromTo(
      boardsLeft,
      { x: "-=40", y: "-=10" },
      { duration: 2, autoAlpha: 1, x: "+=40", y: "+=10" }
    )
    TL.fromTo(
      plateLeft,
      { x: "-=40", y: "-=10" },
      { duration: 2, autoAlpha: 1, x: "+=40", y: "+=10" }
    )
    baseRight.forEach(base => {
      TL.fromTo(
        base,
        { x: "+=40", y: "-=30" },
        { duration: 0.2, autoAlpha: 1, x: "-=40", y: "+=30" }
      )
    })
    boardsRight.forEach(board => {
      TL.fromTo(
        board,
        { x: "-=40", y: "-=10" },
        { duration: 0.1, autoAlpha: 1, x: "+=40", y: "+=10" }
      )
    })
    plateRight.forEach(plate => {
      TL.to(plate, { duration: 0.02, autoAlpha: 1 })
    })
  }, [])

  return (
    <StyledContainer ref={wrapper}>
      <StyledImage />
    </StyledContainer>
  )
}

export default HomeAnimation
