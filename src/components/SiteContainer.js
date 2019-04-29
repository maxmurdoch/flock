import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from '@emotion/core'

import Box from './Box'
import {space} from '../constants/theme'

const SiteContainer = ({children, edgeToEdge = false, style}) => {
  return (
    <Box
      css={[
        css({
          width: '100%',
          maxWidth: 1200,
          paddingLeft: edgeToEdge ? 0 : R.nth(2, space),
          paddingRight: edgeToEdge ? 0 : R.nth(2, space)
        }),
        css(style)
      ]}
    >
      {children}
    </Box>
  )
}

SiteContainer.propTypes = {
  children: PropTypes.node,
  edgeToEdge: PropTypes.bool,
  style: PropTypes.object
}

export default SiteContainer
