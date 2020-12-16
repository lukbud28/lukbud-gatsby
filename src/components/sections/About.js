import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { response } from "layout/theme"

const StyledContainer = styled.div`
  max-width: 700px;
  margin: auto;
`

const StyledHeader = styled.h3`
  font-size: 1.2rem;

  @media ${response.tablet} {
    font-size: 1.7rem;
  }

  @media ${response.desktop} {
    font-size: 1.6rem;
  }

  @media ${response.bigDesktop} {
  }
`

const StyledParagraph = styled.p`
  font-size: 1.1rem;

  @media ${response.tablet} {
    font-size: 1.3rem;
  }
`

const StyledImage = styled(Img)`
  margin: 20px 0;

  @media ${response.tablet} {
    margin: 40px 0;
  }

  @media ${response.desktop} {
    /* max-width: 70%; */
  }
`

const About = () => {
  const { file } = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "about" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
          relativePath
        }
      }
    `
  )

  return (
    <StyledContainer>
      <StyledHeader>
        Naszym głównym zajęciem i profilem działalności jest kompleksowe
        świadczenie usług dekarskich. Pragniemy oferować swoim Klientom jedynie
        najlepsze możliwe rozwiązania w tej dziedzinie, gdyż chcemy spełniać
        pokładane w nas oczekiwania.
      </StyledHeader>
      <StyledImage fluid={file.childImageSharp.fluid} />
      <StyledParagraph>
        Pomaga nam w tym wieloletnie doświadczenie. Zatrudnieni pracownicy są
        odpowiednio wykwalifikowani i posiadają wszelkie uprawnienia do pracy w
        swoim zawodzie. Udostępniamy im wysokiej jakości, profesjonalne
        narzędzia, dzięki którym wszystkie prace przeprowadzane są szybciej oraz
        dokładniej. Cechuje nas szybka i solidna naprawa dachów oraz fachowe
        doradztwo techniczne w zakresie wyboru odpowiednich materiałów.
        Posiadamy materiały najlepszych producentów pokryć dachowych na polskim
        rynku. Zagwarantować możemy Państwu wysoką jakość oraz usługi dekarskie
        za rozsądną cenę. Mamy wieloletnie doświadczenie w zakresie wykonywania
        pokryć dachowych. Zapraszamy do współpracy.
      </StyledParagraph>
    </StyledContainer>
  )
}

export default About
