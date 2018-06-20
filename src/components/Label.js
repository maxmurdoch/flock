import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import {space} from '../constants/theme'

const Label = ({children, ...props}) => (
  <label
    className={css({
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
