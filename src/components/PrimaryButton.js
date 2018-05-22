import React from 'react'
import Button from './Button'
import BodyText from './BodyText'
import { colors } from '../constants/theme'

const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button background={colors.yellow} {...props}>
      <BodyText fontWeight="700">{children}</BodyText>
    </Button>
  )
}

export default PrimaryButton
