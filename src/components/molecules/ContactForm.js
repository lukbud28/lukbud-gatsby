import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { response } from "layout/theme"
import axios from "axios"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledInputsContainer = styled.div`
  @media ${response.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    grid-gap: 0 20px;
  }
`

const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  font-family: "Poppins";
  width: 100%;

  @media ${response.tablet} {
    width: 100%;
    margin-bottom: 15px;
    font-size: 1.4rem;
  }

  @media ${response.desktop} {
    font-size: 1.2rem;
  }

  &.error {
    border-bottom: 1px solid red;
  }
`

const StyledTextarea = styled.textarea`
  font-size: 1.2rem;
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  font-family: "Poppins";
  min-width: 100%;
  max-width: 100%;
  margin-top: 5px;

  @media ${response.tablet} {
    font-size: 1.4rem;
  }

  @media ${response.desktop} {
    font-size: 1.2rem;
  }

  &.error {
    border-bottom: 1px solid red;
  }
`

const StyledSubmit = styled.input`
  margin-top: 15px;
  color: white;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 20px;
  padding: 8px 45px;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;

  @media ${response.tablet} {
    font-size: 1.5rem;
    padding: 10px 60px;
  }

  &:hover {
    background-color: black;
  }
`

const StyledErrorSpan = styled.span`
  font-size: 1.3rem;
  margin-top: 15px;
`

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const [formMessage, setFormMessage] = useState(false)

  const onSubmit = data =>
    axios
      .post("https://formspree.io/f/xjvpeevw", data)
      .then(result => setFormMessage("Przesłano formularz"))
      .catch(err =>
        setFormMessage(
          "Niestety, nie możemy przesłać teraz formularza. Spróbuj ponownie później"
        )
      )

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputsContainer>
        <StyledInput
          name="firstName"
          type="text"
          className={errors.firstName && "error"}
          placeholder="Imię"
          ref={register({ required: true })}
        />
        <StyledInput
          name="secondName"
          type="text"
          className={errors.secondName && "error"}
          placeholder="Nazwisko"
          ref={register({ required: true })}
        />
        <StyledInput
          name="email"
          type="text"
          className={errors.email && "error"}
          placeholder="Email"
          ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
        />
        <StyledInput
          name="phone"
          type="text"
          placeholder="Telefon"
          ref={register()}
        />
      </StyledInputsContainer>
      <StyledTextarea
        name="message"
        type="text"
        rows="5"
        className={errors.message && "error"}
        placeholder="Piszę w sprawie..."
        ref={register({ required: true })}
      />
      <StyledSubmit type="submit" />
      {Object.keys(errors).length > 0 && (
        <StyledErrorSpan>Ooops, pojawiły się jakieś błędy</StyledErrorSpan>
      )}
      {formMessage && <StyledErrorSpan>{formMessage}</StyledErrorSpan>}
    </StyledForm>
  )
}

export default ContactForm
