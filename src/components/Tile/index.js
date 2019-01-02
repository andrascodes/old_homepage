import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTile = styled.div`
  color: white;
  width: 40%;
  :nth-child(4n - 1),
  :nth-child(4n - 2) {
    width: 60%;
  }

  height: 40vh;
  max-height: 40rem;
  min-height: 21.72rem;

  @media screen and (max-width: 1680px) {
    min-height: 17.9rem;
    padding: 0rem 3rem 0rem;
  }

  @media screen and (max-width: 1280px) {
    height: 30vh;
    max-height: 30rem;
    min-height: 13.4rem;
    padding: 0rem 2rem 0rem;
  }

  @media screen and (max-width: 736px) {
    height: 10.58rem;
    max-height: unset;
    min-height: 0;
    padding: 0rem 1rem 0rem;
  }

  @media screen and (max-width: 480px) {
    height: 34vh;
  }

  display: flex;
  align-items: center;

  cursor: pointer;
  overflow: hidden;
  padding: 0rem 3.778rem 0rem;
  position: relative;
  transition: transform 0.25s ease, opacity 0.25s ease, filter 1s ease;

  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 980px) {
    width: 50% !important;
  }

  @media screen and (max-width: 480px) {
    width: 100% !important;
  }
`

const StyledOverlay = styled.div`
  content: '';
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
`

const StyledColorOverlay = styled(StyledOverlay)`
  background-color: ${props => props.color};
  bottom: 0;
  opacity: 0.85;
  transition: opacity 0.5s ease;
  z-index: 2;

  ${StyledTile}:hover & {
    opacity: 0;
  }
`

const StyledGreyOverlay = styled(StyledOverlay)`
  background-color: rgba(36, 41, 67, 0.25);
  top: 0;
  z-index: 1;
`

const StyledInner = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
`

const StyledTitle = styled.h3`
  margin: 0;
  width: calc(100% + 0.5rem);
  font-size: 1.65rem;
  letter-spacing: 0.025rem;
  font-weight: 600;
  line-height: 1.65;

  @media screen and (max-width: 1680px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 736px) {
    font-size: 1rem;
  }
`

const StyledHorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 0.54rem 0 0.84rem;
  width: 100%;

  @media screen and (max-width: 1680px) {
    margin: 0.45rem 0 0.65rem;
  }

  @media screen and (max-width: 1280px) {
    margin: 0.38rem 0 0.6rem;
  }

  @media screen and (max-width: 736px) {
    margin: 0.33rem 0 0.5rem;
  }
`

const StyledSubtitle = styled.p`
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.155rem;
  margin-bottom: 0;
  text-transform: uppercase;

  @media screen and (max-width: 1680px) {
    font-size: 0.57rem;
    letter-spacing: 0.13rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.48rem;
    letter-spacing: 0.11rem;
  }
`

const Tile = props => (
  <StyledTile {...props}>
    <StyledColorOverlay color={props.overlayColor} />
    <StyledInner>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledHorizontalLine />
      <StyledSubtitle>{props.subtitle}</StyledSubtitle>
    </StyledInner>
    <StyledGreyOverlay />
  </StyledTile>
)

Tile.propTypes = {
  backgroundImage: PropTypes.string,
  overlayColor: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func,
}

Tile.defaultProps = {
  backgroundImage:
    'https://gatsby-forty.surge.sh/static/pic01-f7c500d0c7ce97f4fa08f6f797eaf142.jpg',
  overlayColor: 'transparent',
  title: 'Title',
  subtitle: 'Subtitle',
}

export default Tile
