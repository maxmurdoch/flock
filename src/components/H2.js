import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { fontSize, color, lineHeight, space } from 'styled-system'
import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'

injectGlobal`
@font-face {
  font-family: 'ITC';
  font-style: normal;
  font-weight: 700;
  src: url(${itc}) format('woff');
}
`

const StyledH2 = styled.h2`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  ${fontSize}
  ${space}
  ${lineHeight}
  ${color}
`

const H2 = ({ children, ...props }) => {
  return (
    <StyledH2 fontSize={[3, 4, 5]} lineHeight="1.3" {...props}>
      {children}
    </StyledH2>
  )
}

export default H2
