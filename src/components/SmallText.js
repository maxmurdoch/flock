import React from 'react'
import {css, cx} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import remark from 'remark'
import remark2react from 'remark-react'

const SmallText = ({
  children,
  fontWeight = 400,
  className,
  mb = 0,
  ...props
}) => {
  console.log(typeof children)

  if (typeof(children) === 'string') {
    return (
      <Text
        tag="div"
        fontWeight={fontWeight}
        mb={mb}
        className={cx(style.smallTextStyle, className)}
        {...props}
      >
        {remark().use(remark2react).processSync(children).contents}
      </Text>
    )
  } else {
    return(
      <Text
        fontWeight={fontWeight}
        mb={mb}
        className={cx(style.smallTextStyle, className)}
        {...props}
      >
        {children}
      </Text>
    )
  }
}

SmallText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  fontWeight: PropTypes.number
}

const smallTextStyle = css({
  fontFamily: 'Chivo',
  fontSize: 14,
  lineHeight: '20px',

  [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
    fontSize: 15,
    lineHeight: '20px'
  },

  [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
    fontSize: 16,
    lineHeight: '24px'
  }
})

const style = {
  smallTextStyle
}

export {smallTextStyle}
export default SmallText
