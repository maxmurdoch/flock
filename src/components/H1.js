import React from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import { fontSize, color, space } from 'styled-system'
import { breakpoints } from '../constants/theme'

const StyledH1 = styled.h1`
  font-family: 'ITC', sans-serif;
  font-weight: 900;
  line-height: 44px;

  @media (min-width: ${R.nth(0, breakpoints)}) {
    line-height: 66px;
  }

  ${space}
  ${color}
  ${fontSize}
`

const H1 = ({ children, fontSize = [4, 5], ...props }) => (
  <StyledH1 mb={[0, 1]} fontSize={fontSize} {...props}>
    {children}
  </StyledH1>
)

export default H1
