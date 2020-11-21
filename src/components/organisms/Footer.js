/* eslint-disable react/jsx-one-expression-per-line */
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const StyledFooterColumn = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
`

const StyledFooterText = styled.h5`
  font-weight: ${({ theme }) => theme.weights.regular};
  text-align: center;
  color: ${({ theme }) => theme.grey};
`

const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.grey};
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterColumn>
        <StyledLink href="https://facebook.com">
          <StyledFooterText>Facebook</StyledFooterText>
        </StyledLink>
        <StyledLink href="https://instagram.com">
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
          {new Date().getFullYear} © lukbud.site
        </StyledFooterText>
        <StyledFooterText>Created by Igor Patro</StyledFooterText>
      </StyledFooterColumn>
    </StyledFooter>
  )
}

export default Footer
