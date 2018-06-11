import React, { Children } from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import {
  fontSize,
  color,
  lineHeight,
  space,
  textAlign,
  fontWeight,
} from 'styled-system'
import { breakpoints } from '../constants/theme'

const StyledSmallText = styled.p`
font-family: 'Chivo';
  font-size: 14px;
  line-height: 20px; 

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 16px;
    line-height: 24px;
  }

  ${space}
  ${fontWeight}
  ${textAlign}
  ${color}
`

const SmallText = ({ children, fontWeight = 400, mb = 0, ...props }) => {
  return (
    <StyledSmallText fontWeight={fontWeight} mb={mb} {...props}>
      {children}
    </StyledSmallText>
  )
}

export default SmallText
