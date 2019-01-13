import './index.css'

import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel'
import PropTypes, { any } from 'prop-types'

import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const StyledDotGroup = styled(DotGroup)`
  & button {
    background-color: ${props => props.color};
  }
`

const Carousel = props => {
  const { aspectRatio } = props.images[0].node.childImageSharp.sizes
  return (
    <CarouselProvider
      naturalSlideWidth={aspectRatio}
      naturalSlideHeight={1}
      totalSlides={props.images.length}
    >
      <Slider>
        {props.images.map((img, index) => (
          <Slide index={index} key={`slide-${index}`}>
            <Img
              title={'Portfolio item screenshot'}
              alt="Screenshot"
              sizes={img.node.childImageSharp.sizes}
            />
          </Slide>
        ))}
      </Slider>
      <StyledDotGroup color={props.dotColor} />
    </CarouselProvider>
  )
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(any).isRequired,
  dotColor: PropTypes.string,
}

Carousel.defaultProps = {
  dotColor: '#fff',
}

export default Carousel
