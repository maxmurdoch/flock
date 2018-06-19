import React from 'react'
import PropTypes from 'prop-types'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import {colors} from '../constants/theme'

const BigSectionLine = ({
  borderColor = colors.dark,
  backgroundColor = 'transparent',
  ...props
}) => {
  return (
    <Flex pb={[3, 5]} pt={[3, 5]} justifyContent="center" {...props}>
      <SiteContainer>
        <Flex background={backgroundColor}>
          <Box borderTop={`1px solid ${borderColor}`} width="100%" />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default BigSectionLine

BigSectionLine.propTypes = {
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string
}
