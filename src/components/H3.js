import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import styled from 'react-emotion'
import {fontSize, color, space} from 'styled-system'
import {breakpoints} from '../constants/theme'

const H3 = ({children, tag = 'h3', ...props}) => {
  const Component = styled(tag)`
    font-family: 'ITC', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      font-size: 17px;
      text-transform: uppercase;
      line-height: 34px;
    }

    ${fontSize}
    ${color}
    ${space}
  `

  return (
    <Component mb={1} {...props}>
      {children}
    </Component>
  )
}

export default H3

H3.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  tag: PropTypes.string
}
