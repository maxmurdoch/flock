import React from 'react'
import R from 'ramda'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import PropTypes from 'prop-types'

import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'
import chivo from '../fonts/chivo/Chivo-Regular.woff2'

import {
  fontSize as styledFontSize,
  fontWeight as styledFontWeight,
  color,
  lineHeight as styledLineHeight,
  space,
  textAlign,
  style,
} from 'styled-system'

injectGlobal`
::selection {
  backgroundColor: 'blue',
  color: 'white'
}
`

injectGlobal`
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

injectGlobal`
* {
  font-family: 'Chivo';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
@font-face {
  font-family: 'ITC';
  font-style: normal;
  font-weight: 700;
  src: url(${itc}) format('woff');
}
@font-face {
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  src: url(${chivo}) format('woff2');
}
`
const textShadow = style({
  prop: 'shadow',
  cssProperty: 'textShadow',
  key: 'shadows',
  numberToPx: false,
  getter: R.identity,
  alias: 'sh',
})

const Text = ({ tag = 'p', fontWeight = 300, children, ...props }) => {
  const Component = styled(tag)`
  margin: 0;
  line-height: 1.5;
  ${styledFontSize}
  ${styledFontWeight}
  ${color}
  ${styledLineHeight}
  ${space}
  ${textAlign}
`
  return (
    <Component fontWeight={fontWeight} {...props}>
      {children}
    </Component>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]),
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export default Text
