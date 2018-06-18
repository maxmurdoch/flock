import React from 'react'
import R from 'ramda'
import styled from 'react-emotion'
import {color, lineHeight, space, textAlign} from 'styled-system'
import {breakpoints} from '../constants/theme'

const StyledH2 = styled.h2`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  font-weight: 700;
  font-size: 17px;
  line-height: 34px;
  text-transform: uppercase;

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 36px;
    text-transform: none;
    line-height: 44px; 
  }

  ${space}
  ${lineHeight}
  ${textAlign}
  ${color}
`

const H2 = ({children, ...props}) => {
  return (
    <StyledH2 mb={2} lineHeight="1.3" {...props}>
      {children}
    </StyledH2>
  )
}

export default H2
