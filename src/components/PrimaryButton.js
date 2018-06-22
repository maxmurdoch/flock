import React from 'react'
import {css} from 'react-emotion'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const PrimaryButton = ({children, ...props}) => {
  return (
    <Button
      className={css({
        cursor: 'pointer'
      })}
      background={colors.yellow}
      {...props}
    >
      <BodyText fontWeight={700}>{children}</BodyText>
    </Button>
  )
}

export default PrimaryButton
