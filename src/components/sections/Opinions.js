import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { response } from "layout/theme"
import firebase from "gatsby-plugin-firebase"

import OpinionsCard from "components/molecules/OpinionsCard"
import OpinionsForm from "components/molecules/OpinionsForm"

const StyledContainer = styled.section`
  width: 100%;
  padding: 50px;
  text-align: right;

  @media ${response.phone} {
    padding: 50px 80px;
  }

  @media ${response.bigTablet} {
    padding: 100px 200px;
  }

  @media ${response.desktop} {
    padding: 100px;
  }

  @media ${response.bigDesktop} {
    padding: 150px;
  }

  @media ${response.huge} {
    padding: 200px 20%;
  }
`

const StyledOpinionsTitle = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.grey};
  text-align: left;

  @media ${response.tablet} {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`

const StyledOpinionsContainer = styled.div`
  @media ${response.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    grid-column-end: end;
  }

  @media ${response.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const StyledFormOpenButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  margin: 10px 0 0;

  @media ${response.tablet} {
    font-size: 1.5rem;
  }
`

const Opinions = () => {
  const [isFormOpen, setFormOpenmet] = useState(false)
  const [opinionsData, setOpinionsData] = useState()

  useEffect(() => {
    const db = firebase.firestore()

    db.collection("opinions")
      .orderBy("date", "desc")
      .limit(3)
      .get()
      .then(result => {
        const opinions = []

        result.forEach(res => {
          opinions.push({ id: res.id, ...res.data() })
        })

        setOpinionsData(opinions)
      })
  }, [])

  return (
    <StyledContainer>
      <StyledOpinionsTitle>Opinie o naszej firmie:</StyledOpinionsTitle>
      <StyledOpinionsContainer>
        {opinionsData &&
          opinionsData.map(opinion => (
            <OpinionsCard data={opinion} key={opinion.id} />
          ))}
      </StyledOpinionsContainer>
      <StyledFormOpenButton onClick={() => setFormOpenmet(!isFormOpen)}>
        {isFormOpen ? "Nie chcę dodawać opinii" : "Dodaj opinię"}
      </StyledFormOpenButton>
      {isFormOpen && <OpinionsForm />}
    </StyledContainer>
  )
}

export default Opinions
