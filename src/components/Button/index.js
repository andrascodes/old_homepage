import styled, { css } from 'styled-components'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const createStyledButton = LinkComponent => styled(LinkComponent)`
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.25em;
  padding: 0 1.75em;
  height: 3.5em;

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
          font-size: 0.76rem;

          @media screen and (max-width: 1680px) {
            font-size: 0.6rem;
          }

          @media screen and (max-width: 1280px) {
            font-size: 0.53rem;
          }
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

    ${props =>
      props.alternate === true
        ? css`
            background-color: #000;
            color: #fff;
          `
        : ''}

  &:focus {
    outline: none;
  }
`

const Button = props => {
  if (props.to.startsWith('http')) {
    const HTMLLink = props => (
      <a target="_blank" rel="noopener noreferrer" href={props.to} {...props} />
    )
    const StyledButton = createStyledButton(HTMLLink)
    return <StyledButton {...props}>{props.children}</StyledButton>
  } else {
    const StyledButton = createStyledButton(Link)
    return <StyledButton {...props}>{props.children}</StyledButton>
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  primary: PropTypes.bool,
  fit: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
  alternate: PropTypes.bool,
}

Button.defaultProps = {
  to: '/',
  size: 'medium',
  primary: false,
  fit: false,
  disabled: false,
  alternate: false,
}

export default Button
