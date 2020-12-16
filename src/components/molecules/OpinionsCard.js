/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.lightgrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  margin: 10px 0 0;

  @media ${response.tablet} {
    margin: 0;
    padding: 30px 30px 20px;
  }
`

const StyledPoints = styled.h1`
  color: ${({ theme }) => theme.blue};
  font-size: 2.5rem;

  @media ${response.tablet} {
    font-size: 3rem;
  }
`

const StyledComment = styled.p`
  margin: 20px 0;
  color: black;
  font-size: 1.1rem;
  height: 50px;

  @media ${response.tablet} {
    font-size: 1.7rem;
    height: 80px;
    margin: 25px 0;
  }

  @media ${response.desktop} {
    font-size: 1.6rem;
    margin: 30px 0 40px;
  }
`

const StyledCommentInformations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledCommentInformationsText = styled.h5`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.weights.regular};

  @media ${response.tablet} {
    font-size: 1.5rem;
  }
`

const OpinionsCard = ({ data }) => {
  const stringDate = new Date(data.date.seconds * 1000).toLocaleString()

  return (
    <StyledContainer>
      <StyledPoints>{data.points}/5</StyledPoints>
      <StyledComment>{data.comment}</StyledComment>
      <StyledCommentInformations>
        <StyledCommentInformationsText>
          {stringDate.substr(0, stringDate.indexOf(","))}
        </StyledCommentInformationsText>
        <StyledCommentInformationsText>
          {data.author}
        </StyledCommentInformationsText>
      </StyledCommentInformations>
    </StyledContainer>
  )
}

OpinionsCard.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    date: PropTypes.objectOf(PropTypes.number).isRequired,
  }).isRequired,
}

export default OpinionsCard
