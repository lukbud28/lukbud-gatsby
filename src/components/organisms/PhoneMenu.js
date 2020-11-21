import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledNavList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.weights.medium};
  text-align: center;
  font-size: 2rem;
  margin: 10px 0;

  &.active {
    color: ${({ theme }) => theme.blue};
    font-weight: ${({ theme }) => theme.weights.semiBold};
  }
`

const StyledCancel = styled.button`
  width: 35px;
  height: 30px;
  background-color: transparent;
  border: none;
  position: fixed;
  top: 10px;
  right: 10px;
`

const StyledCancelArm = styled.div`
  width: 100%;
  height: 4px;
  background-color: white;
  position: relative;
  transform: rotate(45deg);

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    background-color: white;
    transform: rotate(-90deg);
  }
`

const PhoneMenu = ({ className, turnMenuOffFunc }) => {
  return (
    <StyledContainer className={className}>
      <StyledCancel onClick={turnMenuOffFunc}>
        <StyledCancelArm />
      </StyledCancel>
      <StyledNavList>
        <StyledLink to="/" activeClassName="active">
          Home
        </StyledLink>
        <StyledLink to="/about" activeClassName="active">
          About
        </StyledLink>
        <StyledLink to="/offer" activeClassName="active">
          Offer
        </StyledLink>
        <StyledLink to="/contact" activeClassName="active">
          Contact
        </StyledLink>
      </StyledNavList>
    </StyledContainer>
  )
}

PhoneMenu.propTypes = {
  className: PropTypes.string.isRequired,
  turnMenuOffFunc: PropTypes.func.isRequired,
}

export default PhoneMenu
