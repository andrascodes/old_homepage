import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

const StyledButton = styled.button`
  margin-left: 1.5rem;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: inline-block;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.25em;
  padding: 0 1.75em;
  height: 3.5em;
  line-height: 3.5em;

  ${props =>
    props.fit === true
      ? css`
          width: 100%;
        `
      : ''}

  ${props => {
    switch (props.size) {
      case 'large':
        return css`
          font-size: 1.25em;
          height: 3em;
          line-height: 3em;
        `
      case 'small':
        return css`
          font-size: 0.6rem;
        `
      default:
        return css`
          font-size: 0.8rem;
        `
    }
  }}

  ${props =>
    props.disabled === true
      ? css`
          cursor: default;
          opacity: 0.25;
          pointer-events: none;
        `
      : ''}

  ${props =>
    props.primary === true
      ? css`
          background-color: #fff;
          box-shadow: none;
          color: #242943;

          &:hover {
            background-color: #9bf1ff;
            color: #242943 !important;
          }

          &:active {
            background-color: #53e3fb;
          }
        `
      : css`
          background-color: transparent;
          box-shadow: inset 0 0 0 2px #fff;
          color: #fff;

          &:hover {
            box-shadow: inset 0 0 0 2px #9bf1ff;
            color: #9bf1ff;
            border-bottom-color: transparent;
          }

          &:active {
            background-color: rgba(155, 241, 255, 0.1);
            box-shadow: inset 0 0 0 2px #53e3fb;
            color: #53e3fb;
          }
        `}

  &:focus {
    outline: none;
  }
`

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primary: PropTypes.bool,
  fit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  size: 'medium',
  primary: false,
  fit: false,
  disabled: false,
}

export default Button
