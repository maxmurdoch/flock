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
import testimonialAirShot from '../images/testimonial-air-shot.png'

const IndexPage = ({ data }) => {
  const {
    title,
    hero: { header, description, button },
  } = data.allMarkdownRemark.edges[0].node.frontmatter
  const testimonials = [
    {
      quote:
        ' With all the current drone laws in the UK, having Flock is an added peace of mind. Another bonus is that Flock will insure non professional drone pilots. Thie is a brilliant app!',
      author: 'David Dennison, Parrot Mambo FPV pilot',
      image: testimonialAirShot,
    },
    {
      quote:
        ' With all the current drone laws in the UK, having Flock is an added peace of mind. Another bonus is that Flock will insure non professional drone pilots. Thie is a brilliant app!',
      author: 'David Dennison, Parrot Mambo FPV pilot',
      image: testimonialAirShot,
    },
    {
      quote:
        ' With all the current drone laws in the UK, having Flock is an added peace of mind. Another bonus is that Flock will insure non professional drone pilots. Thie is a brilliant app!',
      author: 'David Dennison, Parrot Mambo FPV pilot',
      image: testimonialAirShot,
    },
  ]

  return (
    <div>
      <HomeHero header={header} description={description} button={button} />
      <StopWorrying />
      <WhatKindOfPilot />
      <Testimonial testimonials={testimonials} />
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
          }
        }
      }
    }
  }
`
