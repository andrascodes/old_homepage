import PropTypes, { any } from 'prop-types'
import React, { Fragment } from 'react'
import styled, { css } from 'styled-components'

import Carousel from './Carousel'

const Container = styled.div`
  --text-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color);
  background-color: ${props => props.bgColor};

  & a {
    color: var(--text-color);
    text-decoration: underline;
    /* border-bottom: 1px solid; */
  }

  & a:visited {
    color: var(--text-color);
  }

  @media screen and (max-width: 1024px) {
    &:first-child div {
      margin-top: 0;
    }
  }
`

const Inner = styled.div`
  margin: 2.5rem 0;
  width: 60%;

  @media screen and (max-width: 1680px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 980px) {
    /* &:first-child {
      margin: 0;
    } */
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }

  @media screen and (max-width: 360px) {
  }
`

const Title = styled.h3`
  padding: 0rem 0.2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.1rem;
  }
`

const TitleName = styled.span`
  font-weight: 700;
  ${props => {
    if (props.bgColor !== undefined) {
      return css`
        background-color: ${props.bgColor};
        padding: 0 0.5rem;
      `
    }
    if (props.color !== undefined) {
      return css`
        color: ${props.color};
      `
    }
  }}
`

const TitlePitch = styled.span`
  font-weight: 400;
`

const CarouselContainer = styled.div`
  margin-bottom: 1rem;
`

const InfoContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`

const List = styled.ul`
  flex-basis: 50%;
  margin-bottom: 0;

  @media screen and (max-width: 480px) {
    flex-basis: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    align-self: center;
    margin-left: 0;
  }
`

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  font-size: 0.567rem;
  color: ${props => (props.color ? props.color : '#000')};

  &::before {
    content: '■';
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

const ListItemTitle = styled.span`
  margin-right: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.03rem;
`

const ListItemInfo = styled.span`
  color: ${props => (props.color ? props.color : '#000')};
`

const Description = styled.p`
  flex-basis: 70%;
  font-size: 0.567rem;
  margin-bottom: 0;
`

const PortfolioItem = props => {
  const {
    renderTitle,
    renderTitleName,
    renderTitlePitch,
    renderList,
    renderDescription,
  } = props

  return (
    <Container color={props.color} bgColor={props.bgColor}>
      <Inner>
        <Title>
          {renderTitle !== undefined ? (
            renderTitle({ color: props.color })
          ) : (
            <Fragment>
              <TitleName>{renderTitleName({ color: props.color })}</TitleName>
              {`  —  `}
              <TitlePitch>
                {renderTitlePitch({ color: props.color })}
              </TitlePitch>
            </Fragment>
          )}
        </Title>
        <CarouselContainer>
          <Carousel images={props.images} dotColor={props.color} />
        </CarouselContainer>
        <InfoContainer>
          <List>{renderList({ color: props.color })}</List>
          <Description>{renderDescription()}</Description>
        </InfoContainer>
      </Inner>
    </Container>
  )
}

PortfolioItem.propTypes = {
  images: PropTypes.arrayOf(any).isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  renderTitle: PropTypes.func,
  renderTitleName: PropTypes.func,
  renderTitlePitch: PropTypes.func,
  renderList: PropTypes.func,
  renderDescription: PropTypes.func,
}

PortfolioItem.defaultProps = {
  color: '#fff',
  bgColor: '#2a2f4a',
  title: 'Title',
}

export default PortfolioItem

export { Title, TitleName, TitlePitch, ListItem, ListItemTitle, ListItemInfo }
