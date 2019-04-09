import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import DarkNav from '../components/DarkNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import TabSection from '../components/ProductTabs'
import ProductCardTabs from '../components/ProductCardTabs'
import PromotionBanner from '../components/PromotionBanner'
import Testimonial from '../components/Testimonial'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import funDrone from '../../static/images/uploads/FuNDrone.png'

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
        <Box className={css({backgroundColor: 'white'})}>
          <Hero
            RightSideComponent={() => (
              <img src={funDrone} className={style.iphone} />
            )}
            headerClassName={style.header}
            headerContainerClassName={style.headerContainer}
            header={hero.header}
            textShadow={false}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
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
          <div className={css({backgroundColor: 'white'})}>
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

        <div className={css({backgroundColor: 'white'})}>
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
        <Footer />
      </div>
    </StickyContainer>
  )
}

const style = {
  iphone: css({
    marginBottom: 0,
    display: 'block'
  }),
  header: css({
    background: colors.yellow,
    // backgroundImage: `url(${mobileFlock})`,
    // backgroundSize: '45rem',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'bottom left',
    // width: '100%',
    // [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
    //   backgroundImage: `none`,
    //   backgroundPosition: 'bottom right'
    // }
  })
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
            external
            branch
            track
          }
          features {
            leftIcon
            title
            rightIcon
          }
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
