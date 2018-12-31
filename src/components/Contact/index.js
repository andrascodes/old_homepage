import React from 'react'
import SocialButton from './SocialButton'
import styled from 'styled-components'

const StyledContact = styled.div`
  color: #fff;
  background-color: #2a2f4a;
  border-top: 1px solid rgba(212, 212, 255, 0.1);
`

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 65rem;
  width: calc(100% - 6rem);
  padding: 2.5rem 0 3rem 0;
`
const SocialButtonList = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-top: 2.5rem;
`

const SocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  max-width: 10rem;

  margin-right: 3rem;

  &:last-child {
    margin-right: 0;
  }
`

const SocialButtonText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  margin-top: 0.8rem;
`

const LinkSpan = styled.span`
  font-weight: bold;
  border-bottom: 1px dotted;
  cursor: pointer;

  &:hover {
    color: #9bf1ff;
  }

  &:active {
    background-color: #53e3fb;
  }
`

const Contact = () => (
  <StyledContact>
    <StyledInner>
      <h3>Let's keep in touch!</h3>
      <SocialButtonList>
        <SocialButtonContainer>
          <SocialButton size="large" icon="envelope" />
          <SocialButtonText>
            Send a virtual raven to <br />{' '}
            <LinkSpan>andrew0szucs[at]gmail.com</LinkSpan>
          </SocialButtonText>
        </SocialButtonContainer>
        <SocialButtonContainer>
          <SocialButton size="large" icon={['fab', 'linkedin']} />
          <SocialButtonText>
            <LinkSpan>András</LinkSpan> wants to add you to his LinkedIn network
          </SocialButtonText>
        </SocialButtonContainer>
        <SocialButtonContainer>
          <SocialButton size="large" icon={['fab', 'twitter']} />
          <SocialButtonText>
            "just setting up my twttr" <br /> <LinkSpan>@andrewszucs</LinkSpan>
          </SocialButtonText>
        </SocialButtonContainer>
      </SocialButtonList>
    </StyledInner>
  </StyledContact>
)

export default Contact
