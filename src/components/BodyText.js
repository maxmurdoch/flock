import React, { Children } from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import { fontSize, color, lineHeight, space, textAlign } from 'styled-system'
import { breakpoints } from '../constants/theme'

const StyledBodyText = styled.p`
  font-size: 18px;
  line-height: 26px; 

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 24px;
    line-height: 34px;
  }

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
