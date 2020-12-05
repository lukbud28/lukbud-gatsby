import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const StyledInput = styled.input`
  font-size: 1.2rem;
  padding: 3px 5px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 5px;
  font-family: "Poppins";
  width: 100%;

  &.error {
    background-color: red;
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

  &.error {
    background-color: red;
  }
`

const StyledSubmit = styled.input`
  margin-top: 10px;
  width: 50%;
  color: white;
  background-color: ${({ theme }) => theme.blue};
  border-radius: 20px;
  padding: 5px 30px;
  border: none;
`

const StyledErrorSpan = styled.span``

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
        ref={register({ required: true })}
      />
      <StyledInput
        name="phone"
        type="text"
        placeholder="Telefon"
        ref={register()}
      />
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
    </StyledForm>
  )
}

export default ContactForm
