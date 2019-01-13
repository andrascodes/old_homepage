import Button from '../components/Button'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const CVPdf =
  'https://drive.google.com/open?id=17Hun2x2fNQYaZrbWdZHZoVxsqipiJkX6'

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
    >
      <Helmet title="András Szücs - About Me" />
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
              <Button to={CVPdf} size="medium" primary alternate>
                Download My CV
              </Button>
            </DesktopButtonContainer>
          </Pictures>
          <MobileButtonContainer>
            <Button to={CVPdf} size="medium" primary alternate>
              Download My CV
            </Button>
          </MobileButtonContainer>
          <Description>
            <p>
              My full name is András Szücs and I was born in Hungary. I studied
              Computer Science at the Eötvös Loránd University in Budapest.
              During my studies I participated in the Innovation Lab at the
              university where I gained practical experience in validating
              startup ideas and creating feasible business models. Thanks to
              this, I got to participate in a few startup projects such as
              Pulmoment and Chatler.AI. After graduating, I have been accepted
              to the EIT Digital Master School, a two-year double degree
              combining Technical programmes with Innovation and
              Entrepreneurship skills. I did my first year at KTH Royal
              Institute of Technology in Stockholm and currently I’m finishing
              my second year at Université Paris-Sud, majoring in Human-Computer
              Interaction and Design.
            </p>
            <p>
              My main expertise is in Full Stack Javascript Development. On the
              Frontend, I like to use React and on the backend Node.js. Thanks
              to my studies and projects I have also picked up skills in User
              Experience Design and Business. For this reason I can contribute
              to a team as a Designer (in User Research or Prototyping) or as
              Product Manager as well.
            </p>
            <p>
              Currently, I am looking for opportunities in Paris, London or
              Stockholm. Ideally, I’d like to find a position where I can
              combine my software development and design skills at a startup or
              at a fast-paced product development team in a larger company.
              Don’t hesitate to contact me if you're recruiting!
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
