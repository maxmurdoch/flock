import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {StickyContainer} from 'react-sticky'
import Media from 'react-media'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import MobileNav from '../components/MobileNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import OtherProducts from '../components/OtherProducts'
import Calculator from '../components/Calculator'
import Testimonial from '../components/Testimonial'
import TitleAndDescription from '../components/TitleAndDescription'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import DarkNav from '../components/DarkNav'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone@2x.png'

const HomeTemplate = ({
  firstTestimonial,
  secondTestimonial,
  hero,
  howFlockWorks,
  siteMetadataOverride,
  stopWorrying,
  download,
  featured,
  calculator,
  kindOfPilot,
  risk
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        <Media query={`(min-width: ${R.nth(1, breakpoints)}`}>
          {matches => (matches ? <DarkNav /> : <MobileNav />)}
        </Media>
        <Hero
          RightSideComponent={() => (
            <img src={iPhone} className={style.iphone} />
          )}
          headerClassName={style.header}
          headerContainerClassName={style.headerContainer}
          header={hero.header}
          textShadow={false}
          description={hero.description}
          button={hero.button}
        />
        <Box mt={[2, 5]}>
          <TextGrid
            title={stopWorrying.title}
            description={stopWorrying.description}
            list={stopWorrying.reasons}
          />
        </Box>
        <BigSectionLine />
        <Box mb={[2, 3]}>
          <OtherProducts
            title={kindOfPilot.title}
            description={kindOfPilot.description}
            products={kindOfPilot.products}
          />
        </Box>
        <Box pb={[2, 3]}>
          <Testimonial testimonials={firstTestimonial} />
        </Box>
        <MapBackground>
          <ToggleiPhone
            title={howFlockWorks.title}
            description={howFlockWorks.description}
            list={howFlockWorks.listOfHow}
          />
          <CalculateRiskDropDown
            title={risk.title}
            list={risk.list}
            description={risk.description}
          />
        </MapBackground>
        <Box pt={[2, 5]}>
          <TitleAndDescription
            title={calculator.title}
            description={calculator.description}
          />
          <Calculator />
        </Box>
        <Box pt={[2, 5]}>
          <Testimonial testimonials={secondTestimonial} />
        </Box>
        <Box pt={[2, 5]}>
          <DownloadFlock
            title={download.title}
            text={download.text}
            button={download.button}
          />
        </Box>
        <BigSectionLine />
        <Featured title={featured.title} image={featured.image} />
        <Footer />
      </div>
    </StickyContainer>
  )
}

const style = {
  iphone: css({
    marginBottom: 0,
    width: '20rem',
    transform: 'rotate(11deg)'
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
  firstTestimonial: PropTypes.array,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  howFlockWorks: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  download: PropTypes.object,
  featured: PropTypes.object,
  calculator: PropTypes.object,
  kindOfPilot: PropTypes.object,
  risk: PropTypes.object
}

export {HomeTemplate}

const HomePage = ({data}) => {
  const {
    firstTestimonial,
    secondTestimonial,
    hero,
    howFlockWorks,
    siteMetadataOverride,
    stopWorrying,
    download,
    featured,
    calculator,
    kindOfPilot,
    risk
  } = data.markdownRemark.frontmatter

  return (
    <HomeTemplate
      firstTestimonial={firstTestimonial}
      secondTestimonial={secondTestimonial}
      hero={hero}
      howFlockWorks={howFlockWorks}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      download={download}
      featured={featured}
      calculator={calculator}
      kindOfPilot={kindOfPilot}
      risk={risk}
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
        firstTestimonial {
          quote
          author
          image
        }
        howFlockWorks {
          title
          description
          listOfHow {
            title
            text
            image
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
        kindOfPilot {
          title
          description
          products {
            title
            icon
            text
            link
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
        calculator {
          title
          description
        }
        secondTestimonial {
          quote
          author
          image
        }
        download {
          title
          text
          button {
            to
            text
          }
        }
        featured {
          title
          image
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
