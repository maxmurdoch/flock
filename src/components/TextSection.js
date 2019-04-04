import React from 'react'
import {css} from '@emotion/core'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import BodyText from './BodyText'
import SmallText from './SmallText'

import yellowArrowCorner from '../images/yellow-arrow-corner.svg'
import greyArrow from '../images/grey-arrow.svg'

const TextSection = ({title, bigText, smallText}) => {
  return (
    <Flex
      pt={[3, 5]}
      pb={[3, 5]}
      justifyContent="center"
      css={css({
        background: `url(${yellowArrowCorner}), url(${greyArrow})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left'
      })}
    >
      <SiteContainer>
        <Flex flexWrap="wrap">
          <Box width={['100%', '50%', '33.33%']} mb={2}>
            <H2>{title}</H2>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box width={['100%', '100%', `${(100 / 12) * 7}%`]} mb={3}>
              <BodyText>{bigText}</BodyText>
            </Box>
            <Box width={['100%', '100%', '33.33%']}>
              <SmallText>{smallText}</SmallText>
            </Box>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default TextSection
