import PortfolioItem, {
  ListItem,
  ListItemInfo,
  ListItemTitle,
  Title,
  TitleName,
  TitlePitch,
} from '../components/PortfolioItem'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const PortfolioPage = props => {
  const bannerBgImgData = props.data.BannerBgImgData
  const { edges: trailImgData } = props.data.TrailImgs
  const { edges: lifecalendarImgData } = props.data.LifeCalendarImgs
  const { edges: meetupBotImgData } = props.data.MeetupBotImgs
  const { edges: qrAnalyticsImgData } = props.data.QRAnalyticsImgs
  const { edges: populismImgData } = props.data.PopulismImgs
  const { edges: sortingHatImgData } = props.data.SortingHatImgData
  const { edges: chatlerLandingImgData } = props.data.ChatlerLandingImgData

  return (
    <Layout
      withButton={false}
      withContacts
      logoTitle="András"
      logoSubtitle="Szücs"
      title="Portfolio"
      subtitle={[
        'I am passionate about building innovative',
        'products with cutting-edge technology',
      ]}
      bannerBgImage={bannerBgImgData}
      bannerBgColor="#110023"
    >
      <Helmet title="András Szücs - Portfolio" />
      <div>
        <PortfolioItem
          images={trailImgData}
          color="#ecf0f1"
          bgColor="#110023"
          renderTitleName={() => 'Trail'}
          renderTitlePitch={() =>
            'Building the next-generation gaming experience'
          }
          renderList={({ color }) => (
            <Fragment>
              <ListItem color={color}>
                <ListItemTitle>Company:</ListItemTitle>
                <ListItemInfo color={color}>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.trail.gg/"
                    target="_blank"
                  >
                    Trail Games AB
                  </a>
                </ListItemInfo>
              </ListItem>
              <ListItem color={color}>
                <ListItemTitle>Role:</ListItemTitle>
                <ListItemInfo color={color}>Frontend Developer</ListItemInfo>
              </ListItem>
              <ListItem color={color}>
                <ListItemTitle>Date:</ListItemTitle>
                <ListItemInfo color={color}>2018. May-June</ListItemInfo>
              </ListItem>
            </Fragment>
          )}
          renderDescription={() =>
            `Developed a frontend application similar to Netflix's web app for a
            company bringing native quality gaming into the browsers. Worked
            together with the designer and the CTO to rewrite the frontend
            client from EmberJS to ReactJS.`
          }
        />

        <PortfolioItem
          images={lifecalendarImgData}
          color="#000"
          bgColor="#dfe6e9"
          renderTitleName={() => 'Lifecalendar'}
          renderTitlePitch={() =>
            'Visualizing your life to serve as a daily reminder to only worry about things that truly matter'
          }
          renderList={() => {
            const color = '#00000080'
            return (
              <Fragment>
                <ListItem color={color}>
                  <ListItemTitle>Project:</ListItemTitle>
                  <ListItemInfo>Own Side-project</ListItemInfo>
                </ListItem>
                <ListItem color={color}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo>2018. March</ListItemInfo>
                </ListItem>
                <ListItem color={color}>
                  <ListItemTitle>Demo:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://andrewszucs.github.io/lifecalendar/"
                      target="_blank"
                    >
                      Visit Demo
                    </a>
                    {` / `}
                    <a
                      rel="noopener noreferrer"
                      href="https://chrome.google.com/webstore/detail/lifecalendar-extension/icebmcdnlmgejfkplolagngalhpkjhan"
                      target="_blank"
                    >
                      Chrome Store
                    </a>
                  </ListItemInfo>
                </ListItem>
                <ListItem color={color}>
                  <ListItemTitle>Code:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/andrewszucs/lifecalendar"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `A Chrome New-tab Extension and web application visualizing how much time you have got to live. 
            Developed with ReactJS with an emphasis on responsivity. 
            During the project I experimented with creating a multi-platform build process 
            for Chrome and the web.
            `
          }
        />

        <PortfolioItem
          images={meetupBotImgData}
          color="#fff"
          bgColor="#0086ff"
          renderTitle={() => (
            <Title>
              <TitleName>MeetupBot</TitleName>
              {` — `}
              <TitlePitch>Engaging a MeetupGroup through Messenger</TitlePitch>
            </Title>
          )}
          renderList={({ color }) => {
            const listItemColor = '#fff'
            return (
              <Fragment>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Project:</ListItemTitle>
                  <ListItemInfo color={listItemColor}>
                    Own Side-project
                  </ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo color={listItemColor}>
                    2016. September
                  </ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Demo:</ListItemTitle>
                  <ListItemInfo>
                    <a
                      rel="noopener noreferrer"
                      href="https://youtu.be/xU7-SJ-9mfU"
                      target="_blank"
                    >
                      Watch on YouTube
                    </a>
                  </ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Code:</ListItemTitle>
                  <ListItemInfo>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/andrewszucs/bpbotsmeetup"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `A Messenger Chatbot application developed for the Budapest Bots Meetup group 
          to engage the participants both during and in-between meetups. 
          Features include: automatic meetup notification, event information, newsletter subscription, 
          Q&A question submission and feedback sending. Developed with NodeJS and MongoDB.`
          }
        />

        <PortfolioItem
          images={qrAnalyticsImgData}
          color="#d2dae2"
          bgColor="#000"
          renderTitleName={() => 'QuikReply Analytics'}
          renderTitlePitch={() =>
            'Exploring what an Analytics service could look like for chatbots'
          }
          renderList={({ color }) => {
            const listItemColor = '#ffffff'
            return (
              <Fragment>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Project:</ListItemTitle>
                  <ListItemInfo color={color}>Bachelor Thesis</ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo color={color}>2017. May</ListItemInfo>
                </ListItem>
                {/* <ListItem color={listItemColor}>
                <ListItemTitle>Demo:</ListItemTitle>
                <ListItemInfo color={color}>
                  <a
                    rel="noopener noreferrer"
                    href="https://andrewszucs.github.io/lifecalendar/"
                    target="_blank"
                  >
                    Visit Demo
                  </a>
                </ListItemInfo>
              </ListItem> */}
                <ListItem color={listItemColor}>
                  <ListItemTitle>Code:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/andrewszucs/quikreply-bot"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `All-in-one chatbot and analytics application for Messenger.
          Designed and developed the project on my own using ReactJS, NodeJS and 
          Machine Learning tools in Python for the Natural Language Processing API.
          Used testing tools such as Jest and Tape during the development.
            `
          }
        />

        <PortfolioItem
          images={chatlerLandingImgData}
          color="#5324fb"
          bgColor="#daf5fd"
          renderTitleName={() => 'Chatler.ai website'}
          renderTitlePitch={() =>
            'Presenting the value proposition of an automatic "chat-butler"'
          }
          renderList={({ color }) => {
            return (
              <Fragment>
                <ListItem color={color}>
                  <ListItemTitle>Company:</ListItemTitle>
                  <ListItemInfo color={color}>Chatler.ai Ltd</ListItemInfo>
                </ListItem>
                <ListItem color={color}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo color={color}>2017. January</ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `Landing page developed for the Chatler.ai company.
          Combined Gulp, Pug and SASS to create a Static-Site Generator behind the website, which provides:
          compilation commands, live reloading and easy deployment to AWS..
          `
          }
        />

        <PortfolioItem
          images={populismImgData}
          color="#000"
          bgColor="#fff"
          renderTitleName={() => 'Populist Countries'}
          renderTitlePitch={() =>
            'Exploring the factors that could contribute to the rise of populism through information visualization'
          }
          renderList={({ color }) => {
            const listItemColor = '#000000'
            return (
              <Fragment>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Project:</ListItemTitle>
                  <ListItemInfo color={color}>School Project</ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo color={color}>2018. February</ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Demo:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://andrewszucs.github.io/info-viz-project2/"
                      target="_blank"
                    >
                      Visit Demo
                    </a>
                  </ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Code:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/andrewszucs/info-viz-project2"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `Combined data from the World Values Survey and Gapminder to help the exploration of countries
          around the world in regards to the rise of populism. Used ReactJS to develop the visualization
          components.
            `
          }
        />

        <PortfolioItem
          images={sortingHatImgData}
          color="#000"
          bgColor="#fbc531"
          renderTitleName={() => 'The Sorting Hat'}
          renderTitlePitch={() =>
            'Creating fair groups in a university class with the use of data exploration'
          }
          renderList={({ color }) => {
            const listItemColor = '#000'
            return (
              <Fragment>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Project:</ListItemTitle>
                  <ListItemInfo color={color}>School Project</ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Date:</ListItemTitle>
                  <ListItemInfo color={color}>2018. January</ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Demo:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://andrewszucs.github.io/info-viz-project1/"
                      target="_blank"
                    >
                      Visit Demo
                    </a>
                  </ListItemInfo>
                </ListItem>
                <ListItem color={listItemColor}>
                  <ListItemTitle>Code:</ListItemTitle>
                  <ListItemInfo color={color}>
                    <a
                      rel="noopener noreferrer"
                      href="https://github.com/andrewszucs/info-viz-project1"
                      target="_blank"
                    >
                      Github repo
                    </a>
                  </ListItemInfo>
                </ListItem>
              </Fragment>
            )
          }}
          renderDescription={() =>
            `Visualized survey data for the Information Visualization class of 2018 
          at KTH Stockholm. The web application includes an automatic group creator and the 
          tool to fine-tune the selections. Used the KMeans clustering algorithm to group the students
          based on their interests as well.
            `
          }
        />
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const sizedImages = graphql`
  fragment sizedImages on File {
    childImageSharp {
      sizes(maxWidth: 1170, quality: 90) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

export const pageQuery = graphql`
  query portfolioImgsQuery {
    BannerBgImgData: file(relativePath: { eq: "portfolio_banner.png" }) {
      childImageSharp {
        fluid(
          maxWidth: 1440
          duotone: { highlight: "#ffffff", shadow: "#110023", opacity: 100 }
          quality: 90
        ) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    TrailImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/trail/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    LifeCalendarImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/lifecalendar/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    MeetupBotImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/meetupbot/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    QRAnalyticsImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/qranalytics/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    PopulismImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/populism/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    SortingHatImgData: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/sortinghat/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }

    ChatlerLandingImgData: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/projects/chatlerlanding/.*.png/" } }
    ) {
      edges {
        node {
          ...sizedImages
        }
      }
    }
  }
`
