import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import SocialButton from '../Contact/SocialButton'
import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  border-top: 1px solid rgba(212, 212, 255, 0.1);
`

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  width: calc(100% - 6rem);
  padding: ${props => (props.withContacts ? '4rem 0 3rem 0' : '2rem 0 2rem 0')};

  @media screen and (max-width: 480px) {
    text-align: center;
    align-self: center;
  }
`

const ContactIcons = styled.ul`
  display: flex;
  margin: 0 0 1.5rem 0;
`

const Copyright = styled.div`
  font-size: 0.8em;
  list-style: none;
  padding-left: 0;
  color: rgba(244, 244, 255, 0.4);
  display: inline-block;
  line-height: 1;
`

const Footer = props => {
  if (props.withContacts === true) {
    return (
      <StyledFooter>
        <StyledInner {...props}>
          <ContactIcons>
            <a href="mailto:andrew0szucs@gmail.com" target="_blank">
              <SocialButton icon="envelope" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/andrewszucs"
              target="_blank"
            >
              <SocialButton icon={['fab', 'linkedin']} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/andrewszucs"
              target="_blank"
            >
              <SocialButton icon={['fab', 'github']} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/andrewszucs"
              target="_blank"
            >
              <SocialButton icon={['fab', 'twitter']} />
            </a>
          </ContactIcons>
          <Copyright>© András Szücs - {new Date().getFullYear()}</Copyright>
        </StyledInner>
      </StyledFooter>
    )
  } else {
    return (
      <StyledFooter>
        <StyledInner {...props}>
          <Copyright>© András Szücs - {new Date().getFullYear()}</Copyright>
        </StyledInner>
      </StyledFooter>
    )
  }
}

Footer.propTypes = {
  withContacts: PropTypes.bool,
}

Footer.defaultProps = {
  withContacts: false,
}

export default Footer
