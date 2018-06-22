import React from 'react'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'

import Text from './Text'
import {breakpoints} from '../constants/theme'

const H3 = ({children, tag = 'h3', ...props}) => {
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
    fontSize: 16,
    lineHeight: '24px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 17,
      textTransform: 'uppercase',
      lineHeight: '34px'
    }
  })
}

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  tag: PropTypes.string
}

export default H3
