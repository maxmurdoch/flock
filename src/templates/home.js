import React from 'react'
import Link from 'gatsby-link'

import Text from '../components/Text'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Box from '../components/Box'

const IndexPage = ({ data }) => {
  const {
    title,
    hero: { header, description, button },
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <Flex background="silver" flexDirection="column">
      <h1>{header}</h1>
      <Box>
        <p>{description}</p>
        <Button to={button.to}>{button.text}</Button>
      </Box>
      <Flex width="100%" justifyContent="space-between">
        <Text>Underwritten by Allianz</Text>
        <Text>FCA & CAA regulated</Text>
        <Text>24/7 customer support</Text>
      </Flex>

      <Box background="yellow">
        <Text tag="h2" fontSize="4" fontWeight="700">
          Stop worrying,<br />
          you're covered.
        </Text>
        <Text>
          It's time for a new kind of insurance. Control your cover from the
          get-go with the Flock Cover app.
        </Text>
      </Box>

      <Flex background="lightgreen">
        <Box>
          <Text tag="h3">Flexible policies</Text>
          <Text>
            Policies range from 1-8 hours, and can be purchased on the sport, or
            scheduled up to 10 days in advance.
          </Text>
        </Box>
        <Box>
          <Text tag="h3">Fairer pricing</Text>
          <Text>
            Pay for insurance only when you fly, with no up-front costs. Flock's
            pricing is risk-dependent, so the safer the flight, the less you
            pay.
          </Text>
        </Box>
        <Box>
          <Text tag="h3">Total transparency</Text>
          <Text>
            Receive a real-time quote in under 30 seconds. You can even see when
            and where it's cheapeast to insure your drone flight.
          </Text>
        </Box>
      </Flex>

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
    </Flex>
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
