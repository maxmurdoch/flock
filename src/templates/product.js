import React from 'react'
import { css } from 'emotion'
import Link from 'gatsby-link'

import BigSectionLine from '../components/BigSectionLine'
import Flex from '../components/Flex'
import Box from '../components/Box'
import { colors } from '../constants/theme'
import LightNav from '../components/LightNav'
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
import coverNote from '../../static/images/uploads/cover-note.svg'
import SiteContainer from '../components/SiteContainer'
import BodyText from '../components/BodyText'
import SmallText from '../components/SmallText'
import { color } from '../constants/theme'

const ApplyForCover = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex>
          <Box width="50%">
            <H2>Applying for your PfCO?</H2>
            <BodyText mb={2}>
              You no longer need to commit to an annual insurance policy in
              order to get your proof of insurance for your PfCO renewal.
            </BodyText>
            <SmallText mb={2}>
              Flock’s Cover Note is accepted by the CAA as proof of EC785/2004
              compliant insurance, and you can get yours instantly without
              having to pay a penny.
            </SmallText>
            <SmallText mb={2}>
              <Link className={css({ color: 'inherit' })}>
                Learn how to get your cover note within our app →
              </Link>
            </SmallText>
          </Box>
          <Box width="50%">
            <img src={coverNote} />
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}
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
      <LightNav />
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
      <ApplyForCover />
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
