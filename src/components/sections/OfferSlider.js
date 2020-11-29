import React, { useState, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap"
import { response } from "layout/theme"

import OfferSlide from "components/molecules/OfferSlide"

const StyledOfferContainer = styled.div`
  @media ${response.desktop} {
    display: flex;
    justify-content: space-between;
  }
`

const StyledSliderContent = styled.div`
  margin-bottom: 20px;

  @media ${response.desktop} {
    width: 55%;
    margin: 0;
    display: flex;
    align-items: center;
  }
`

const StyledSliderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${response.desktop} {
    width: 40%;
  }
`

const StyledSliderMenu = styled.div`
  width: 200px;
  display: flex;
  overflow: hidden;

  @media ${response.tablet} {
    overflow: auto;
    width: auto;
  }

  @media ${response.desktop} {
    justify-content: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      background-color: ${({ theme }) => theme.grey};
    }
  }
`

const StyledMenuList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(6, 200px);

  @media ${response.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }

  @media ${response.desktop} {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
`

const StyledArrow = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font-size: 4rem;
  font-weight: ${({ theme }) => theme.weights.bold};

  @media ${response.tablet} {
    display: none;
  }
`

const StyledMenuItem = styled.li`
  color: white;
  font-weight: ${({ theme }) => theme.weights.semiBold};
  font-size: 1.1rem;
  display: flex;
  background-color: ${({ theme }) => theme.blue};
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 5px 10px;
  transition: background-color 0.4s;
  cursor: pointer;

  @media ${response.tablet} {
    font-size: 1.3rem;
    padding: 10px 20px;
  }

  @media ${response.desktop} {
    margin: 5px;
    padding: 15px 35px;
    border-radius: 20px;
  }

  &:hover {
    background-color: black;
  }
`

const Data = [
  {
    name: "Pomiar i wycena",
    content:
      "Oferujemy Państwu usługę bezpłatnego pomiaru i wyceny na terenie powiatu.: Podkarpackiego, Świętokrzyskiego oraz Lubelskiego. Usługa obejmuje: przyjazd naszego doradcy na wskazany przez Państwa adres, w uzgodnionym wcześniej terminie pomoc w doborze produktów, prezentację możliwych rozwiązań wykonanie profesjonalnego pomiaru, gwarantującego właściwą kalkulację wyceny przygotowanie oferty",
  },
  {
    name: "Montaż obróbek blacharskich",
    content:
      "Obróbki blacharskie to niezwykle ważne prace, których efekt nie jest widoczny na pierwszy rzut oka, ale bez nich pokrycie dachowe nie będzie szczelne. Ich profesjonalny montaż to gwarancja wodoodporności dachu i ładny wygląd dachu.",
  },
  {
    name: "Krycie i ocieplanie dachód",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ut nulla sunt quam laboriosam, quidem ipsam nemo ad, dolore dolorem quibusdam nostrum, reiciendis perferendis odio modi quo ratione in eum.",
  },
  {
    name: "Montaż okien dachowych",
    content:
      "Oferujemy profesjonalny montaż okien i wyłazów w nowych jak również w istniejących pokryciach dachowych. Naszym rekomendowanym wykonawcą jest firma Velux.(szukam żeby coś dopisać)",
  },
  {
    name: "Montaż podbitek dachowych i systemów rynnowych.",
    content:
      "Podbitki dachowe  to idealne rozwiązanie na wykończenie dachu. Produkowane w wersji plastikowej, aluminiowej i stalowej są szybkie w montażu i nie posiadają widocznych wkrętów montażowych.(możliwe że będzie zmienione)",
  },
  {
    name: "Montaż i adaptacja starych konstrukcji dachowych",
    content:
      "Oferujemy transport do klienta oraz usługi montażowe drewnianych konstrukcji dachowych . wykonujemy montaż drewnianych konstrukcji dachowych, podbitek dachowych czy adaptujemy stare konstrukcje dachowe. (będzie dopisane)",
  },
]

const OfferSlider = () => {
  const [slide, setSlide] = useState(0)

  const changeSlide = increment => {
    gsap.to(menuListRef.current.children, {
      x: -200 * (slide + increment),
      duration: 0.5,
    })
    setSlide(slide + increment)
  }

  const menuListRef = useRef()

  return (
    <StyledOfferContainer>
      <StyledSliderContent>
        <OfferSlide title={Data[slide].name}>{Data[slide].content}</OfferSlide>
      </StyledSliderContent>
      <StyledSliderMenuContainer>
        <StyledArrow onClick={() => changeSlide(-1)} disabled={slide === 0}>
          {"<"}
        </StyledArrow>
        <StyledSliderMenu ref={menuListRef}>
          <StyledMenuList>
            {Data.map(offer => (
              <StyledMenuItem
                onClick={() => setSlide(Data.indexOf(offer))}
                key={offer.name}
              >
                {offer.name}
              </StyledMenuItem>
            ))}
          </StyledMenuList>
        </StyledSliderMenu>
        <StyledArrow
          onClick={() => changeSlide(1)}
          disabled={slide === Data.length - 1}
        >
          {">"}
        </StyledArrow>
      </StyledSliderMenuContainer>
    </StyledOfferContainer>
  )
}

export default OfferSlider
