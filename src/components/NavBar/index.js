import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'

const StyledNavBar = styled.div`
  color: white;
  background-color: #2a2f4a;
  box-shadow: 0 0 0.25em 0 rgba(0, 0, 0, 0.15);
  cursor: default;
  display: flex;
  font-weight: 600;
  height: 3.25em;
  left: 0;
  letter-spacing: 0.25em;
  line-height: 3.25em;
  margin: 0;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  width: 100%;
  z-index: 10000;

  ${props =>
    props.alt === true
      ? css`
          animation: none;
          background-color: transparent;
          box-shadow: none;
          position: absolute;
          transition: opacity 2.5s ease;
          transition-delay: 0.75s;
        `
      : ''}
`

const StyledLogo = styled.div`
  border: 0;
  display: inline-block;
  font-size: 0.8em;
  height: inherit;
  line-height: inherit;
  padding: 0 1.5em;
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;

  & strong {
    font-weight: 600;
    background-color: #fff;
    color: #242943;
    display: inline-block;
    line-height: 1.65rem;
    margin-right: 0.325rem;
    padding: 0 0.125rem 0 0.375rem;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
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
    /* padding-right: 1.5em; */
    display: block;
    font-size: 0.8em;
    /* padding: 0 0.75em; */
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
    display: flex;
  }
`

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  padding-left: 0.5rem;

  & line {
    stroke-width: 2px;
    stroke: #ffffff;
  }
`

const NavItems = styled.ul`
  display: flex;

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

  @media screen and (max-width: 980px) {
    display: none;
  }
`

const NavBar = props => {
  return (
    <StyledNavBar {...props}>
      <StyledLogo>
        <strong>András</strong> <span>Szücs</span>
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

NavBar.PropTypes = {
  alt: PropTypes.bool,
}

NavBar.defaultProps = {
  alt: false,
}

export default NavBar
