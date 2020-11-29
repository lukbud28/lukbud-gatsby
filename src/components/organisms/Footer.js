/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import styled, { css } from "styled-components"
import { response } from "layout/theme"
import PropTypes from "prop-types"

const StyledFooter = styled.footer`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${({ absolutePosition }) =>
    absolutePosition
      ? css`
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
        `
      : null}

  @media ${response.tablet} {
    display: flex;
    justify-content: center;
    padding: 30px 10%;
  }
`

const StyledFooterColumn = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;

  @media ${response.tablet} {
    margin-right: 30px;
  }
`

const StyledFooterText = styled.h5`
  font-weight: ${({ theme }) => theme.weights.regular};
  text-align: center;
  color: ${({ theme }) => theme.grey};

  @media ${response.tablet} {
    font-size: 1.4rem;
    text-align: left;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
`

const Footer = ({ absolutePosition }) => {
  return (
    <StyledFooter absolutePosition={absolutePosition}>
      <StyledFooterColumn>
        <StyledLink href="https://facebook.com" target="_blank">
          <StyledFooterText>Facebook</StyledFooterText>
        </StyledLink>
        <StyledLink href="https://instagram.com" target="_blank">
          <StyledFooterText>Instagram</StyledFooterText>
        </StyledLink>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <StyledFooterText>37-430 Stary Nart</StyledFooterText>
        <StyledFooterText>gm. Jeżowe</StyledFooterText>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <StyledFooterText>lukasz@lukbud.site</StyledFooterText>
        <StyledFooterText>(+48) 555 555 234</StyledFooterText>
      </StyledFooterColumn>
      <StyledFooterColumn>
        <StyledFooterText>
          {new Date().getFullYear()} © lukbud.site
        </StyledFooterText>
        <StyledFooterText>Created by Igor Patro</StyledFooterText>
      </StyledFooterColumn>
    </StyledFooter>
  )
}

Footer.propTypes = {
  absolutePosition: PropTypes.bool.isRequired,
}
export default Footer
