import {
  faAngleRight,
  faArrowRight,
  faChevronRight,
  faEnvelope,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter } from '@fortawesome/fontawesome-free-brands'

import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import React from 'react'
import Tile from '../components/Tile'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

library.add(faAngleRight, faArrowRight, faChevronRight, faLongArrowAltRight)
library.add(
  faAngleRight,
  faArrowRight,
  faChevronRight,
  faLongArrowAltRight,
  faEnvelope,
  faLinkedin,
  faTwitter
)

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
    <NavBar alt />
    <Banner />
    <StyledTilesContainer>
      <Tile
        title="About Me"
        subtitle="Ipsum Dolor Sit Amet"
        overlayColor="#6dc2df"
      />
      <Tile
        title="Portfolio"
        subtitle="Feugiat Amet Tempus"
        overlayColor="#8d82c4"
      />
    </StyledTilesContainer>
  </StyledPage>
)

export default IndexPage
