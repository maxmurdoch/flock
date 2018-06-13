import React from 'react'
import styled from 'react-emotion'
import {fontSize, color, space} from 'styled-system'

const H4 = ({children, tag = 'h4', ...props}) => {
  const Component = styled(tag)`
    font-family: 'ITC', sans-serif;
    font-weight: 700;
    ${fontSize}
    ${color}
    ${space}
  `

  return (
    <Component mb={1} fontSize={[2, 2, 2]} {...props}>
      {children}
    </Component>
  )
}

export default H4
