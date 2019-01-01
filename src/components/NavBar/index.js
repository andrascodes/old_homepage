import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

const StyledNavBar = styled.div`
  height: 3.07rem;
  letter-spacing: 0.236rem;
  line-height: 4.1;

  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  margin: 0;

  color: white;
  background-color: #2a2f4a;
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.15);
  font-weight: bold;
  text-transform: uppercase;
  cursor: default;

  ${props =>
    props.transparent === true
      ? css`
          animation: none;
          background-color: transparent;
          box-shadow: none;
          position: absolute;
          transition: opacity 2.5s ease;
          transition-delay: 0.75s;
        `
      : ''}

  opacity: 0;
  ${props =>
    props.loaded
      ? css`
          opacity: 1;
        `
      : ''}

  @media screen and (max-width: 1680px) {
    letter-spacing: 0.2rem;
    line-height: 4;
  }

  @media screen and (max-width: 1280px) {
    letter-spacing: 0.17rem;
  }

  @media screen and (max-width: 980px) {
    line-height: 4.1;
  }

  @media screen and (max-width: 736px) {
    line-height: 3.5;
  }

  @media screen and (max-width: 480px) {
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledLogo = styled.div`
  font-size: 0.755rem;
  border: 0;
  display: inline-block;
  height: inherit;
  padding: 0 1.14rem;
  text-decoration: none;
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  cursor: pointer;

  & strong {
    line-height: 1.24rem;
    color: #242943;
    background-color: #fff;
    display: inline-block;
    margin-right: 0.25rem;
    padding: 0 0.1rem 0 0.28rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  &:hover {
    color: #9bf1ff;
  }

  &:hover strong {
    background-color: #9bf1ff;
  }

  &:active {
    color: #53e3fb;
  }

  &:active strong {
    background-color: #53e3fb;
  }

  @media screen and (max-width: 1680px) {
    font-size: 0.62rem;
    padding: 0 0 0 0.9rem;

    & strong {
      line-height: 1rem;
      margin-right: 0.18rem;
      padding: 0 0.07rem 0 0.25rem;
    }
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.53rem;
    padding: 0 0.8rem;

    & strong {
      line-height: 0.9rem;
      margin-right: 0.17rem;
      padding: 0 0.05rem 0 0.2rem;
    }
  }

  @media screen and (max-width: 736px) {
    padding: 0 0.55rem;
  }

  @media screen and (max-width: 480px) {
    & span {
      display: none;
    }
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`

const MenuButton = styled.div`
  display: none;

  & p {
    cursor: pointer;
    display: block;
    font-size: 0.75rem;
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
    margin-bottom: 0;
  }

  &:hover p {
    color: #9bf1ff;
  }

  &:active p {
    color: #53e3fb;
  }

  &:hover line {
    stroke: #9bf1ff;
  }

  &:active line {
    stroke: #53e3fb;
  }

  @media screen and (max-width: 980px) {
    /* display: flex; */
  }
`

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  padding-left: 0.42rem;

  & line {
    stroke-width: 2px;
    stroke: #ffffff;
  }
`

const NavItems = styled.ul`
  display: flex;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;

  & li {
    list-style: none;
    padding-right: 1.5rem;
    cursor: pointer;
  }

  & li:hover {
    color: #9bf1ff;
  }

  & li:active {
    color: #9bf1ff;
  }

  @media screen and (max-width: 1680px) {
    font-size: 0.62rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.53rem;
  }

  @media screen and (max-width: 980px) {
    /* display: none; */
  }

  @media screen and (max-width: 736px) {
    & li {
      padding-right: 1.2rem;
    }

    & li:last-child {
      padding-right: 0.55rem;
    }
  }

  @media screen and (max-width: 360px) {
    margin-left: 0;

    & li {
      padding-right: 1rem;
    }

    & li:last-child {
      padding-right: 0.55rem;
    }
  }
`

const NavBar = props => {
  return (
    <StyledNavBar {...props}>
      <StyledLogo>
        <strong>Forty</strong> <span>BY HTML5 UP</span>
      </StyledLogo>
      <StyledNav>
        <NavItems>
          <li>About Me</li>
          <li>Portfolio</li>
        </NavItems>
        <MenuButton>
          <p>Menu</p>
          <HamburgerIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="32"
              viewBox="0 0 24 32"
              preserveAspectRatio="none"
            >
              <line x1="0" y1="11" x2="24" y2="11" />
              <line x1="0" y1="21" x2="24" y2="21" />
              <line x1="0" y1="16" x2="24" y2="16" />
            </svg>
          </HamburgerIcon>
        </MenuButton>
      </StyledNav>
    </StyledNavBar>
  )
}

NavBar.propTypes = {
  transparent: PropTypes.bool,
}

NavBar.defaultProps = {
  transparent: false,
}

export default NavBar
