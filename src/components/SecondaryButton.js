import React from 'react'
import {css} from 'react-emotion'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const SecondaryButton = ({children, Text = BodyText, ...props}) => {
  return (
    <Button
      className={css({
        cursor: 'pointer'
      })}
      background={colors.black}
      color="white"
      {...props}
    >
      <Text fontWeight={700}>{children}</Text>
    </Button>
  )
}

export default SecondaryButton
