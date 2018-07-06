import React from 'react'
import {css, cx} from 'react-emotion'
import Markdown from 'react-remarkable'
import R from 'ramda'
import styled from 'react-emotion'
import NewLineToBr from './NewLineToBr'
import PropTypes from 'prop-types'
import {
  fontSize as styledFontSize,
  fontWeight as styledFontWeight,
  color,
  lineHeight as styledLineHeight,
  space,
  textAlign,
  style
} from 'styled-system'

import {fontFamilies} from '../constants/theme'

const textShadow = style({
  prop: 'textShadow',
  cssProperty: 'textShadow',
  key: 'shadows',
  numberToPx: false,
  getter: R.identity,
  alias: 'sh'
})

const Text = ({tag = 'p', fontWeight = 300, children, ...props}) => {
  const Component = styled(tag)`
  margin: 0;
  line-height: 1.5;
  font-family: ${fontFamilies.chivo};
  p {
    margin-bottom: 0;
  }

  ${styledFontSize}
  ${styledFontWeight}
  ${color}
  ${styledLineHeight}
  ${space}
  ${textAlign}
  ${textShadow}
`
  return (
    <NewLineToBr Component={Component} fontWeight={fontWeight} {...props}>
      {children}
    </NewLineToBr>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
  fontWeight: PropTypes.number,
  markdown: PropTypes.bool,
  children: PropTypes.node,
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Text
