import React from 'react'
import {css, injectGlobal} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'

import Text from './Text'
import {breakpoints, fontFamilies} from '../constants/theme'

const H1 = ({children, tag = 'h1', ...props}) => {
  return (
    <Text
      tag={tag}
      mb={1}
      className={css`
        ${style.text};
      `}
      {...props}
    >
      {children}
    </Text>
  )
}

const style = {
  text: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      font-size: 44px;
      line-height: 50px;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 60px;
      line-height: 66px;
    }
  `
}

injectGlobal`
h1 {
  ${style.text}
}
`

H1.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string
}

export default H1
