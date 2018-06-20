import React from 'react'
import Markdown from 'react-remarkable'
import R from 'ramda'
import styled from 'react-emotion'
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

  ${styledFontSize}
  ${styledFontWeight}
  ${color}
  ${styledLineHeight}
  ${space}
  ${textAlign}
  ${textShadow}
`
  return (
    <Component fontWeight={fontWeight} {...props}>
      <Markdown>{children}</Markdown>
    </Component>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  fontWeight: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  fontSize: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}

export default Text
