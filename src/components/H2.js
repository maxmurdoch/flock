import React from 'react'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'

import Text from './Text'
import {breakpoints} from '../constants/theme'

const H2 = ({children, tag = 'h2', ...props}) => {
  return (
    <Text tag={tag} mb={1} customClassName={style.text} {...props}>
      {children}
    </Text>
  )
}

const style = {
  text: css({
    fontFamily: '"ITC", sans-serif',
    fontWeight: 700,
    fontSize: 17,
    lineHeight: '34px',
    textTransform: 'uppercase',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 36,
      textTransform: 'none',
      lineHeight: '44px'
    }
  })
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  tag: PropTypes.string
}

export default H2
