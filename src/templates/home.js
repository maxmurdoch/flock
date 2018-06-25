import React from 'react'
import R from 'ramda'
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
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import DarkNav from '../components/DarkNav'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone@2x.png'

const HomePageTemplate = ({data}) => {
  const {
    firstTestimonial,
    secondTestimonial,
    hero: {header, description, button},
    howFlockWorks,
    stopWorrying,
    kindOfPilot,
    risk
  } = data.markdownRemark.frontmatter

  return (
    <div>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <DarkNav /> : <MobileNav />)}
      </Media>
      <Hero
        RightSideComponent={() => <img src={iPhone} className={style.iphone} />}
        headerClassName={style.header}
        headerContainerClassName={style.headerContainer}
        header={header}
        description={description}
        button={button}
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
        <Calculator />
      </Box>
      <Box pt={[2, 5]}>
        <Testimonial testimonials={secondTestimonial} />
      </Box>
      <Box pt={[2, 5]}>
        <DownloadFlock />
      </Box>
      <BigSectionLine />
      <Featured />
      <Footer />
    </div>
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
        secondTestimonial {
          quote
          author
          image
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
        howFlockWorks {
          title
          description
          listOfHow {
            title
            text
            image
          }
        }
      }
    }
  }
`

export default HomePageTemplate
