import React, { Children } from 'react'
import styled from 'react-emotion'
import { fontSize, color, lineHeight, space, textAlign } from 'styled-system'

const StyledSmallText = styled.p`
  font-size: 16px;
  line-height: 24px; 
  ${space}
  ${textAlign}
  ${color}
`

const SmallText = ({ children, mb = 0, ...props }) => {
  return (
    <StyledSmallText mb={mb} {...props}>
      {children}
    </StyledSmallText>
  )
}

export default SmallText
