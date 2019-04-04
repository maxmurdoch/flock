import React from 'react'
import * as R from 'ramda'
import {css} from '@emotion/core'
import {space} from '../constants/theme'

const Label = ({children, ...props}) => (
  <label
    css={css({
      fontSize: 14,
      lineHeight: '20px',
      marginBottom: R.nth(1, space),
      display: 'block'
    })}
    {...props}
  >
    {children}
  </label>
)

export default Label
