import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const StyledBanner = styled.div`
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledInner = styled.div`
  --marginSide: 6rem;
  margin: 0 var(--marginSide);
  width: calc(70% - var(--marginSide));
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease;

  @media screen and (max-width: 736px) {
    --marginSide: 3rem;
    margin: 0 var(--marginSide);
    width: calc(100% - var(--marginSide));
  }
`

const StyledTitle = styled.h1`
  font-size: 3.25rem;
`

const StyledHorizontalLine = styled.div`
  background-color: #000;
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
        <StyledTitle>Hi, my name is Forty</StyledTitle>
        <StyledHorizontalLine />
        <StyledSubtitleContainer>
          <StyledSubtitle>
            A responsive site template designed by HTML5 UP
            <br />
            and released under the creative commons.
          </StyledSubtitle>
          <Button>
            Big
            <StyledButtonIcon icon="arrow-right" />
          </Button>
        </StyledSubtitleContainer>
      </StyledInner>
    </StyledBanner>
  )
}

export default Banner
