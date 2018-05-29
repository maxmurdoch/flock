import React, { Children } from 'react'
import styled from 'react-emotion'
import { fontSize, color, lineHeight, space, textAlign } from 'styled-system'

const StyledBodyText = styled.p`
  font-size: 24px;
  line-height: 34px; 
  ${space}
  ${textAlign}
  ${color}
`

const BodyText = ({ children, mb = 0, ...props }) => {
  return (
    <StyledBodyText mb={mb} {...props}>
      {children}
    </StyledBodyText>
  )
}

export default BodyText
