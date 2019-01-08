import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import Flex from '../components/Flex'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import RenewalBanner from '../components/RenewalBanner'
import NonToggleiPhone from '../components/NonToggleiPhone'
import BlackBackground from '../components/BlackBackground'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

const SegmentPageTemplate = ({data}) => {
  const {
    hero,
    why,
    siteMetadataOverride,
    how,
    control,
    renewalBanner,
    whatIsCovered
  } = data.markdownRemark.frontmatter

  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        <LightNav />
        <Box className={css({backgroundColor: 'white', paddingBottom: 75})}>
          <Hero
            headerClassName={css({
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            })}
            textColor={colors.white}
            header={hero.header}
            description={hero.description}
            buttonOne={hero.buttonOne}
            buttonTwo={hero.buttonTwo}
          />
          <Box mt={[3, 5]}>
            <TextGrid
              title={why.title}
              description={why.description}
              list={why.list}
            />
          </Box>
        </Box>
        <BlackBackground className={css({paddingBottom: 40})}>
          <NonToggleiPhone
            title={how.title}
            description={how.description}
            list={how.list}
            image={how.image}
          />
        </BlackBackground>
        <Box className={css({backgroundColor: 'white', paddingTop: 40})}>
          <Box mt={[3, 5]}>
            <TextGrid
              title={control.title}
              description={control.description}
              list={control.list}
            />
          </Box>
          <BigSectionLine />
          <Box mt={[3, 5]}>
          <WhatIsCoveredSection />
          </Box>
        </Box>

        <RenewalBanner
          image={renewalBanner.image}
          mainText={renewalBanner.mainText}
          buttonText={renewalBanner.buttonText}
        />

        <Footer />
      </div>
    </StickyContainer>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query FlyUnlimitedPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
          buttonOne {
            text
            to
          }
          buttonTwo {
            text
            to
          }
          description
          header
          backgroundImage
        }
        why {
          title
          description
          list {
            icon
            title
            text
          }
        }
        how {
          title
          description
          image
          list {
            title
            text
          }
        }
        control {
          title
          description
          list {
            title
            text
          }
        }
        renewalBanner {
          image
          mainText
          buttonText
        }
        whatIsCovered {
          title
          list {
            icon
            title
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
