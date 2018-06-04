import React from 'react'
import { css } from 'emotion'
import Link from 'gatsby-link'

import Hero from '../components/Hero'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import WhatKindOfPilot from '../components/WhatKindOfPilot'
import Testimonial from '../components/Testimonial'
import HowFlockWorks from '../components/HowFlockWorks'
import ToggleiPhone from '../components/ToggleiPhone'
import HowToCalculateRisk from '../components/HowToCalculateRisk'
import DarkNav from '../components/DarkNav'
import WhatFlockCovers from '../components/WhatFlockCovers'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import { colors } from '../constants/theme'
import bigFlock from '../images/big-arrow.svg'

const HomePageTemplate = ({ data }) => {
  const {
    title,
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
      <DarkNav />
      <Hero
        headerClassName={css({
          background: colors.backgrounds.light,
          backgroundImage: `url(${bigFlock})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
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
      <HowToCalculateRisk data={risk} />
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
          calculations {
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
