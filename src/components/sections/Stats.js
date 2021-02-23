import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import StatsPoint from "components/molecules/StatsPoint"

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.lightgrey};
  padding: 30px 20px;

  @media ${response.tablet} {
    padding: 100px 10%;
  }

  @media ${response.desktop} {
    padding: 150px 15%;
  }

  @media ${response.bigDesktop} {
    padding: 100px 15%;
  }

  @media ${response.huge} {
    padding: 140px 15%;
  }
`

const Data = [
  {
    id: 0,
    points: "+1000",
    pointsDiscription: "Zbudowane dachy",
  },
  {
    id: 1,
    points: "+1000",
    pointsDiscription: "Zadowolonych klientów",
  },
  {
    id: 2,
    points: "5",
    pointsDiscription: "Pracowników",
  },
  {
    id: 3,
    points: "+1000",
    pointsDiscription: "Osiągniecia firmy",
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
