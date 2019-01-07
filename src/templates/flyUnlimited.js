import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import MapBackground from '../components/MapBackground'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

const SegmentPageTemplate = ({data}) => {
  const {
    hero,
    why,
    siteMetadataOverride,
    how
  } = data.markdownRemark.frontmatter
  console.log(data)

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
            button={hero.button}
          />
          <Box mt={[3, 5]}>
            <TextGrid
              title={why.title}
              description={why.description}
              list={why.list}
            />
          </Box>
        </Box>
        <MapBackground>
          <ToggleiPhone
            title={how.title}
            description={how.description}
            list={how.list}
          />
        </MapBackground>
        <Box className={css({backgroundColor: 'white', paddingBottom: 75})}>
          <Box mt={[3, 5]}>
           <TextGrid
             title={why.title}
             description={why.description}
             list={why.list}
           />
          </Box>
          <BigSectionLine />
        </Box>

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
          button {
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
            title
            text
          }
        }
        how {
          title
          description
          list {
            title
            image
            text
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
