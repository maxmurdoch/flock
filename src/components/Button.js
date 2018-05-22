import React from 'react'
import styled from 'react-emotion'
import { background, space, color } from 'styled-system'

const StyledButton = styled.button`
  border: 0;
  font-weight: 700;
  ${background}
  ${space}
  ${color}
`

const Button = ({ children, pr = 2, pl = 2, pt = 1, pb = 1, ...props }) => {
  return (
    <StyledButton pr={pr} pl={pl} pt={pt} pb={pb} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
