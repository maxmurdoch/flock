import React from 'react'
import {css, injectGlobal} from 'react-emotion'
import PropTypes from 'prop-types'
import R from 'ramda'

import Text from './Text'
import {breakpoints, fontFamilies} from '../constants/theme'

const H2 = ({children, tag = 'h2', ...props}) => {
  return (
    <Text
      tag={tag}
      mb={1}
      customClassName={css`
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
    font-size: 17px;
    line-height: 34px;
    text-transform: 'uppercase';

    @media (min-width: ${R.nth(0, breakpoints)}) {
      font-size: 36px;
      text-transform: 'none';
      line-height: 44px;
    }
    `
}

injectGlobal`
  h2 {
    ${style.text}
  }
`

H2.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string
}

export default H2
