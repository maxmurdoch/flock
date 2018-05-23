import React from 'react'
import Link from 'gatsby-link'

import HomeHero from '../components/HomeHero'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Box from '../components/Box'
import StopWorrying from '../components/StopWorrying'
import WhatKindOfPilot from '../components/WhatKindOfPilot'
import Testimonial from '../components/Testimonial'

const IndexPage = ({ data }) => {
  const {
    title,
    testimonials,
    hero: { header, description, button },
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <div>
      <HomeHero header={header} description={description} button={button} />
      <StopWorrying />
      <WhatKindOfPilot />
      <Box pb={3}>
        <Testimonial testimonials={testimonials} />
      </Box>
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
          }
        }
      }
    }
  }
`
