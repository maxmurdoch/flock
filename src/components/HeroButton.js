import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'react-emotion'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const HeroButton = ({children, color, to, external, branch, track, ...props}) => {
  function clickHandler (){
    if (track !== '') {
      analytics.track(track)
    }

    if (to.indexOf('#') === 0) {
      window.scrollTo({
        top: document.querySelector(to).offsetTop,
        behavior: 'smooth'
      })

      return
    }

    const link = branch ? `${to}?anonymous_id=${analytics.user().anonymousId()}` : to
    window.open(link, external ? '_blank' : '_self')
  }
  return (
    <Button
      className={css({
        cursor: 'pointer'
      })}
      background={color === 'yellow' ? colors.yellow : colors.dark}
      color={color === 'yellow' ? 'black' : 'white'}
      {...props}
       onClick={clickHandler}
    >
      <BodyText fontWeight={700}>{children}</BodyText>
    </Button>
  )
}

HeroButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'black']).isRequired,
  to: PropTypes.string,
  external: PropTypes.bool,
  branch: PropTypes.bool,
  track: PropTypes.string
}

export default HeroButton
