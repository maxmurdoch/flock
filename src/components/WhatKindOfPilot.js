import React from 'react'
import { css } from 'emotion'

import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import Flex from './Flex'
import Box from './Box'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import droneCamera from '../images/icons/drone-camera.svg'
import drone from '../images/icons/drone.svg'
import droneDiamond from '../images/icons/drone-diamond.svg'
import { colors } from '../constants/theme'

const WhatKindOfPilot = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex mb={4}>
          <Box width={['100%', '50%']}>
            <H2 mb={2}>What kind of pilot are you?</H2>
            <BodyText>
              Chances are we can provide coverage tailored specifically to you.
              Select below to learn more.
            </BodyText>
          </Box>
        </Flex>
        <Flex alignItems="stretch" position="relative" zIndex={0} mb={5}>
          <Flex
            flex="1 1 auto"
            flexDirection="column"
            width={['100%', '33.33%']}
            background={colors.backgrounds.light}
            p={2}
            mr={[0, 2]}
          >
            <img
              className={css({
                marginTop: '0.5rem',
                marginBottom: '1rem',
                width: '4rem',
              })}
              src={droneCamera}
            />
            <Box>
              <H4 tag="h3">Commercial pilot</H4>
              <SmallText>
                Flock’s EC785/2004 compliant policies offer flexible hull and
                liability insurance from just £5 a day.
              </SmallText>
            </Box>
          </Flex>
          <Flex
            flex="1 1 auto"
            flexDirection="column"
            width={['100%', '33.33%']}
            background={colors.backgrounds.light}
            p={2}
            mr={[0, 2]}
          >
            <img
              className={css({
                marginTop: '0.5rem',
                marginBottom: '1rem',
                width: '4rem',
              })}
              src={drone}
            />
            <Box>
              <H4 tag="h3">Trainee pilot</H4>
              <SmallText>
                From flight assessment insurance, to providing
                proof-of-insurance in your PfCO application, Flock’s got you
                covered.
              </SmallText>
            </Box>
          </Flex>
          <Flex
            flex="1 1 auto"
            flexDirection="column"
            width={['100%', '33.33%']}
            background={colors.backgrounds.light}
            p={2}
          >
            <img
              className={css({
                marginTop: '0.5rem',
                marginBottom: '1rem',
                width: '2rem',
              })}
              src={droneDiamond}
            />
            <Box>
              <H4 tag="h3">Recreational pilot</H4>
              <SmallText>
                Enjoy your favourite hobby without worrying about insurance. Get
                covered from just £3 with the touch of a button.
              </SmallText>
            </Box>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default WhatKindOfPilot
