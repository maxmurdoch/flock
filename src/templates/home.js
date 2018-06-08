import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import { css } from 'emotion'

import MobileNav from '../components/MobileNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import WhatKindOfPilot from '../components/WhatKindOfPilot'
import Testimonial from '../components/Testimonial'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import DarkNav from '../components/DarkNav'
import WhatFlockCovers from '../components/WhatFlockCovers'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import { colors, breakpoints } from '../constants/theme'
import bigFlock from '../images/big-arrow.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'

const HomePageTemplate = ({ data }) => {
  const {
    firstTestimonial,
    secondTestimonial,
    hero: { header, description, button },
    howFlockWorks,
    stopWorrying,
    kindOfPilot,
    whatFlockCovers,
    risk,
  } = data.markdownRemark.frontmatter

  return (
    <div>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <DarkNav /> : <MobileNav />)}
      </Media>

      <Hero
        headerClassName={css({
          background: colors.backgrounds.light,
          backgroundImage: `url(${mobileFlock})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
            backgroundImage: `url(${bigFlock})`,
            backgroundPosition: 'bottom right',
          },
        })}
        header={header}
        description={description}
        button={button}
      />
      <TextGrid
        title={stopWorrying.title}
        description={stopWorrying.description}
        list={stopWorrying.reasons}
      />
      <WhatKindOfPilot data={kindOfPilot} />
      <Box pb={3}>
        <Testimonial testimonials={firstTestimonial} />
      </Box>
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
      <WhatFlockCovers data={whatFlockCovers} />
      <Box pb={5}>
        <Testimonial testimonials={secondTestimonial} />
      </Box>
      <DownloadFlock />
      <Featured />
      <Footer />
    </div>
  )
}

export default HomePageTemplate

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
          }
        }
        kindOfPilot {
          title
          description
          pilots {
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
        whatFlockCovers {
          title
          description
          listOfWhatFlockCovers {
            text
          }
        }
      }
    }
  }
`
