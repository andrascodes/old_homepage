import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
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

import Banner from '../Banner'
import Contact from '../Contact'
import Footer from '../Footer'
import Helmet from 'react-helmet'
import NavBar from '../NavBar'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { library } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

ReactGA.initialize('UA-132438184-1')

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
  background-color: #000;

  & a {
    color: unset;
    text-decoration: none;
  }
`

class Layout extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loaded: false,
  //   }
  //   console.log('constructor')
  //   window.onload = () => this.setState({ loaded: true })
  // }

  // shouldComponentUpdate() {
  //   console.log('update')
  //   return true
  // }

  // componentDidMount() {

  // }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <StyledPage>
            <Helmet
              title={`${data.site.siteMetadata.title} - ${
                this.props.pageTitle
              }`}
            />
            <NavBar
              transparent
              loaded={true}
              logoTitle={this.props.logoTitle}
              logoSubtitle={this.props.logoSubtitle}
            />
            <Banner
              withButton={this.props.withButton}
              loaded={true}
              title={this.props.title}
              subtitle={this.props.subtitle}
              bgImage={this.props.bannerBgImage}
              bgColor={this.props.bannerBgColor}
            />
            {this.props.children}
            {this.props.index === true ? <Contact /> : ''}
            <Footer withContacts={this.props.index === false} />
          </StyledPage>
        )}
      />
    )
  }
}

Layout.propTypes = {
  index: PropTypes.bool,
  withButton: PropTypes.bool,
  withContacts: PropTypes.bool,
  logoTitle: PropTypes.string,
  logoSubtitle: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.string),
  bannerBgImage: PropTypes.object,
  bannerBgColor: PropTypes.string,
}

Layout.defaultProps = {
  index: false,
  withButton: false,
  withContacts: false,
  logoTitle: 'Forty',
  logoSubtitle: 'By HTML5 Up',
  title: 'Hi, my name is Forty',
  subtitle: [
    'A responsive site template designed by HTML5 UP',
    'and released under the creative commons.',
  ],
}

export default Layout
