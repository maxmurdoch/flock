import React from 'react'
import R from 'ramda'
import { css } from 'emotion'
import { space } from '../constants/theme'

const SiteContainer = ({ children }) => {
  return (
    <div
      className={css({
        width: '100%',
        maxWidth: 1200,
        paddingLeft: R.nth(1, space),
        paddingRight: R.nth(1, space),
      })}
    >
      {children}
    </div>
  )
}

export default SiteContainer
