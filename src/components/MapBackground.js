import React from 'react'
import {css} from 'emotion'
import map from '../images/map.png'
import {colors} from '../constants/theme'

const MapBackground = ({children}) => {
  return (
    <div
      className={css({
        background: `${colors.backgrounds.dark} url(${map})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      })}
    >
      {children}
    </div>
  )
}

export default MapBackground
