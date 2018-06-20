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

const smallTextStyle = `
font-family: 'Chivo';
  font-size: 14px;
  line-height: 20px; 

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 16px;
    line-height: 24px;
  }

`

const StyledSmallText = styled.p`
  ${smallTextStyle}

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

export {smallTextStyle}
export default SmallText

SmallText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  fontWeight: PropTypes.number
}
