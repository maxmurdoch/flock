import React from 'react'
import {css} from '@emotion/core'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import remark from 'remark'
import remark2react from 'remark-react'

const SmallText = ({
  id,
  children,
  fontWeight = 400,
  css,
  mb = 0,
  ...props
}) => {
  if (typeof children === 'string') {
    return (
      <Text
        id={id}
        tag="div"
        fontWeight={fontWeight}
        mb={mb}
        css={[style.smallTextStyle, css]}
        {...props}
      >
        {
          remark()
            .use(remark2react)
            .processSync(children).contents
        }
      </Text>
    )
  } else {
    return (
      <Text
        id={id}
        fontWeight={fontWeight}
        mb={mb}
        css={[style.smallTextStyle, css]}
        {...props}
      >
        {children}
      </Text>
    )
  }
}

SmallText.propTypes = {
  children: PropTypes.node,
  css: PropTypes.string,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  fontWeight: PropTypes.number
}

const smallTextStyle = css({
  fontFamily: 'Chivo',
  fontSize: 14,
  lineHeight: '20px',

  '& p': {marginBottom: 10},
  '& p:last-of-type': {marginBottom: 0},

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
