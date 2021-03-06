import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  align-items: center;
`

const StyledPoints = styled.h1`
  text-align: center;
  font-size: 2.3rem;

  @media ${response.tablet} {
    font-size: 3.3rem;
  }
`

const StyledPointsDiscription = styled.h3`
  text-align: center;
  font-family: "Lora";
  font-size: 1.2rem;
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.weights.light};

  @media ${response.tablet} {
    font-size: 1.7rem;
  }
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
