import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import SiteMetadata from '../components/SiteMetadata'
import Download from '../components/DownloadFlock'
import LightNav from '../components/LightNav'
import FlockStory from '../components/FlockStory'
import Footer from '../components/Footer'
import BigSectionLine from '../components/BigSectionLine'
import TextGrid from '../components/TextGrid'

import AboutHero from '../components/AboutHero'
import {colors, breakpoints, space} from '../constants/theme'
import MeetTheTeam from '../components/MeetTheTeam'
import investors from '../images/investors.png'

const AboutTemplate = ({
  hero,
  flockStory,
  siteMetadataOverride,
  coreValues,
  meetTheTeam
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        <LightNav />
        <AboutHero
          center={true}
          headerClassName={css({
            backgroundImage: `url(${hero.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '66vh'
          })}
          textColor={colors.white}
          header={hero.header}
        />
        <FlockStory
          header={flockStory.header}
          bigText={flockStory.bigText}
          smallText={flockStory.smallText}
          image={investors}
          imageHeader={flockStory.imageHeader}
        />
        <BigSectionLine />
        {coreValues.isShowing ? (
          <Fragment>
            <TextGrid
              title={coreValues.title}
              description={coreValues.description}
              list={coreValues.list}
            />
            <BigSectionLine />
            <TextGrid
              title={coreValues.title}
              description={coreValues.description}
              list={coreValues.list}
            />
          </Fragment>
        ) : null}
        <MeetTheTeam
          title={meetTheTeam.title}
          description={meetTheTeam.description}
          team={meetTheTeam.team}
        />
        <BigSectionLine />
        <Download to={'https://flockcover.app.link/6IW6kTmgfP'}/>
        <Footer
          containerClassName={css({
            marginTop: R.nth(3, space),
            [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
              marginTop: R.nth(5, space)
            }
          })}
        />
      </div>
    </StickyContainer>
  )
}

AboutTemplate.propTypes = {
  hero: PropTypes.object,
  flockStory: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  coreValues: PropTypes.object,
  meetTheTeam: PropTypes.object
}

const AboutPage = ({data}) => {
  const {
    hero,
    flockStory,
    siteMetadataOverride,
    coreValues,
    meetTheTeam
  } = data.markdownRemark.frontmatter

  return (
    <AboutTemplate
      hero={hero}
      flockStory={flockStory}
      siteMetadataOverride={siteMetadataOverride}
      coreValues={coreValues}
      meetTheTeam={meetTheTeam}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        title
        hero {
          header
          backgroundImage
        }
        flockStory {
          header
          image
          imageHeader
          bigText
          smallText
        }
        coreValues {
          title
          description
          isShowing
          list {
            title
            text
          }
        }
        meetTheTeam {
          title
          description
          team {
            member
            role
            image
          }
        }
        siteMetadataOverride {
          title
          description
          keywords
        }
      }
    }
  }
`

export {AboutTemplate}
export default AboutPage
