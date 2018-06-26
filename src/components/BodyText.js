import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import {css} from 'emotion'

const BodyText = ({children, mb = 0, ...props}) => {
  return (
    <Text mb={mb} customClassName={style.text} {...props}>
      {children}
    </Text>
  )
}

const style = {
  text: css({
    fontSize: 18,
    lineHeight: '26px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 20,
      lineHeight: '28px'
    },

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      fontSize: 24,
      lineHeight: '34px'
    }
  })
}

BodyText.propTypes = {
  children: PropTypes.node,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}

export default BodyText
