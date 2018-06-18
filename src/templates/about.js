import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import LightNav from '../components/LightNav'
import Download from '../components/DownloadFlock'
import MobileNav from '../components/MobileNav'
import FlockStory from '../components/FlockStory'
import Footer from '../components/Footer'
import BigSectionLine from '../components/BigSectionLine'
import TextGrid from '../components/TextGrid'

import AboutHero from '../components/AboutHero'
import {colors, breakpoints, space} from '../constants/theme'
import MeetTheTeam from '../components/MeetTheTeam'

const PricingTemplate = ({data}) => {
  const {
    hero: {header, backgroundImage},
    flockStory,
    coreValues,
    meetTheTeam
  } = data.markdownRemark.frontmatter

  return (
    <div>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <LightNav /> : <MobileNav />)}
      </Media>
      <AboutHero
        center={true}
        headerClassName={css({
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '66vh'
        })}
        textColor={colors.white}
        header={header}
      />
      <FlockStory
        header={flockStory.header}
        bigText={flockStory.bigText}
        smallText={flockStory.smallText}
        image={flockStory.image}
        imageHeader={flockStory.imageHeader}
      />
      <BigSectionLine />
      <TextGrid
        title={coreValues.title}
        description={coreValues.description}
        list={coreValues.list}
      />
      <BigSectionLine />
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
  )
}

export default PricingTemplate

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
          }
        }
      }
    }
  }
`
