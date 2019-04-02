import React from 'react'
import * as R from 'ramda'
import {css} from 'emotion'

import BodyText from './BodyText'
import SmallText from './SmallText'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import H2 from './H2'
import tick from '../images/icons/icons-tick.svg'

const mapIndex = R.addIndex(R.map)

const TickGrid = ({list}) => {
  return (
    <Flex width="100%" flexWrap={true}>
      {mapIndex(({text}, index) => {
        return (
          <Box width={['100%', '33.33%']} display="flex" pb={4} key={index}>
            <img className={css({marginBottom: 0})} src={tick} />
            <SmallText pl={2}>{text}</SmallText>
          </Box>
        )
      }, list)}
    </Flex>
  )
}

const WhatFlockCovers = ({data}) => {
  const {title, description, listOfWhatFlockCovers} = data

  return (
    <Flex justifyContent="center" mt={5}>
      <SiteContainer>
        <Flex>
          <Box width={['100%', '50%']}>
            <H2>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
        </Flex>
        <Flex mt={4}>
          <TickGrid list={listOfWhatFlockCovers} />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default WhatFlockCovers
