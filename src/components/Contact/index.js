import React from 'react'
import SocialButton from './SocialButton'
import TitleText from '../TitleText'
import styled from 'styled-components'

const StyledContact = styled.div`
  color: #fff;
  background-color: #000;
  border-top: 1px solid rgba(212, 212, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const TitleTextContainer = styled.div`
  padding: 2rem 0rem 2rem 3.778rem;

  @media screen and (max-width: 1680px) {
    padding: 2rem 0rem 2rem 3rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 2rem 0rem 2rem 2rem;
  }

  @media screen and (max-width: 736px) {
    padding: 2rem 0rem 2rem 1rem;
  }
`

const SocialButtonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 3rem;
  padding: 0 3.778rem;

  @media screen and (max-width: 980px) {
    margin-bottom: 1rem;
  }
`

const SocialButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 25%;
  /* border-right: 1px solid rgba(212, 212, 255, 0.1); */
  /* justify-content: center; */
  /* max-width: 10rem; */

  /* margin-right: 3rem; */

  @media screen and (max-width: 980px) {
    flex-basis: 50%;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 576px) {
    flex-basis: 100%;
  }

  &:last-child {
    margin-right: 0;
  }
`

const SocialButtonTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    font-size: 1.1rem;
  }
`

const SocialButtonTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1;
  margin: 0.5rem 0;
  letter-spacing: 0.03rem;

  @media screen and (max-width: 1680px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 1112px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 736px) {
    /* font-size: 1rem; */
  }
`

const SocialButtonTextLink = styled.a`
  text-align: center;
  opacity: 0.8;
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
  border-bottom: 1px dotted;

  @media screen and (max-width: 1680px) {
    font-size: 0.8rem;
  }

  @media screen and (max-width: 1440px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.65rem;
  }

  @media screen and (max-width: 1112px) {
    font-size: 0.58rem;
  }

  @media screen and (max-width: 1000px) {
    font-size: 0.5rem;
  }

  &:hover {
    color: #9bf1ff;
  }
`

const Contact = () => (
  <StyledContact>
    <TitleTextContainer>
      <TitleText title="Let's keep in touch!" />
    </TitleTextContainer>
    <SocialButtonList>
      <SocialButtonContainer>
        <SocialButtonTitleContainer>
          <a
            rel="noopener noreferrer"
            href="mailto:andrew0szucs@gmail.com"
            target="_blank"
          >
            <SocialButton size="large" icon="envelope" />
          </a>
          <SocialButtonTitle>Email</SocialButtonTitle>
        </SocialButtonTitleContainer>
        <SocialButtonTextLink
          rel="noopener noreferrer"
          href="mailto:andrew0szucs@gmail.com"
          target="_blank"
        >
          andrew0szucs[at]gmail.com
        </SocialButtonTextLink>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <SocialButtonTitleContainer>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/andrewszucs"
            target="_blank"
          >
            <SocialButton size="large" icon={['fab', 'linkedin']} />
          </a>
          <SocialButtonTitle>LinkedIn</SocialButtonTitle>
        </SocialButtonTitleContainer>
        <SocialButtonTextLink
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/andrewszucs"
          target="_blank"
        >
          linkedin.com/in/andrewszucs
        </SocialButtonTextLink>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <SocialButtonTitleContainer>
          <a
            rel="noopener noreferrer"
            href="https://github.com/andrewszucs"
            target="_blank"
          >
            <SocialButton size="large" icon={['fab', 'github']} />
          </a>
          <SocialButtonTitle>Github</SocialButtonTitle>
        </SocialButtonTitleContainer>
        <SocialButtonTextLink
          rel="noopener noreferrer"
          href="https://github.com/andrewszucs"
          target="_blank"
        >
          github.com/andrewszucs
        </SocialButtonTextLink>
      </SocialButtonContainer>

      <SocialButtonContainer>
        <SocialButtonTitleContainer>
          <a
            rel="noopener noreferrer"
            href="https://twitter.com/andrewszucs"
            target="_blank"
          >
            <SocialButton size="large" icon={['fab', 'twitter']} />
          </a>
          <SocialButtonTitle>Twitter</SocialButtonTitle>
        </SocialButtonTitleContainer>
        <SocialButtonTextLink
          href="https://twitter.com/andrewszucs"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter.com/andrewszucs
        </SocialButtonTextLink>
      </SocialButtonContainer>
    </SocialButtonList>
  </StyledContact>
)

export default Contact
