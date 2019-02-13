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
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import ToggleiPhone from '../components/ToggleiPhone'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone-cropped-2@2x.png'

const PayAsYouFlyTemplate = ({
  secondTestimonial,
  downloadLink,
  hero,
  how,
  risk,
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

        <Box background="white">
          <ProductTabs
            title={productTabs.title}
            description={productTabs.description}
            customerTypeList={productTabs.customerTypeList}
          />
        </Box>

        <RenewalBanner
          image={renewalBanner.image}
          mainText={renewalBanner.mainText}
          buttonText={renewalBanner.buttonText}
          buttonUrl={renewalBanner.buttonUrl}
          buttonTrack={renewalBanner.buttonTrack}
        />
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

PayAsYouFlyTemplate.propTypes = {
  video: PropTypes.object,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  featured: PropTypes.object,
  renewalBanner: PropTypes.object,
  productTabs: PropTypes.object
}

export {PayAsYouFlyTemplate}

const PayAsYouFly = ({data}) => {
  const {
    productTabs,
    secondTestimonial,
    downloadLink,
    hero,
    siteMetadataOverride,
    stopWorrying,
    featured,
    renewalBanner,
    how,
    risk
  } = data.markdownRemark.frontmatter

  return (
    <PayAsYouFlyTemplate
      secondTestimonial={secondTestimonial}
      hero={hero}
      downloadLink={downloadLink}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      featured={featured}
      renewalBanner={renewalBanner}
      productTabs={productTabs}
      how={how}
      risk={risk}
    />
  )
}

PayAsYouFly.propTypes = {
  data: PropTypes.object
}

export default PayAsYouFly

export const query = graphql`
  query PayAsYouFly($id: String!) {
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
