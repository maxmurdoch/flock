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
import ProductTabs from '../components/ProductTabs'
import RenewalBanner from '../components/RenewalBanner'
import Testimonial from '../components/Testimonial'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone-cropped-2@2x.png'

const HomeTemplate = ({
  secondTestimonial,
  downloadLink,
  hero,
  siteMetadataOverride,
  stopWorrying,
  featured,
  renewalBanner,
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
              <img src={iPhone} className={style.iphone} />
            )}
            headerClassName={style.header}
            headerContainerClassName={style.headerContainer}
            header={hero.header}
            textShadow={false}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
          />
          <Box pt={[3, 3]} background="white">
            <TextGrid
              title={stopWorrying.title}
              description={stopWorrying.description}
              list={stopWorrying.reasons}
            />
          </Box>
          <BigSectionLine id="product-tabs" />
        </Box>

        <div className={css({backgroundColor: 'white'})}>
          <Box background="white">
            <ProductTabs
              title={productTabs.title}
              description={productTabs.description}
              customerTypeList={productTabs.customerTypeList}
            />
          </Box>
        </div>

        <div className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 5]}>
            <Testimonial testimonials={secondTestimonial} />
          </Box>

          <Box pt={[3, 5]} pb={[3, 5]}>
            <RenewalBanner
              image={renewalBanner.image}
              mainText={renewalBanner.mainText}
              buttonText={renewalBanner.buttonText}
              buttonUrl={renewalBanner.buttonUrl}
              buttonTrack={renewalBanner.buttonTrack}
            />
          </Box>
          <Featured title={featured.title} image={featured.image} />
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
    background: colors.backgrounds.light,
    backgroundImage: `url(${mobileFlock})`,
    backgroundSize: '45rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    width: '100%',
    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      backgroundImage: `url(${bigFlock})`,
      backgroundPosition: 'bottom right'
    }
  })
}

HomeTemplate.propTypes = {
  video: PropTypes.object,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  featured: PropTypes.object,
  renewalBanner: PropTypes.object,
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
    renewalBanner
  } = data.markdownRemark.frontmatter

  return (
    <HomeTemplate
      secondTestimonial={secondTestimonial}
      hero={hero}
      downloadLink={downloadLink}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      featured={featured}
      renewalBanner={renewalBanner}
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
          title
          image
        }
        renewalBanner {
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
        }
        productTabs {
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
