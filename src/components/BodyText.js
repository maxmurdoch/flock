import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import {css, cx} from 'emotion'
import remark from 'remark'
import remark2react from 'remark-react'

const BodyText = ({children, mb = 0, className,...props}) => {
  console.log(className)
  if (typeof children === 'string') {
    return (
      <Text
        tag="div"
        mb={mb}
        className={cx(style.text, className)}
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
        mb={mb}
        className={cx(style.text, className)}
        {...props}
      >
        {' '}
        {children}{' '}
      </Text>
    )
  }
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
      fontSize: 20,
      lineHeight: '28px'
    }
  })
}

BodyText.propTypes = {
  children: PropTypes.node,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}

export default BodyText
