import React from 'react'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Box from './Box'
import Flex from './Flex'
import {colors} from '../constants/theme'

const PricingHero = ({textColor = colors.black, headerClassName, header}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={headerClassName}
      flex="1 1 auto"
      width="100%"
      height="66vh"
    >
      <SiteContainer>
        <Flex justifyContent="center" alignItems="center">
          <Box width={['100%', '50%']}>
            <H1 textAlign="center" color={textColor} mb={[2, 3]}>
              {header}
            </H1>
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default PricingHero