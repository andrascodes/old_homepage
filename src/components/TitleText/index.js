import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div``

const Header = styled.div`
  /* specify each header style, h1..h4 */
  color: #fff;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  line-height: 1.1;

  /* h2 */
  font-size: 1.65rem;

  @media screen and (max-width: 1680px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 1.15rem;
  }

  @media screen and (max-width: 736px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.15rem;
  }
`

const HorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 0.325em 0 0.5em;
  width: 100%;
`

const TitleText = props => {
  return (
    <TitleContainer>
      <Header>{props.title}</Header>
      <HorizontalLine />
    </TitleContainer>
  )
}

TitleText.propTypes = {
  title: PropTypes.string.isRequired,
  // level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  underline: PropTypes.bool,
}

TitleText.defaultProps = {
  underline: false,
}

export default TitleText
