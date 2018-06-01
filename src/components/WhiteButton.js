import React from 'react'
import Button from './Button'
import BodyText from './BodyText'
import { colors } from '../constants/theme'

const WhiteButton = ({ children, ...props }) => {
  return (
    <Button background={colors.white} color={colors.black} {...props}>
      <BodyText fontWeight="700">{children}</BodyText>
    </Button>
  )
}

export default WhiteButton
