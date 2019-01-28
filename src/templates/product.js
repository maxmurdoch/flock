import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import OtherProducts from '../components/OtherProducts'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskFlat from '../components/CalculateRiskFlat'
import ShowIf from '../components/ShowIf'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import FlightSchool from '../components/FlightSchool'
import Testimonial from '../components/Testimonial'
import MapBackground from '../components/MapBackground'

import Hero from '../components/Hero'
import CoverNote from '../components/CoverNote'
import {colors, breakpoints} from '../constants/theme'

const SegmentPageTemplate = ({data}) => {
  const {
    hero,
    why,
    coverNote,
    flightSchool,
    siteMetadataOverride,
    doINeedInsurance,
    how,
    risk,
    testimonial,
    otherProducts
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
        <Box className={css({backgroundColor: 'white'})}>
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
          <ShowIf predicate={flightSchool.show}>
            <BigSectionLine />
            <FlightSchool title={flightSchool.title} list={flightSchool.list} />
          </ShowIf>
          <BigSectionLine pb={0} />
          {coverNote.isShowing ? (
            <CoverNote
              image={coverNote.image}
              title={coverNote.title}
              bodyText={coverNote.bodyText}
              smallText={coverNote.smallText}
              link={coverNote.link}
            />
          ) : (
            <TextSection
              title={doINeedInsurance.title}
              bigText={doINeedInsurance.bigText}
              smallText={doINeedInsurance.smallText}
            />
          )}
        </Box>
        <MapBackground>
          <ToggleiPhone
            title={how.title}
            description={how.description}
            list={how.list}
          />
          <CalculateRiskDropDown
            title={risk.title}
            list={risk.list}
            description={risk.description}
          />
        </MapBackground>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 5]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          <Box pt={[3, 5]}>
            <DownloadFlock to={'https://flockcover.app.link/6IW6kTmgfP'}/>
          </Box>
          <BigSectionLine />
          <OtherProducts
            title={otherProducts.title}
            description={otherProducts.description}
            products={otherProducts.products}
          />
          <Box pt={[3, 5]}>
            <Featured />
          </Box>
        </Box>
        <Footer />
      </div>
    </StickyContainer>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query ProductPageQuery($id: String!) {
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
        coverNote {
          isShowing
          image
          title
          bodyText
          smallText
          link {
            to
            text
          }
        }
        flightSchool {
          show
          title
          list {
            image
            to
          }
        }
        doINeedInsurance {
          title
          bigText
          smallText
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
        risk {
          title
          description
          list {
            title
            icon
            text
          }
        }
        testimonial {
          quote
          author
          image
        }
        otherProducts {
          title
          description
          products {
            title
            text
            icon
            link
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
