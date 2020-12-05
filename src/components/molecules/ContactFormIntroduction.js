import React from "react"
import styled from "styled-components"
import { response } from "layout/theme"

import InstagramIcon from "assets/icons/instagram.svg"
import FacebookIcon from "assets/icons/facebook.svg"

const StyledContainer = styled.div`
  @media ${response.tablet} {
    margin-bottom: 20px;
  }
`

const StyledIntroduction = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.grey};

  @media ${response.tablet} {
    font-size: 1.5rem;
  }

  @media ${response.desktop} {
    font-size: 1.4rem;
  }

  @media ${response.bigDesktop} {
    font-size: 1.5rem;
  }
`

const StyledIconsContainer = styled.div``

const StyledInstagramIcon = styled(InstagramIcon)`
  width: 25px;

  @media ${response.tablet} {
    width: 35px;
  }

  @media ${response.bigDesktop} {
    width: 25px;
  }
`

const StyledFacebookIcon = styled(FacebookIcon)`
  width: 25px;

  @media ${response.tablet} {
    width: 35px;
  }

  @media ${response.bigDesktop} {
    width: 25px;
  }
`

const ContactFormIntroduction = () => {
  return (
    <StyledContainer>
      <StyledIntroduction>
        Zostaw wiadomość, a odezwę się
        <br />
        najszybciej jak to możliwe.
      </StyledIntroduction>
      <StyledIconsContainer>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledInstagramIcon />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledFacebookIcon />
        </a>
      </StyledIconsContainer>
    </StyledContainer>
  )
}

export default ContactFormIntroduction
