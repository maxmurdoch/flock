import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { fontSize, color, space } from 'styled-system'
import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'

const StyledH3 = styled.h3`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  ${fontSize}
  ${color}
  ${space}
`

const H3 = ({ children, ...props }) => {
  return (
    <StyledH3 mb={1} fontSize={[2, 2, 2]} {...props}>
      {children}
    </StyledH3>
  )
}

export default H3
