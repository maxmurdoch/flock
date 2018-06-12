import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import styled from 'react-emotion'
import {color, space, textAlign, style} from 'styled-system'
import {breakpoints} from '../constants/theme'

const textShadow = style({
  prop: 'textShadow',
  cssProperty: 'textShadow',
  key: 'shadows',
  numberToPx: false,
  getter: R.identity,
  alias: 'sh'
})

const StyledBodyText = styled.p`
  font-size: 18px;
  line-height: 26px; 

  @media (min-width: ${R.nth(0, breakpoints)}) {
    font-size: 24px;
    line-height: 34px;
  }

  ${textShadow}
  ${space}
  ${textAlign}
  ${color}
`

const BodyText = ({children, mb = 0, ...props}) => {
  return (
    <StyledBodyText mb={mb} {...props}>
      {children}
    </StyledBodyText>
  )
}

export default BodyText

BodyText.propTypes = {
  children: PropTypes.element,
  mb: PropTypes.number
}
