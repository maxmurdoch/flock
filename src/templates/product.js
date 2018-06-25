import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Flex from '../components/Flex'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import MobileNav from '../components/MobileNav'
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
import SiteContainer from '../components/SiteContainer'

const SegmentPageTemplate = ({data}) => {
  const {
    hero: {header, description, button, backgroundImage},
    why,
    coverNote,
    showFlightSchoolList,
    siteMetadataOverride,
    doINeedInsurance,
    how,
    risk,
    testimonial,
    otherProducts
  } = data.markdownRemark.frontmatter

  return (
    <div>
      <SiteMetadata
        title={siteMetadataOverride.title}
        description={siteMetadataOverride.description}
        keywords={siteMetadataOverride.keywords}
      />
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <LightNav /> : <MobileNav />)}
      </Media>
      <Hero
        headerClassName={css({
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        })}
        textColor={colors.white}
        header={header}
        description={description}
        button={button}
      />
      <Box mt={[2, 5]}>
        <TextGrid
          title={why.title}
          description={why.description}
          list={why.list}
        />
      </Box>
      <ShowIf predicate={showFlightSchoolList}>
        <div>
          <BigSectionLine />
          <Flex justifyContent="center">
            <SiteContainer>
              <FlightSchool />
            </SiteContainer>
          </Flex>
        </div>
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
      <MapBackground>
        <ToggleiPhone
          title={how.title}
          description={how.description}
          list={how.list}
        />
        <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
          {matches =>
            matches ? (
              <CalculateRiskFlat
                title={risk.title}
                description={risk.description}
                list={risk.list}
              />
            ) : (
              <CalculateRiskDropDown
                title={risk.title}
                description={risk.description}
                list={risk.list}
              />
            )
          }
        </Media>
      </MapBackground>
      <Box pt={[2, 5]}>
        <Testimonial testimonials={testimonial} />
      </Box>
      <Box pt={[2, 5]}>
        <DownloadFlock />
      </Box>
      <BigSectionLine />
      <OtherProducts
        title={otherProducts.title}
        description={otherProducts.description}
        products={otherProducts.products}
      />
      <Box pt={[2, 5]}>
        <Featured />
      </Box>
      <Footer />
    </div>
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
        showFlightSchoolList
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
            list
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
