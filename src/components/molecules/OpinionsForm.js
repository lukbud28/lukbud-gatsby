import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

const StyledForm = styled.form`
  margin-top: 20px;
`

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.grey};
  padding: 3px;
  font-size: 1.2rem;
  margin: 0 0 5px;

  &.error {
    background-color: red;
  }
`

const StyledTextarea = styled.textarea`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  border: 1px solid ${({ theme }) => theme.grey};
  padding: 3px;
  font-size: 1.2rem;

  &.error {
    background-color: red;
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
`

const StyledErrorSpan = styled.span`
  width: 100%;
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
