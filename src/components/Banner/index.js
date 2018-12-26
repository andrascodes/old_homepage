import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  color: white;
  height: 75vh;
  max-height: 50em;
  min-height: 30em;

  align-items: center;
  background-attachment: fixed;
  background-image: url('https://gatsby-forty.surge.sh/static/banner-22e3335cf4be5dddb7a51870b0e3203f.jpg');
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 0 !important;
  cursor: default;
  display: flex;
  margin-bottom: -3.25em;
  padding: 6em 0 2em;
  position: relative;
  top: -3.25em;
`

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 65em;
  width: calc(100% - 6em);

  padding: 0 !important;
  position: relative;
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease,
    -webkit-filter 0.5s ease;
  z-index: 2;

  /* --marginSide: 6rem;
  margin: 0 var(--marginSide);
  width: calc(70% - var(--marginSide));
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;

  @media screen and (max-width: 736px) {
    --marginSide: 3rem;
    margin: 0 var(--marginSide);
    width: calc(100% - var(--marginSide));
  } */
`

const StyledColorOverlay = styled.div`
  background-color: #242943;
  content: '';
  display: block;
  height: 100%;
  left: 0;
  opacity: 0.85;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: opacity 2.5s ease;
  transition-delay: 0.75s;
  width: 100%;
  z-index: 1;
`

const StyledTitle = styled.h1`
  font-size: 3.25rem;
`

const StyledHorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 0.325rem 0 0.5rem;
  width: 100%;
  margin-bottom: 2rem;
`

const StyledSubtitleContainer = styled.div`
  display: flex;
`

const StyledSubtitle = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
`

const StyledButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 0.7rem;
`

const Banner = () => {
  return (
    <StyledBanner>
      <StyledInner>
        <StyledTitle>Hi, my name is András</StyledTitle>
        <StyledHorizontalLine />
        <StyledSubtitleContainer>
          <StyledSubtitle>
            A responsive site template designed by HTML5 UP
            <br />
            and released under the creative commons.
          </StyledSubtitle>
          <Button primary>
            Big
            <StyledButtonIcon icon="arrow-right" />
          </Button>
        </StyledSubtitleContainer>
      </StyledInner>
      <StyledColorOverlay />
    </StyledBanner>
  )
}

export default Banner
