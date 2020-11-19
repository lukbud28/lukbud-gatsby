/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.lightgrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  margin: 10px 0 0;
`

const StyledPoints = styled.h1`
  color: ${({ theme }) => theme.blue};
  font-size: 2.5rem;
`

const StyledComment = styled.p`
  margin: 20px 0;
  color: black;
  font-size: 1.1rem;
  height: 50px;
`

const StyledCommentInformations = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledCommentInformationsText = styled.h5`
  color: ${({ theme }) => theme.grey};
  font-weight: ${({ theme }) => theme.weights.regular};
`

const OpinionsCard = ({ data }) => {
  return (
    <StyledContainer>
      <StyledPoints>{data.points}/5</StyledPoints>
      <StyledComment>{data.comment}</StyledComment>
      <StyledCommentInformations>
        <StyledCommentInformationsText>
          {data.date}
        </StyledCommentInformationsText>
        <StyledCommentInformationsText>
          {data.author}
        </StyledCommentInformationsText>
      </StyledCommentInformations>
    </StyledContainer>
  )
}

OpinionsCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
}

export default OpinionsCard
