import styled, { css } from 'styled-components'

import Button from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

const StyledBanner = styled.div`
  color: white;
  height: 75vh;
  max-height: 50rem;
  ${props =>
    props.index === true
      ? css`
          min-height: 28.4rem;
        `
      : css`
          min-height: 22.7rem;
        `}

  align-items: center;
  background-attachment: fixed;
  background-image: url('https://gatsby-forty.surge.sh/static/banner-22e3335cf4be5dddb7a51870b0e3203f.jpg');
  /* background-position: 50%; */
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 0 !important;
  cursor: default;
  display: flex;
  padding: 2.75rem 0 0 0;
  position: relative;

  @media screen and (max-width: 1680px) {
    min-height: 23.35rem;
    padding: 2rem 0 0 0;
  }

  @media screen and (max-width: 1280px) {
    padding: 1.85rem 0 0 0;
    min-height: 20rem;
  }

  @media screen and (max-width: 980px) {
    padding: 2rem 0 0 0;
    min-height: 20rem;
  }

  @media screen and (max-width: 736px) {
    height: auto;
    max-height: none;
    min-height: 0;
    padding: 3.6rem 0 0 0;
  }

  @media screen and (max-width: 480px) {
    padding: 5.7rem 0 2.08rem 0;
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledInner = styled.div`
  margin: 0 auto;
  max-width: 60.8rem;
  width: calc(100% - 6rem);

  position: relative;
  opacity: 0;
  filter: blur(0.125em);
  transform: translateX(-0.5em);
  transition: opacity 1.5s ease, transform 0.5s ease-out, filter 0.5s ease,
    -webkit-filter 0.5s ease;
  z-index: 2;

  ${props =>
    props.loaded === true || props.loaded === undefined
      ? css`
          opacity: 1;
          filter: none;
          transform: translateX(0);
        `
      : ''}

  @media screen and (max-width: 1680px) {
    width: calc(100% - 4.65rem);
    max-width: 50.5rem;
  }

  @media screen and (max-width: 1280px) {
    width: calc(100% - 4rem);
    max-width: 43.3rem;
  }

  @media screen and (max-width: 980px) {
    width: calc(100% - 4rem);
  }

  @media screen and (max-width: 736px) {
    width: calc(100% - 2rem);
  }

  @media screen and (max-width: 480px) {
  }

  @media screen and (max-width: 360px) {
  }
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
  font-size: 3.08rem;
  margin-bottom: 0;
  letter-spacing: 0.02rem;

  @media screen and (max-width: 1680px) {
    font-size: 2.525rem;
    /* letter-spacing: 0.02rem; */
  }

  @media screen and (max-width: 1280px) {
    font-size: 2.16rem;
    letter-spacing: 0.02rem;
  }

  @media screen and (max-width: 736px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.33rem;
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledHorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 1.89rem 0;
  width: 100%;

  @media screen and (max-width: 1680px) {
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 1280px) {
    margin: 1.3rem 0;
  }

  @media screen and (max-width: 736px) {
    margin: 0.8rem 0 1.3rem 0;
  }

  @media screen and (max-width: 480px) {
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledSubtitleContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 736px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
  }
`

const StyledSubtitle = styled.p`
  font-size: 0.67rem;
  font-weight: 600;
  letter-spacing: 0.161rem;
  text-transform: uppercase;
  margin-bottom: 0;
  margin-right: 1.5rem;

  @media screen and (max-width: 1680px) {
    font-size: 0.56rem;
    letter-spacing: 0.13rem;
    margin-right: 1.2rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.46rem;
    letter-spacing: 0.12rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 736px) {
    margin-right: 0;
    margin-bottom: 0.9rem;
  }

  @media screen and (max-width: 480px) {
    & br {
      display: none;
    }
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledButtonIcon = styled(FontAwesomeIcon)`
  margin-left: 0.7rem;
`

const Banner = props => {
  return (
    <StyledBanner {...props}>
      <StyledInner {...props}>
        {props.index === true ? (
          <StyledTitle>Hi, my name is Forty</StyledTitle>
        ) : (
          <StyledTitle>Landing</StyledTitle>
        )}
        <StyledHorizontalLine />
        <StyledSubtitleContainer>
          {props.index === true ? (
            <StyledSubtitle>
              A responsive site template designed by HTML5 UP
              <br />
              and released under the creative commons.
            </StyledSubtitle>
          ) : (
            <StyledSubtitle>
              Lorem ipsum dolor sit amet nullam consequat
              <br />
              sed veroeros. tempus adipiscing nulla.
            </StyledSubtitle>
          )}

          {props.index === true ? (
            <Button>
              Get started
              <StyledButtonIcon icon="arrow-right" />
            </Button>
          ) : (
            ''
          )}
        </StyledSubtitleContainer>
      </StyledInner>
      <StyledColorOverlay />
    </StyledBanner>
  )
}

Banner.propTypes = {
  index: PropTypes.bool,
}

Banner.defaultProps = {
  index: false,
}

export default Banner
