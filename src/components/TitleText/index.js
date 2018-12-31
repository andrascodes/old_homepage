import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div``

const Header = styled.div`
  /* specify each header style, h1..h4 */
`

const HorizontalLine = styled.div`
  background-color: #fff;
  content: '';
  display: block;
  height: 2px;
  margin: 0.325em 0 0.5em;
  width: 100%;
`

const TitleText = () => {
  return (
    <TitleContainer>
      <Header>Title</Header>
      <HorizontalLine />
    </TitleContainer>
  )
}

TitleText.PropTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]).isRequired,
  underline: PropTypes.bool,
}

TitleText.defaultProps = {
  underline: false,
}

export default TitleText
