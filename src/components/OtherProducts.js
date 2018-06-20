import React from 'react'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'
import SegmentLink from './SegmentLink'
import H2 from './H2'

const mapIndex = R.addIndex(R.map)

const OtherProducts = ({title, description, products}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']} mb={3}>
            <H2>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
          <Flex flexWrap={['wrap', 'wrap', 'nowrap']}>
            {mapIndex(({title, text, icon, link}, index) => {
              const isLast = R.equals(R.prop('title', R.last(products)), title)

              return (
                <Box
                  key={index}
                  mr={[0, 0, isLast ? 0 : 3]}
                  mb={[2, 2, 0]}
                  width={['100%', '100%', '50%']}
                >
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

export default OtherProducts
