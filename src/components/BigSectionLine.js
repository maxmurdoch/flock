import React from 'react'

import Flex from './Flex'
import Box from './Box'
import { colors } from '../constants/theme'

const BigSectionLine = ({
  borderColor = colors.dark,
  backgroundColor = colors.backgrounds.white,
}) => {
  return (
    <Flex mb={5} mt={5} background={backgroundColor}>
      <Box borderTop={`1px solid ${borderColor}`} width="100%" />
    </Flex>
  )
}

export default BigSectionLine
