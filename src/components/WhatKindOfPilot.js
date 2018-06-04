import React from 'react'
import Link from 'gatsby-link'
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
import SegmentLink from './SegmentLink'
import { colors, space } from '../constants/theme'

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
        <Flex
          alignItems="stretch"
          flexDirection={['column', 'row']}
          position="relative"
          zIndex={0}
          mb={5}
        >
          {R.map(({ title, icon, text, link }) => {
            const isLast = R.equals(R.prop('title', R.last(pilots)), title)
            return (
              <Box width={['100%', '33.33%']} mb={[2, 0]} mr={isLast ? 0 : 2}>
                <SegmentLink
                  title={title}
                  text={text}
                  icon={icon}
                  link={link}
                  isLast={isLast}
                />
              </Box>
            )
          }, pilots)}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default WhatKindOfPilot
