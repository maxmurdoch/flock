import React from 'react'
import R from 'ramda'
import {css} from 'emotion'

import Box from './Box'
import {space, breakpoints} from '../constants/theme'

const SiteContainer = ({children}) => {
  return (
    <Box
      className={css({
        width: '100%',
        maxWidth: 1200,
        paddingLeft: R.nth(2, space),
        paddingRight: R.nth(2, space),
        [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
          paddingLeft: R.nth(1, space),
          paddingRight: R.nth(1, space)
        }
      })}
    >
      {children}
    </Box>
  )
}

export default SiteContainer
