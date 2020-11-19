import React from "react"
import styled from "styled-components"

import StatsPoint from "components/molecules/StatsPoint"

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.lightgrey};
  padding: 30px 20px;
`

const Data = [
  {
    id: 0,
    points: "11",
    pointsDiscription: "renera entera errato regenta",
  },
  {
    id: 1,
    points: "158",
    pointsDiscription: "lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    points: "92",
    pointsDiscription: "estella esta es la violla",
  },
  {
    id: 3,
    points: "56",
    pointsDiscription: "it's an amazing time of us",
  },
]

const Stats = () => {
  return (
    <StyledContainer>
      {Data.map(statsPoint => (
        <StatsPoint
          points={statsPoint.points}
          pointsDiscription={statsPoint.pointsDiscription}
          key={statsPoint.id}
        />
      ))}
    </StyledContainer>
  )
}

export default Stats
