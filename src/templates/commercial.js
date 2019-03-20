import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import ShowIf from '../components/ShowIf'
import Testimonial from '../components/Testimonial'
import RenewalBanner from '../components/RenewalBanner'
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
  renewalBanner
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
        <Box className={css({backgroundColor: 'white'})}>
          <Hero
            headerClassName={css({
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            })}
            textColor={colors[hero.textColor]}
            header={hero.header}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
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
        </Box>
        <Footer />
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
    renewalBanner
  } = data.markdownRemark.frontmatter

  return (
    <CommercialTemplate
      hero={hero}
      navColor={navColor}
      why={why}
      coverNote={coverNote}
      siteMetadataOverride={siteMetadataOverride}
      productTypes={productTypes}
      testimonial={testimonial}
      renewalBanner={renewalBanner}
    />
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
