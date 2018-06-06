import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import { css } from 'emotion'
import Link from 'gatsby-link'

import BigSectionLine from '../components/BigSectionLine'
import Flex from '../components/Flex'
import Box from '../components/Box'
import { colors } from '../constants/theme'
import LightNav from '../components/LightNav'
import MobileNav from '../components/MobileNav'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import OtherProducts from '../components/OtherProducts'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskSimple from '../components/CalculateRiskSimple'
import Testimonial from '../components/Testimonial'

import Hero from '../components/Hero'
import H2 from '../components/H2'
import SiteContainer from '../components/SiteContainer'
import BodyText from '../components/BodyText'
import SmallText from '../components/SmallText'
import CoverNote from '../components/CoverNote'
import { color, breakpoints } from '../constants/theme'

const SegmentPageTemplate = ({ data }) => {
  const {
    hero: { header, description, button, backgroundImage },
    why,
    how,
    risk,
    testimonial,
    otherProducts,
  } = data.markdownRemark.frontmatter
  return (
    <div>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <LightNav /> : <MobileNav />)}
      </Media>
      <Hero
        headerClassName={css({
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        })}
        textColor={colors.white}
        header={header}
        description={description}
        button={button}
      />
      <TextGrid
        title={why.title}
        description={why.description}
        list={why.list}
      />
      <CoverNote />
      <ToggleiPhone
        title={how.title}
        description={how.description}
        list={how.list}
      />
      <Flex background={colors.backgrounds.dark} justifyContent="center">
        <SiteContainer>
          <BigSectionLine
            borderColor={colors.white}
            backgroundColor={colors.backgrounds.dark}
          />
        </SiteContainer>
      </Flex>
      <CalculateRiskSimple
        title={risk.title}
        description={risk.description}
        list={risk.list}
      />
      <Box pt={3} pb={3}>
        <Testimonial testimonials={testimonial} />
      </Box>
      <DownloadFlock />
      <OtherProducts
        title={otherProducts.title}
        description={otherProducts.description}
        products={otherProducts.products}
      />
      <Featured />
      <Footer />
    </div>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query ProductPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
      }
    }
  }
`
