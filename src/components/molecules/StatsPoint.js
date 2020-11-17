import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  align-items: center;
`

const StyledPoints = styled.h1`
  text-align: center;
  font-size: 2rem;
`

const StyledPointsDiscription = styled.h3`
  text-align: center;
  font-family: "Lora";
  font-size: 1.1rem;
  color: ${({ theme }) => theme.grey};
`

const StatsPoint = ({ points, pointsDiscription }) => {
  return (
    <StyledContainer>
      <StyledPoints>{points}</StyledPoints>
      <StyledPointsDiscription>{pointsDiscription}</StyledPointsDiscription>
    </StyledContainer>
  )
}

StatsPoint.propTypes = {
  points: PropTypes.string.isRequired,
  pointsDiscription: PropTypes.string.isRequired,
}

export default StatsPoint
