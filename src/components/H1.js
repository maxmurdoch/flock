import React from 'react'
import styled from 'react-emotion'
import { fontSize, color, space } from 'styled-system'

const StyledH1 = styled.h1`
  font-family: 'ITC', sans-serif;
  font-weight: 900;
  ${fontSize};
  ${space};
  ${color};
`

const H1 = ({ children, ...props }) => (
  <StyledH1 fontSize={[4, 5, 5]} mb={1} {...props}>
    {children}
  </StyledH1>
)

export default H1
