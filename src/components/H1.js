import React from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import { color, space } from 'styled-system'
import { breakpoints } from '../constants/theme'

const StyledH1 = styled.h1`
  font-family: 'ITC', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 44px;

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 60px;
    line-height: 66px;
  }

  ${space}
  ${color}
`

const H1 = ({ children, ...props }) => (
  <StyledH1 mb={[0, 1]} {...props}>
    {children}
  </StyledH1>
)

export default H1
