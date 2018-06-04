import React, { Children } from 'react'
import styled from 'react-emotion'
import {
  fontSize,
  color,
  lineHeight,
  space,
  textAlign,
  fontWeight,
} from 'styled-system'

const StyledSmallText = styled.p`
  font-size: 16px;
  line-height: 24px; 
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
