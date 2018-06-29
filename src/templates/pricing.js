import React from 'react'
import {StickyContainer} from 'react-sticky'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import LightNav from '../components/LightNav'
import Testimonial from '../components/Testimonial'
import Download from '../components/DownloadFlock'
import Flex from '../components/Flex'
import Box from '../components/Box'
import MobileNav from '../components/MobileNav'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import OtherProducts from '../components/OtherProducts'
import SiteMetadata from '../components/SiteMetadata'
import BigSectionLine from '../components/BigSectionLine'

import PricingHero from '../components/PricingHero'
import {colors, breakpoints} from '../constants/theme'
import Calculator from '../components/Calculator'

const PricingTemplate = ({data}) => {
  const {
    hero: {header, backgroundImage},
    riskCalculations,
    testimonials,
    otherProducts,
    siteMetadataOverride
  } = data.markdownRemark.frontmatter

  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
          {matches => (matches ? <LightNav /> : <MobileNav />)}
        </Media>
        <div
          className={css({
            position: 'relative'
          })}
        >
          <PricingHero
            headerClassName={css({
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            })}
            textColor={colors.white}
            header={header}
          />
          <Box
            className={css({
              transform: 'translateY(-20%)',
              [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
                transform: 'translateY(-50%)'
              }
            })}
          >
            <Calculator />
          </Box>
        </div>
        <TextGrid
          description={riskCalculations.description}
          list={riskCalculations.list}
          image={riskCalculations.image}
        />
        <Flex mt={[2, 5]} mb={[2, 5]} justifyContent="center">
          <Testimonial testimonials={testimonials} />
        </Flex>
        <Download />
        <BigSectionLine />
        <Box mb={[2, 5]}>
          <OtherProducts
            products={otherProducts.products}
            description={otherProducts.description}
            title={otherProducts.title}
          />
        </Box>
        <Footer />
      </div>
    </StickyContainer>
  )
}

export default PricingTemplate

export const query = graphql`
  query PricingPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
          header
          backgroundImage
        }
        riskCalculations {
          image
          description
          list {
            title
            text
          }
        }
        testimonials {
          author
          image
          quote
        }
        otherProducts {
          title
          description
          products {
            title
            icon
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
