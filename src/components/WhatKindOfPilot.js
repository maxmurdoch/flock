import React from 'react'
import R from 'ramda'
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
import { colors } from '../constants/theme'

const WhatKindOfPilot = ({ data }) => {
  const { title, description, pilots } = data

  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex mb={4}>
          <Box width={['100%', '50%']}>
            <H2 mb={2}>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
        </Flex>
        <Flex alignItems="stretch" position="relative" zIndex={0} mb={5}>
          {R.map(({ title, icon, text }) => {
            return (
              <Flex
                flex="1 1 auto"
                flexWrap={true}
                width={['100%', '33.33%']}
                background={colors.backgrounds.light}
                p={2}
                mr={[0, 2]}
              >
                <img
                  className={css({
                    marginTop: '0.5rem',
                    marginBottom: '1rem',
                    height: '2rem',
                  })}
                  src={icon}
                />
                <Box>
                  <H4 tag="h3">{title}</H4>
                  <SmallText>{text}</SmallText>
                </Box>
              </Flex>
            )
          }, pilots)}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default WhatKindOfPilot
