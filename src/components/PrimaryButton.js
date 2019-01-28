import React from 'react'
import {css} from 'react-emotion'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const PrimaryButton = ({children, ...props}) => {

  const clickHandler = () => {
    props.onClick()
    window.open(props.to, '_blank')
  }

  return (
    <Button
      className={css({
        cursor: 'pointer'
      })}
      background={colors.yellow}
      {...props}
    >
      <BodyText fontWeight={700} onClick={clickHandler}>{children}</BodyText>
    </Button>
  )
}

export default PrimaryButton
