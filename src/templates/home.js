import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import DarkNav from '../components/DarkNav'
import Hero from '../components/Hero'
import Flex from '../components/Flex'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import TabSection from '../components/ProductTabs/ProductTabs'
import ProductCardTabs from '../components/ProductCardTabs'
import PromotionBanner from '../components/PromotionBanner'
import Testimonial from '../components/Testimonial'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import SiteMetadata from '../components/SiteMetadata'
import {colors} from '../constants/theme'

import funDrone from '../../static/images/uploads/funDrone.svg'

const HomeTemplate = ({
  secondTestimonial,
  downloadLink,
  hero,
  siteMetadataOverride,
  stopWorrying,
  featured,
  promotionBanner,
  productTabs
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        <DarkNav to={downloadLink} />
        <Box css={css({backgroundColor: 'white'})}>
          <Hero
            RightSideComponent={() => (
              <Flex
                alignItems={'center'}
                justifyContent="center"
                width={['100%', '50%']}
                ml={3}
              >
                <img src={funDrone} css={style.heroImage} />
              </Flex>
            )}
            headerCSS={style.header}
            header={hero.header}
            textShadow={false}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
            smallPrint={
              '*Maximum £75 discount off first month. [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
            }
          />
          {!stopWorrying.hidden && (
            <Box pt={[3, 3]} background="white">
              <TextGrid
                title={stopWorrying.title}
                description={stopWorrying.description}
                list={stopWorrying.reasons}
              />
              <BigSectionLine id="product-tabs" />
            </Box>
          )}
        </Box>

        {!productTabs.hidden && (
          <div css={css({backgroundColor: 'white'})}>
            <Box background="white">
              <TabSection
                title={productTabs.title}
                description={productTabs.description}
              >
                {productTabs.customerTypeList.map(
                  ({customerTypeDesc, productCards, title}) => (
                    <TabSection.Tab title={title} key={title}>
                      <Box pb={5}>
                        <ProductCardTabs
                          title={title}
                          customerTypeDesc={customerTypeDesc}
                          productCards={productCards}
                        />
                      </Box>
                    </TabSection.Tab>
                  )
                )}
              </TabSection>
            </Box>
          </div>
        )}

        <div css={css({backgroundColor: 'white'})}>
          <Box pt={[3, 5]}>
            <Testimonial testimonials={secondTestimonial} />
          </Box>

          <Box pt={[3, 5]} pb={[3, 5]}>
            {!promotionBanner.hidden && (
              <PromotionBanner
                image={promotionBanner.image}
                mainText={promotionBanner.mainText}
                buttonText={promotionBanner.buttonText}
                buttonUrl={promotionBanner.buttonUrl}
                buttonTrack={promotionBanner.buttonTrack}
                buttonColor={promotionBanner.buttonColor}
              />
            )}
          </Box>
          {!featured.hidden && (
            <Featured title={featured.title} image={featured.image} />
          )}
        </div>
        <Footer
          FUnSmallPrint={
            '*One free month insurance for new Fly Unlimited customers who start their cover before 11/05/19. Credit card required. Maximum discount is £75. Policies over this amount will be charged at the full policy price, and £75 refunded back. After your free month, we’ll automatically renew your subscription and charge you the full ongoing monthly policy price. Cancel anytime. Full [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
          }
        />
      </div>
    </StickyContainer>
  )
}

const style = {
  heroImage: css({
    marginBottom: 0,
    display: 'block',
    height: '70%',
    width: '100%'
  }),
  header: {
    background: colors.yellow
    // backgroundImage: `url(${mobileFlock})`,
    // backgroundSize: '45rem',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'bottom left',
    // width: '100%',
    // [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
    //   backgroundImage: `none`,
    //   backgroundPosition: 'bottom right'
    // }
  }
}

HomeTemplate.propTypes = {
  video: PropTypes.object,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  featured: PropTypes.object,
  promotionBanner: PropTypes.object,
  productTabs: PropTypes.object
}

export {HomeTemplate}

const HomePage = ({data}) => {
  const {
    productTabs,
    secondTestimonial,
    downloadLink,
    hero,
    siteMetadataOverride,
    stopWorrying,
    featured,
    promotionBanner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <HomeTemplate
        secondTestimonial={secondTestimonial}
        hero={hero}
        downloadLink={downloadLink}
        siteMetadataOverride={siteMetadataOverride}
        stopWorrying={stopWorrying}
        featured={featured}
        promotionBanner={promotionBanner}
        productTabs={productTabs}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        templateKey
        downloadLink
        hero {
          header
          description
          buttons {
            title
            to
            color
            border
            external
            branch
            track
          }
          features {
            leftIcon
            title
            rightIcon
          }
          smallPrint
        }
        stopWorrying {
          hidden
          title
          description
          reasons {
            title
            text
            icon
          }
        }
        secondTestimonial {
          quote
          author
          image
        }
        featured {
          hidden
          title
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
        productTabs {
          hidden
          title
          description
          customerTypeList {
            title
            customerTypeDesc
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
