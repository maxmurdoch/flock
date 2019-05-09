import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import RenewalBanner from '../components/RenewalBanner'
import PromotionBanner from '../components/PromotionBanner'
import ProductTypeSection from '../components/ProductTypeSection'

import Hero from '../components/Hero'
import CoverNote from '../components/CoverNote'
import {colors} from '../constants/theme'

const CommercialTemplate = ({
  navColor,
  hero,
  why,
  coverNote,
  siteMetadataOverride,
  productTypes,
  testimonial,
  renewalBanner,
  promotionBanner
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        {navColor === 'light' ? <LightNav /> : <DarkNav />}
        <Box css={css({backgroundColor: 'white'})}>
          <Hero
            headerCSS={{
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            textColor={colors[hero.textColor]}
            header={hero.header}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
            smallPrint={
              '*Maximum £75 discount off first month. [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
            }
          />
          {!why.hidden && (
            <Box mt={[3, 5]}>
              <TextGrid
                title={why.title}
                description={why.description}
                list={why.list}
              />
            </Box>
          )}

          {!productTypes.hidden && (
            <Box mb={4}>
              <div id="product-types" />

              <BigSectionLine />

              <ProductTypeSection
                title={productTypes.title}
                description={productTypes.description}
                productCards={productTypes.productCards}
              />
            </Box>
          )}
          {!coverNote.hidden && (
            <CoverNote
              image={coverNote.image}
              title={coverNote.title}
              bodyText={coverNote.bodyText}
              smallText={coverNote.smallText}
              link={coverNote.link}
            />
          )}
        </Box>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          {!renewalBanner.hidden && (
            <Box pt={[3, 6]}>
              <RenewalBanner
                image={renewalBanner.image}
                mainText={renewalBanner.mainText}
                buttonText={renewalBanner.buttonText}
                buttonUrl={renewalBanner.buttonUrl}
                buttonTrack={renewalBanner.buttonTrack}
              />
            </Box>
          )}

          {!promotionBanner.hidden && (
            <Box pt={[3, 6]}>
              <PromotionBanner
                image={promotionBanner.image}
                mainText={promotionBanner.mainText}
                buttonText={promotionBanner.buttonText}
                buttonUrl={promotionBanner.buttonUrl}
                buttonTrack={promotionBanner.buttonTrack}
                buttonColor={promotionBanner.buttonColor}
              />
            </Box>
          )}
        </Box>

        <Footer
          FUnSmallPrint={
            '*One free month insurance for new Fly Unlimited customers who start their cover before 11/05/19. Credit card required. Maximum discount is £75. Policies over this amount will be charged at the full policy price, and £75 refunded back. After your free month, we’ll automatically renew your subscription and charge you the full ongoing monthly policy price. Cancel anytime. Full [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
          }
        />
      </div>
    </StickyContainer>
  )
}

export {CommercialTemplate}

const Commercial = ({data}) => {
  const {
    navColor,
    hero,
    why,
    coverNote,
    siteMetadataOverride,
    productTypes,
    testimonial,
    renewalBanner,
    promotionBanner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <CommercialTemplate
        hero={hero}
        navColor={navColor}
        why={why}
        coverNote={coverNote}
        siteMetadataOverride={siteMetadataOverride}
        productTypes={productTypes}
        testimonial={testimonial}
        renewalBanner={renewalBanner}
        promotionBanner={promotionBanner}
      />
    </Layout>
  )
}

export default Commercial

export const query = graphql`
  query Commercial($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        navColor
        hero {
          textColor
          buttons {
            title
            to
            color
            external
            branch
            track
          }
          features {
            leftIcon
            title
            rightIcon
          }
          description
          header
          backgroundImage
        }
        why {
          hidden
          title
          description
          list {
            title
            text
            icon
          }
        }
        productTypes {
          hidden
          title
          description
          productCards {
            buttonOneText
            buttonTwoText
            buttonOneUrl
            buttonTwoUrl
            buttonOneExternal
            buttonTwoExternal
            fromPrice
            policyFeatureList {
              text
            }
            productType
            fromText
            perText
            icon
          }
        }
        coverNote {
          hidden
          image
          title
          bodyText
          smallText
          link {
            to
            text
          }
        }
        testimonial {
          quote
          author
          image
        }
        promotionBanner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
          buttonColor
        }
        renewalBanner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
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
