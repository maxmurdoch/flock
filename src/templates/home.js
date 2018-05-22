import React from 'react'
import Link from 'gatsby-link'

import HomeHero from '../components/HomeHero'
import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Box from '../components/Box'
import StopWorrying from '../components/StopWorrying'
import WhatKindOfPilot from '../components/WhatKindOfPilot'

const IndexPage = ({ data }) => {
  const {
    title,
    hero: { header, description, button },
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <div>
      <HomeHero header={header} description={description} button={button} />
      <StopWorrying />
      <WhatKindOfPilot />
      <Box background="yellow">
        <Text tag="h2" fontSize="4" fontWeight="700">
          What kind of pilot are you?
        </Text>
        <Text>
          Chances are we can provide coverage tailored specifically to you.
          Select below to learn more.
        </Text>
      </Box>

      <Flex background="pink">
        <Box>
          <Text tag="h3">Commercial pilot</Text>
          <Text>
            Flock's EC785/2004 compliant policies offer flexible hull and
            liability insurance fomr just £5 a day
          </Text>
        </Box>
        <Box>
          <Text tag="h3">Trainee pilot</Text>
          <Text>
            From flight assessment insurance, to providing proof-of-insurance in
            your PfCO application, Flock's got you covered.
          </Text>
        </Box>
        <Box>
          <Text tag="h3">Recreational pilot</Text>
          <Text>
            Enjoyu your favourite hobby without worrying about insurance. Get
            covered from just £3 at the touch a button.
          </Text>
        </Box>
      </Flex>

      <Flex height="10rem" background="lightblue">
        <Text>Quote</Text>
      </Flex>

      <Flex height="50rem" background="black" flexWrap="wrap">
        <Box>
          <Text tag="h2" fontSize="2" color="white">
            How Flock works
          </Text>
          <Text color="white">
            Insuring your drone or flight has never been simpler. All it takes
            is a few taps.
          </Text>
        </Box>
        <Box width="100%" height="20rem" background="pink">
          <Text color="white">iPhone carousel thing</Text>
        </Box>
      </Flex>
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
