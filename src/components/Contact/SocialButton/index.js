import styled, { css } from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: none;
  color: #2a2f4a;
  background-color: #fff;
  cursor: pointer;

  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          height: 5rem;
          width: 5rem;
        `
      default:
        return css`
          height: 2rem;
          width: 2rem;
        `
    }
  }}

  &:hover {
    background-color: #9bf1ff;
    color: #242943 !important;
  }

  &:active {
    background-color: #53e3fb;
  }

  &:focus {
    outline: none;
  }
`

const SocialButton = props => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon={props.icon} size="2x" />
  </StyledButton>
)

SocialButton.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
}

SocialButton.defaultProps = {
  size: 'small',
}

export default SocialButton
