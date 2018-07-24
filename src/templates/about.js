import React from 'react'
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

const PricingTemplate = ({
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
          image={flockStory.image}
          imageHeader={flockStory.imageHeader}
        />
        <BigSectionLine />
        {coreValues.isShowing ? (
          <TextGrid
            title={coreValues.title}
            description={coreValues.description}
            list={coreValues.list}
          />
          <BigSectionLine />
        ) : null}
        <TextGrid
          title={coreValues.title}
          description={coreValues.description}
          list={coreValues.list}
        />
        <MeetTheTeam
          title={meetTheTeam.title}
          description={meetTheTeam.description}
          team={meetTheTeam.team}
        />
        <BigSectionLine />
        <Download />
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

PricingTemplate.propTypes = {
  hero: PropTypes.object,
  flockStory: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  coreValues: PropTypes.object,
  meetTheTeam: PropTypes.object
}

const PricingPage = ({data}) => {
  const {
    hero,
    flockStory,
    siteMetadataOverride,
    coreValues,
    meetTheTeam
  } = data.markdownRemark.frontmatter

  return (
    <PricingTemplate
      hero={hero}
      flockStory={flockStory}
      siteMetadataOverride={siteMetadataOverride}
      coreValues={coreValues}
      meetTheTeam={meetTheTeam}
    />
  )
}

PricingPage.propTypes = {
  data: PropTypes.object
}

export const query = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
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

export {PricingTemplate}
export default PricingPage
