import React from 'react'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'

import Text from './Text'
import {breakpoints} from '../constants/theme'

const H4 = ({children, tag = 'h4', ...props}) => {
  return (
    <Text tag={tag} mb={1} className={style.text} {...props}>
      {children}
    </Text>
  )
}

const style = {
  text: css({
    fontFamily: '"ITC", sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '20px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  })
}

H4.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  tag: PropTypes.string
}

export default H4
