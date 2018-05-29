import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { fontSize, color, space } from 'styled-system'
import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'

const StyledH3 = styled.h3`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 34px;
  text-transform: uppercase;
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
