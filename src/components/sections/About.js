import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div``

const StyledHeader = styled.h3`
  font-size: 1.2rem;
`

const StyledParagraph = styled.p`
  font-size: 1.1rem;
`

const StyledImage = styled.img``

const About = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        Naszym głównym zajęciem i profilem działalności jest kompleksowe
        świadczenie usług dekarskich. Pragniemy oferować swoim Klientom jedynie
        najlepsze możliwe rozwiązania w tej dziedzinie, gdyż chcemy spełniać
        pokładane w nas oczekiwania.
      </StyledHeader>
      <StyledImage />
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
