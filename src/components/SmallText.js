import React from 'react'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'

const SmallText = ({children, fontWeight = 400, mb = 0, ...props}) => {
  return (
    <Text
      fontWeight={fontWeight}
      mb={mb}
      customClassName={style.smallTextStyle}
      {...props}
    >
      {children}
    </Text>
  )
}

SmallText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  fontWeight: PropTypes.number
}

const smallTextStyle = css({
  fontFamily: 'Chivo',
  fontSize: 14,
  lineHeight: '20px',
  [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
    fontSize: 16,
    lineHeight: '24px'
  }
})

const style = {
  smallTextStyle
}

export {smallTextStyle}
export default SmallText
