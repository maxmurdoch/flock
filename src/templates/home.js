import React from 'react'
import Link from 'gatsby-link'

import HomeHero from '../components/HomeHero'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import StopWorrying from '../components/StopWorrying'
import WhatKindOfPilot from '../components/WhatKindOfPilot'
import Testimonial from '../components/Testimonial'
import HowFlockWorks from '../components/HowFlockWorks'
import HowToCalculateRisk from '../components/HowToCalculateRisk'
import WhatFlockCovers from '../components/WhatFlockCovers'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

const IndexPage = ({ data }) => {
  const {
    title,
    testimonials,
    hero: { header, description, button },
    howFlockWorks,
    howToCalculateRisk,
    whatFlockCovers,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <div>
      <HomeHero header={header} description={description} button={button} />
      <StopWorrying />
      <WhatKindOfPilot />
      <Box pb={3}>
        <Testimonial testimonials={testimonials} />
      </Box>
      <HowFlockWorks data={howFlockWorks} />
      <HowToCalculateRisk data={howToCalculateRisk} />
      <WhatFlockCovers data={whatFlockCovers} />
      <Box pb={5}>
        <Testimonial testimonials={testimonials} />
      </Box>
      <DownloadFlock />
      <Featured />
      <Footer />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query HomePage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/index.md/" } }
    ) {
      edges {
        node {
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
            testimonials {
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
              }
            }
          }
        }
      }
    }
  }
`
