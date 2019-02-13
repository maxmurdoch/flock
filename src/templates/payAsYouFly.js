import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import DarkNav from '../components/DarkNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import ProductTabs from '../components/ProductTabs'
import RenewalBanner from '../components/RenewalBanner'
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import FUfaqSection from '../components/FUfaqSection'
import TitleAndDescription from '../components/TitleAndDescription'
import Calculator from '../components/Calculator'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import ToggleiPhone from '../components/ToggleiPhone'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'

const PayAsYouFlyTemplate = ({
  downloadLink,
  hero,
  how,
  risk,
  calculator,
  siteMetadataOverride,
  stopWorrying,
  featured,
  faqSection,
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
          <Box pt={[3, 3]} pb={[2, 6]} background="white">
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

        <div className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 6]}>
            <TitleAndDescription
              title={calculator.title}
              description={calculator.description}
            />
            <Calculator disclaimer={calculator.disclaimer} />
          </Box>

          <div id="what-is-covered" />
          <Box pt={[3, 6]} background="white">
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
        </div>
        <Box className={css({backgroundColor: 'white'})}>
          <FUfaqSection
            header={faqSection.header}
            body={faqSection.body}
            buttonText={faqSection.buttonText}
            buttonUrl={faqSection.buttonUrl}
            disclosureIndicator={faqSection.disclosureIndicator}
            faqs={faqSection.faqs}
          />
        </Box>
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
    calculator,
    siteMetadataOverride,
    stopWorrying,
    featured,
    faqSection,
    renewalBanner,
    how,
    risk
  } = data.markdownRemark.frontmatter

  return (
    <PayAsYouFlyTemplate
      hero={hero}
      downloadLink={downloadLink}
      calculator={calculator}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      renewalBanner={renewalBanner}
      productTabs={productTabs}
      faqSection={faqSection}
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
        calculator {
          title
          description
          disclaimer
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
        faqSection {
          header
          body
          buttonText
          buttonUrl
          disclosureIndicator
          faqs {
            title
            body
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
