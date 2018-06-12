import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import LightNav from '../components/LightNav'
import Testimonial from '../components/Testimonial'
import Download from '../components/DownloadFlock'
import Flex from '../components/Flex'
import MobileNav from '../components/MobileNav'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import OtherProducts from '../components/OtherProducts'
import BigSectionLine from '../components/BigSectionLine'

import PricingHero from '../components/PricingHero'
import {colors, breakpoints} from '../constants/theme'
import SiteContainer from '../components/SiteContainer'
import Calculator from '../components/Calculator'

const PricingTemplate = ({data}) => {
  const {
    hero: {header, backgroundImage},
    pricing,
    testimonials,
    otherProducts
  } = data.markdownRemark.frontmatter

  return (
    <div>
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
        <Calculator />
      </div>
      <TextGrid description={pricing.description} list={pricing.list} />
      <Flex mt={[2, 5]} mb={[2, 5]} justifyContent="center">
        <SiteContainer>
          <Testimonial testimonials={testimonials} />
        </SiteContainer>
      </Flex>
      <Download />
      <BigSectionLine />
      <OtherProducts
        products={otherProducts.products}
        description={otherProducts.description}
        title={otherProducts.title}
      />
      <Footer />
    </div>
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
        pricing {
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
      }
    }
  }
`
