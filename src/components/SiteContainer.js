import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'emotion'

import Box from './Box'
import {space} from '../constants/theme'

const SiteContainer = ({children}) => {
  return (
    <Box
      className={css({
        width: '100%',
        maxWidth: 1200,
        paddingLeft: R.nth(2, space),
        paddingRight: R.nth(2, space)
      })}
    >
      {children}
    </Box>
  )
}

SiteContainer.propTypes = {
  children: PropTypes.node
}

export default SiteContainer
