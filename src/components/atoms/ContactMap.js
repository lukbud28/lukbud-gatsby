import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledIframe = styled.iframe`
  max-width: 100%;
  border: none;
`

const ContactMap = ({ className }) => {
  return (
    <StyledIframe
      className={className}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8562.424717806813!2d21.989640978895153!3d50.354916181993346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d26df0ab8de33%3A0x617a80ca2c122222!2s37-430%20Stary%20Nart!5e0!3m2!1spl!2spl!4v1607159512799!5m2!1spl!2spl"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  )
}

ContactMap.propTypes = {
  className: PropTypes.string,
}

ContactMap.defaultProps = { className: null }

export default ContactMap
