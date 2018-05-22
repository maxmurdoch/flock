import React from 'react'

import H2 from './H2'
import H3 from './H3'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'

const StopWorrying = () => {
  return (
    <Flex justifyContent="center" pt={5} pb={5}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']}>
            <H2>
              Stop worrying,<br /> you’re covered
            </H2>
            <BodyText>
              It’s time for a new kind of insurance. Control your cover from the
              get-go with the Flock Cover app.
            </BodyText>
          </Box>
          <Flex pt={4} pb={5} borderBottom="1px solid #000">
            <Box width={['100%', '33.33%']} mr={[0, 3]}>
              <H3>Flexible policies</H3>
              <SmallText>
                Policies range from 1-8 hours, and can be purchased on the spot,
                or scheduled up to 10 days in advance.
              </SmallText>
            </Box>
            <Box width={['100%', '33.33%']} mr={[0, 3]}>
              <H3>Fairer pricing</H3>
              <SmallText>
                Pay for insurance only when you fly, with no up-front costs.
                Flock’s pricing is risk-dependent, so the safer the flight, the
                less you pay.
              </SmallText>
            </Box>
            <Box width={['100%', '33.33%']}>
              <H3>Total transparency</H3>
              <SmallText>
                Receive a real-time quote in under 30 seconds. You can even see
                when and where it’s cheapest to insure your drone flight.
              </SmallText>
            </Box>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default StopWorrying
