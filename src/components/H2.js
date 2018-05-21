import React from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import { fontSize, color } from 'styled-system'
import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'

injectGlobal`
@font-face {
  font-family: 'ITC';
  font-style: normal;
  font-weight: 700;
  src: url(${itc}) format('woff');
}
`

const H1 = styled.h2`
  font-family: 'ITC', sans-serif;
  font-weight: 700;
  ${fontSize};
  ${color};
`

export default H1
