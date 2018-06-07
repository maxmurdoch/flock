import React from 'react'
import R from 'ramda'

import H2 from './H2'
import Flex from './Flex'
import Box from './Box'
import BodyText from './BodyText'
import SiteContainer from './SiteContainer'
import SegmentLink from './SegmentLink'

const mapIndex = R.addIndex(R.map)

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
          {mapIndex(({ title, icon, text, link }, index) => {
            const isLast = R.equals(R.prop('title', R.last(pilots)), title)
            return (
              <Box
                width={['100%', '33.33%']}
                mb={[2, 0]}
                mr={isLast ? 0 : 2}
                key={index}
              >
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
