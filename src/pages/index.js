import Button from '../components/Button'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import React from 'react'
import ReactGA from 'react-ga'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const CVPdf =
  'https://drive.google.com/file/d/1HwqcIvxzIjMB-fQZG49YeklPnsvFaq7B/view?usp=sharing'

const Content = styled.div`
  background-color: #fff;
  color: #000;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Inner = styled.div`
  max-width: 48rem;
  width: calc(100% - 12rem);
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1680px) {
    max-width: 43rem;
  }
  @media screen and (max-width: 1280px) {
    max-width: 30rem;
    width: calc(100% - 6rem);
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 2rem);
  }

  @media screen and (max-width: 360px) {
  }
`

const Pictures = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 35%;

  @media screen and (max-width: 768px) {
    flex-direction: row;
    & div {
      flex-basis: 50%;
      margin-bottom: 1rem;
    }

    & div:nth-child(2) {
      margin-left: 1rem;
    }
  }
`

const Description = styled.div`
  align-self: flex-start;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  flex-basis: 65%;
  font-size: 1.1rem;
  margin-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  a {
    text-decoration: underline;
    color: #0652dd;
    cursor: pointer;
  }

  a:hover {
    color: #4c8afb;
  }

  a:active {
    color: #4c8afb;
  }

  & p {
    margin-bottom: 0.75rem;
  }

  @media screen and (max-width: 1680px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1280px) {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    margin-left: 0;
  }

  @media screen and (max-width: 480px) {
  }

  @media screen and (max-width: 360px) {
  }
`

const StyledImg = styled(Img)`
  margin-bottom: 1.5rem;

  @media screen and (max-width: 1680px) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: -2rem;
  }
`

const DesktopButtonContainer = styled.div`
  color: #fff;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MobileButtonContainer = styled.div`
  color: #fff;
  /* margin-bottom: 2.5rem; */
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

// const MobileButton = styled(Button)`
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: flex;
//   }
// `

const Emoji = styled.div`
  margin-right: 10px;
`

const DownloadCVButton = props => (
  <Button
    to={CVPdf}
    size="medium"
    primary
    alternate
    onClick={ReactGA.event({
      category: 'Button Click',
      action: 'Download CV',
      label: 'Download CV',
    })}
    {...props}
  >
    Download My CV
  </Button>
)

const IndexPage = props => {
  const bannerBgImgData = props.data.BannerBgImgData
  const profilePicOneData = props.data.ProfilePicOne
  const profilePicTwoData = props.data.ProfilePicTwo

  return (
    <Layout
      index
      withButton
      logoTitle="András"
      logoSubtitle="Szücs"
      title="Hi, my name is András"
      subtitle={[
        'A Jack-Of-All-Trades Technologist with strong',
        'skills in Development, UX and Business',
      ]}
      bannerBgImage={bannerBgImgData}
      bannerBgColor="#000"
      pageTitle="About Me"
    >
      <Content>
        <Inner>
          <Pictures>
            <StyledImg
              title={'Profile pic One'}
              alt="Profile pic One"
              sizes={profilePicOneData.childImageSharp.sizes}
              style={{ marginTop: '-2rem' }}
            />
            <StyledImg
              title={'Profile pic One'}
              alt="Profile pic One"
              sizes={profilePicTwoData.childImageSharp.sizes}
            />
            <DesktopButtonContainer>
              <DownloadCVButton />
            </DesktopButtonContainer>
          </Pictures>
          <MobileButtonContainer>
            <DownloadCVButton />
          </MobileButtonContainer>
          <Description>
            <p>
              My name is <b>András Szücs</b> and I am a{' '}
              <b>full-stack web developer</b> from{' '}
              <b>
                Hungary{' '}
                <span role="img" aria-label="Hungary">
                  🇭🇺
                </span>
              </b>
              , based in <b>Stockholm</b>,{' '}
              <span role="img" aria-label="Sweden">
                🇸🇪
              </span>
              .
            </p>
            <p style={{ display: 'flex' }}>
              <Emoji role="img" aria-label="Education">
                <span role="img" aria-label="Education">
                  👨‍🎓
                </span>
              </Emoji>
              <div>
                <div>
                  <b>BSc</b> Computer Science (
                  <a
                    rel="noopener noreferrer"
                    href="https://www.elte.hu/"
                    target="_blank"
                  >
                    ELTE
                  </a>
                  )
                </div>
                <div>
                  <b>MSc</b> Human-Computer Interaction and Design (
                  <a
                    rel="noopener noreferrer"
                    href="https://www.kth.se/"
                    target="_blank"
                  >
                    KTH
                  </a>
                  ,{' '}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.u-psud.fr/"
                  >
                    U-PSUD
                  </a>
                  )
                </div>
                <div>
                  <b>Minor</b> in Innovation and Entrepreneurship (
                  <a
                    href="https://masterschool.eitdigital.eu/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    EIT
                  </a>
                  )
                </div>
              </div>
            </p>

            <p style={{ display: 'flex' }}>
              <Emoji>
                <span role="img" aria-label="Professional Experience">
                  👨‍💻
                </span>
              </Emoji>
              <div>
                <div>
                  I have been helping small and medium-size companies with their
                  product development needs for the past{' '}
                  <b>{new Date().getFullYear() - 2015} years</b>. I have{' '}
                  <b>advised early stage startups</b> like{' '}
                  <a
                    href="https://pulmoment.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pulmoment
                  </a>{' '}
                  and{' '}
                  <a
                    href="http://bestreply.ai"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Chatler.AI
                  </a>
                  , going from zero to having a feasible product strategy and
                  secured initial funding. Moreover, I{' '}
                  <b>designed and developed complete web applications</b> for
                  companies like{' '}
                  <a
                    href="https://www.trail.gg/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Trail Games
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://colivia.se/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Colivia
                  </a>
                  .
                </div>
              </div>
            </p>

            <p style={{ display: 'flex' }}>
              <Emoji>
                <span role="img" aria-label="Competences">
                  🧠
                </span>
              </Emoji>
              <div>
                <div>
                  I have a <b>deep understanding of Javascript</b>, which allows
                  me to quickly get up to speed with any codebase or new web
                  technology. I am <b>very experienced</b> in using{' '}
                  <b>React, Node.js, Typescript, GraphQL, SQL</b> and <b>AWS</b>
                  . I also have experience working as a <b>UX Designer</b> on
                  new product ideas, so I’m able to{' '}
                  <b>
                    provide value in any part of the product development
                    workflow
                  </b>
                  .
                </div>
              </div>
            </p>

            <p style={{ display: 'flex' }}>
              <Emoji>
                <span role="img" aria-label="Announcements">
                  ‼️
                </span>
              </Emoji>
              <div>
                <div>
                  <b>
                    Currently, I am looking for remote development opportunities
                    all over Europe.
                  </b>
                </div>
              </div>
            </p>
          </Description>
        </Inner>
      </Content>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query indexImgsQuery {
    BannerBgImgData: file(relativePath: { eq: "home_banner.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440, grayscale: true, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    ProfilePicOne: file(relativePath: { eq: "profile_img1.png" }) {
      childImageSharp {
        sizes(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }

    ProfilePicTwo: file(relativePath: { eq: "profile_img2.png" }) {
      childImageSharp {
        sizes(maxWidth: 1440, quality: 90) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`
