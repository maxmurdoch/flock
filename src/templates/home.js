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
        <DarkNav to={hero.button.to} />
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
            buttonOne={hero.button}
          />
          <Box pt={[3, 3]} background="white">
            <TextGrid
              title={stopWorrying.title}
              description={stopWorrying.description}
              list={stopWorrying.reasons}
            />
          </Box>
          <BigSectionLine />
        </Box>

        <div className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]} background="white">
            <ProductTabs
              title={productTabs.title}
              description={productTabs.description}
            >
              <Tab title="Commerical Ooperator">

              </Tab>

              <div label="Commercial pilot">
                LOL
              </div>
              <div label="Pilot in training">
                LOLATRON
              </div>
              <div label="Recreational pilot">
                LOLDOG MILLIONAIRE
              </div>
              <div label="Enterprise">
                LOLOCAPLOPS
              </div>
            </ProductTabs>
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
            />
          </Box>
          <Featured title={featured.title} image={featured.image} />
        </div>
        <Footer />
      </div>
    </StickyContainer>
  )
}

const Tabs = ({ children }) => {
  const items = React.Children.toArray(children)

  return (
    <div>
      <div>
        {items.map(item => {
          return (
            <button>{item.props.title}</button>
          )
        })}
      </div>

      <div>
        {items[selectedInded].props.children}
      </div>
    </div>
  )
}

const Tab  = ({ title, children }) => {}

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
    video,
    secondTestimonial,
    hero,
    siteMetadataOverride,
    stopWorrying,
    featured,
    renewalBanner,
    productTabs
  } = data.markdownRemark.frontmatter

  return (
    <HomeTemplate
      video={video}
      secondTestimonial={secondTestimonial}
      hero={hero}
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
        hero {
          header
          description
          button {
            text
            to
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
        }
        productTabs {
          title
          description
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
