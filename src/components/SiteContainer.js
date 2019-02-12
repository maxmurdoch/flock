import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css, cx} from 'emotion'

import Box from './Box'
import {space} from '../constants/theme'

const SiteContainer = ({children, edgeToEdge = false, className}) => {
  return (
    <Box
      className={cx(
        css({
          width: '100%',
          maxWidth: 1200,
          paddingLeft: edgeToEdge ? 0 : R.nth(2, space),
          paddingRight: edgeToEdge ? 0 : R.nth(2, space)
        }),
        className
      )}
    >
      {children}
    </Box>
  )
}

SiteContainer.propTypes = {
  children: PropTypes.node,
  edgeToEdge: PropTypes.bool,
  className: PropTypes.string
}

export default SiteContainer
