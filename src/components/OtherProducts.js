import React from 'react'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'
import SegmentLink from './SegmentLink'
import H2 from './H2'

const OtherSegments = ({ title, description, products }) => {
  return (
    <Flex justifyContent="center" mb={5}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width="50%" mb={3}>
            <H2>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
          <Flex>
            {R.map(({ title, text, icon, link }) => {
              const isLast = R.equals(R.prop('title', R.last(products)), title)

              return (
                <Box mr={isLast ? 0 : 3} width="50%">
                  <SegmentLink
                    title={title}
                    text={text}
                    icon={icon}
                    link={link}
                  />
                </Box>
              )
            }, products)}
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default OtherSegments
