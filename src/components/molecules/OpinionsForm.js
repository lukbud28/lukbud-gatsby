import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { response } from "layout/theme"

const StyledForm = styled.form`
  margin-top: 20px;

  @media ${response.tablet} {
    margin-top: 50px;
  }

  @media ${response.desktop} {
    max-width: 50%;
    margin: 70px auto 0;
  }
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.grey};
  padding: 3px;
  font-size: 1.2rem;
  margin: 0 0 5px;
  transition: border 0.5s;
  font-family: "Poppins";

  &.error {
    border: 1px solid red;
  }

  @media ${response.tablet} {
    font-size: 1.6rem;
    padding: 8px;
    margin: 0 0 10px;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.grey};
  padding: 3px;
  font-size: 1.2rem;
  transition: border 0.5s;
  font-family: "Poppins";

  &.error {
    border: 1px solid red;
  }

  @media ${response.tablet} {
    font-size: 1.6rem;
    padding: 8px;
  }
`

const StyledSubmit = styled.input`
  background-color: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.weights.semiBold};
  padding: 8px 60px;
  border-radius: 30px;
  font-size: 1.1rem;
  border: none;
  margin-bottom: 5px;
  transition: color 0.5s, background-color 0.5s;
  cursor: pointer;

  @media ${response.tablet} {
    font-size: 1.6rem;
    padding: 10px 80px;
    margin-top: 20px;
  }

  &:hover {
    color: black;
    background-color: ${({ theme }) => theme.grey};
  }
`

const StyledErrorSpan = styled.span`
  width: 100%;
  font-size: 1.3rem;
`

const OpinionsForm = () => {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        name="points"
        type="number"
        className={errors.points && "error"}
        placeholder="Points in scale 1-5"
        ref={register({ required: true, max: 5, min: 1 })}
      />
      <StyledInput
        name="sign"
        type="text"
        className={errors.sign && "error"}
        placeholder="Your sign"
        ref={register({ required: true, maxLength: 20 })}
      />
      <StyledTextarea
        name="comment"
        type="text"
        rows="5"
        className={errors.comment && "error"}
        placeholder="Your comment"
        ref={register({ required: true, maxLength: 100 })}
      />
      <StyledSubmit type="submit" />
      {Object.keys(errors).length > 0 && (
        <>
          <br />
          <StyledErrorSpan>Ooops, pojawiły się jakieś błędy</StyledErrorSpan>
        </>
      )}
    </StyledForm>
  )
}

export default OpinionsForm
