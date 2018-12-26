import {
  faAngleRight,
  faArrowRight,
  faChevronRight,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'

import Banner from '../components/Banner'
import React from 'react'
import Tile from '../components/Tile'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

library.add(faAngleRight, faArrowRight, faChevronRight, faLongArrowAltRight)

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IndexPage = () => (
  <StyledPage>
    <Banner />
    <StyledTilesContainer>
      <Tile
        title="Aliquam"
        subtitle="Ipsum Dolor Sit Amet"
        overlayColor="#6dc2df"
      />
      <Tile
        title="Tempus"
        subtitle="Feugiat Amet Tempus"
        overlayColor="#8d82c4"
      />
      <Tile
        title="Magna"
        subtitle="Lorem Etiam Nullam"
        overlayColor="#ec8d81"
      />
      <Tile title="Ipsum" subtitle="Nisl Sed Aliquam" overlayColor="#e7b788" />
    </StyledTilesContainer>
  </StyledPage>
)

export default IndexPage
