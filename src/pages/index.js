import React, { Component } from 'react'
import {
  faAngleRight,
  faArrowRight,
  faChevronRight,
  faEnvelope,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/fontawesome-free-brands'

import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Tile from '../components/Tile'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

library.add(
  faAngleRight,
  faArrowRight,
  faChevronRight,
  faLongArrowAltRight,
  faEnvelope,
  faLinkedin,
  faTwitter,
  faGithub
)

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2a2f4a;
`

const StyledTilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    window.onload = () => this.setState({ loaded: true })
  }

  render() {
    return (
      <StyledPage>
        <NavBar transparent loaded={this.state.loaded} />
        <Banner loaded={this.state.loaded} index />
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
        </StyledTilesContainer>
        <Contact />
        <Footer />
      </StyledPage>
    )
  }
}

export default IndexPage
