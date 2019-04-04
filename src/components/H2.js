import React from 'react'
import {css} from '@emotion/core'
import {injectGlobal} from 'emotion'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Text from './Text'
import {breakpoints, fontFamilies} from '../constants/theme'

const H2 = ({children, tag = 'h2', className, ...props}) => {
  return (
    <Text
      tag={tag}
      mb={1}
      css={[
        css`
          ${style.text};
        `,
        className
      ]}
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
    text-transform: uppercase;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      text-transform: none;
      font-size: 24px;
      line-height: 34px;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
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
