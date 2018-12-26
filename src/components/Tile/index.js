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
  min-height: 23rem;

  display: flex;
  align-items: center;

  cursor: pointer;
  overflow: hidden;
  padding: 4rem 4rem 2rem;
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
  margin-bottom: 2em;
  width: max-content;
`

const StyledTitle = styled.h3`
  margin: 0;
  width: calc(100% + 0.5rem);
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.65;
`

const StyledHorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 0.325rem 0 0.5rem;
  width: 100%;
`

const StyledSubtitle = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25rem;
  margin-bottom: 0;
  text-transform: uppercase;
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
