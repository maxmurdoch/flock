import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'react-emotion'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const HeroButton = ({children, color, to, external, ...props}) => {
  const clickHandler = () => {
    window.open(to, external ? '_blank' : '_self')
  }

  return (
    <Button
      className={css({
        cursor: 'pointer'
      })}
      background={color === 'yellow' ? colors.yellow : colors.dark}
      color={color === 'yellow' ? 'black' : 'white'}
      {...props}
    >
      <BodyText fontWeight={700} onClick={clickHandler}>{children}</BodyText>
    </Button>
  )
}

HeroButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'black']).isRequired,
  to: PropTypes.string,
  external: PropTypes.bool
}

export default HeroButton
