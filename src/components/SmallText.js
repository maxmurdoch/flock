import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import styled from 'react-emotion'
import {color, space, textAlign, fontWeight, style} from 'styled-system'
import {breakpoints} from '../constants/theme'

const textShadow = style({
  prop: 'textShadow',
  cssProperty: 'textShadow',
  key: 'shadows',
  numberToPx: false,
  getter: R.identity,
  alias: 'sh'
})

const StyledSmallText = styled.p`
font-family: 'Chivo';
  font-size: 14px;
  line-height: 20px; 

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 16px;
    line-height: 24px;
  }

  ${textShadow}
  ${space}
  ${fontWeight}
  ${textAlign}
  ${color}
`

const SmallText = ({children, fontWeight = 400, mb = 0, ...props}) => {
  return (
    <StyledSmallText fontWeight={fontWeight} mb={mb} {...props}>
      {children}
    </StyledSmallText>
  )
}

export default SmallText

SmallText.propTypes = {
  children: PropTypes.element,
  mb: PropTypes.number,
  fontWeight: PropTypes.number
}
