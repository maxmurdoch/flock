import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { fontSize, color, lineHeight, space, textAlign } from 'styled-system'

const StyledH2 = styled.h2`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px; 
  ${space}
  ${lineHeight}
  ${textAlign}
  ${color}
`

const H2 = ({ children, ...props }) => {
  return (
    <StyledH2 mb={2} lineHeight="1.3" {...props}>
      {children}
    </StyledH2>
  )
}

export default H2
