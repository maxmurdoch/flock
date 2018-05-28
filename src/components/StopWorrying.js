import React from 'react'
import R from 'ramda'

import H2 from './H2'
import H3 from './H3'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'

const StopWorrying = ({ data }) => {
  const { title, description, reasons } = data

  return (
    <Flex justifyContent="center" pt={5} pb={5}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']}>
            <H2>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
          <Flex pt={4} pb={5} borderBottom="1px solid #000">
            {R.map(({ title, text }) => {
              return (
                <Box width={['100%', '33.33%']} mr={[0, 3]}>
                  <H3>{title}</H3>
                  <SmallText>{text}</SmallText>
                </Box>
              )
            }, reasons)}
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default StopWorrying
