import React from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import { color, space } from 'styled-system'
import { breakpoints } from '../constants/theme'

const StyledH3 = styled.h3`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 17px;
    text-transform: uppercase;
    line-height: 34px; 
  }

  ${color} ${space};
`

const H3 = ({ children, ...props }) => {
  return (
    <StyledH3 mb={1} {...props}>
      {children}
    </StyledH3>
  )
}

export default H3
