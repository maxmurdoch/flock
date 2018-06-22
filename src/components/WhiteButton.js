import React from 'react'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const WhiteButton = ({children, Text = BodyText, ...props}) => {
  return (
    <Button background={colors.white} color={colors.black} {...props}>
      <Text fontWeight={700}>{children}</Text>
    </Button>
  )
}

export default WhiteButton
