import React from 'react'
import Button from './Button'
import BodyText from './BodyText'
import { colors } from '../constants/theme'

const SecondaryButton = ({ children, ...props }) => {
  return (
    <Button background={colors.black} color="white" {...props}>
      <BodyText fontWeight="700">{children}</BodyText>
    </Button>
  )
}

export default SecondaryButton
