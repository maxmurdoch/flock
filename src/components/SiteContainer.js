import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from '@emotion/core'

import Box from './Box'
import {space} from '../constants/theme'

const SiteContainer = ({children, edgeToEdge = false, css: CSS}) => {
  return (
    <Box
      css={[
        css({
          width: '100%',
          maxWidth: 1200,
          paddingLeft: edgeToEdge ? 0 : R.nth(2, space),
          paddingRight: edgeToEdge ? 0 : R.nth(2, space)
        }),
        CSS
      ]}
    >
      {children}
    </Box>
  )
}

SiteContainer.propTypes = {
  children: PropTypes.node,
  edgeToEdge: PropTypes.bool,
  CSS: PropTypes.string
}

export default SiteContainer
