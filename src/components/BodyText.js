import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import {css} from '@emotion/core'
import remark from 'remark'
import remark2react from 'remark-react'

const BodyText = ({children, mb = 0, css,...props}) => {
  if (typeof children === 'string') {
    return (
      <Text
        tag="div"
        mb={mb}
        css={[style.text, css]}
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
        css={[style.text, css]}
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

    '& p': {
      marginBottom: 15
    },

    [`@media (min-width: ${breakpoints[0]})`]: {
      fontSize: 20,
      lineHeight: '28px'
    },

    [`@media (min-width: ${breakpoints[1]})`]: {
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
