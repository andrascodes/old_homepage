import styled, { css } from 'styled-components'

import PropTypes from 'prop-types'
import React from 'react'
import SocialButton from '../Contact/SocialButton'

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  background-color: #242943;
  border-top: 1px solid rgba(212, 212, 255, 0.1);
`

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  width: calc(100% - 6rem);
  padding: ${props => (props.withContacts ? '4rem 0 3rem 0' : '2rem 0 2rem 0')};
`

const ContactIcons = styled.ul`
  display: flex;
  margin: 0 0 1.5rem 0;
`

const Copyright = styled.div`
  font-size: 0.8em;
  list-style: none;
  padding-left: 0;
  color: rgba(244, 244, 255, 0.2);
  display: inline-block;
  line-height: 1;
`

const Footer = props => {
  if (props.withContacts === true) {
    return (
      <StyledFooter>
        <StyledInner {...props}>
          <ContactIcons>
            <SocialButton icon="envelope" />
            <SocialButton icon={['fab', 'linkedin']} />
            <SocialButton icon={['fab', 'twitter']} />
          </ContactIcons>
          <Copyright>© András Szücs - 2018</Copyright>
        </StyledInner>
      </StyledFooter>
    )
  } else {
    return (
      <StyledFooter>
        <StyledInner {...props}>
          <Copyright>© András Szücs - 2018</Copyright>
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
