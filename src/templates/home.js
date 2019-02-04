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
import OtherProducts from '../components/OtherProducts'
import Calculator from '../components/Calculator'
import Testimonial from '../components/Testimonial'
import TitleAndDescription from '../components/TitleAndDescription'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import SiteMetadata from '../components/SiteMetadata'
import ModalVideo from '../components/ModalVideo'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone-cropped-2@2x.png'

const HomeTemplate = ({
  video,
  secondTestimonial,
  hero,
  howFlockWorks,
  siteMetadataOverride,
  stopWorrying,
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
        <DarkNav to={hero.button.to}/>
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
          <Box pt={[3, 5]} background="white">
            <TextGrid
              title={stopWorrying.title}
              description={stopWorrying.description}
              list={stopWorrying.reasons}
            />
          </Box>
          <BigSectionLine />
          <Box pb={[2, 3]}>
            <OtherProducts
              title={kindOfPilot.title}
              description={kindOfPilot.description}
              products={kindOfPilot.products}
            />
          </Box>
          {video.isShowing ? (
            <Box pb={[2, 3]}>
              <ModalVideo
                text={video.text}
                videoId={video.id}
                coverImage={video.coverImage}
              />
            </Box>
          ) : null}
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
        <div className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 5]}>
            <TitleAndDescription
              title={calculator.title}
              description={calculator.description}
            />
            <Calculator disclaimer={calculator.disclaimer}/>
          </Box>
          <Box pt={[3, 5]}>
            <Testimonial testimonials={secondTestimonial} />
          </Box>
          <Box pt={[3, 5]}>
            <DownloadFlock to={hero.button.to}/>
          </Box>
          <BigSectionLine />
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
    video,
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
      video={video}
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
        video {
          isShowing
          text
          id
          coverImage
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
            text
          }
        }
        calculator {
          title
          description
          disclaimer
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
        siteMetadataOverride {
          title
          description
          keywords
        }
      }
    }
  }
`
