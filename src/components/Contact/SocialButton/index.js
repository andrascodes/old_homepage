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
  color: #000;
  background-color: #fff;
  cursor: pointer;

  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          height: 4rem;
          width: 4rem;
          font-size: 2rem;

          @media screen and (max-width: 1280px) {
            height: 3rem;
            width: 3rem;
            font-size: 1.5rem;
          }

          @media screen and (max-width: 1000px) {
            height: 2rem;
            width: 2rem;
            font-size: 1rem;
          }
        `
      default:
        return css`
          height: 1.75rem;
          width: 1.75rem;
          margin-right: 0.75rem;
        `
    }
  }}

  &:hover {
    background-color: #9bf1ff;
    color: #000 !important;
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
    <FontAwesomeIcon icon={props.icon} />
  </StyledButton>
)

SocialButton.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
}

SocialButton.defaultProps = {
  size: 'small',
}

export default SocialButton
