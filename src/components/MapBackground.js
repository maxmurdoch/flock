import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import map from '../images/map.jpg'
import {colors} from '../constants/theme'

const MapBackground = ({children}) => {
  return (
    <div
      className={css({
        background: `${colors.backgrounds.dark} url(${map})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundAttachment: 'fixed'
      })}
    >
      {children}
    </div>
  )
}

MapBackground.propTypes = {
  children: PropTypes.node
}

export default MapBackground
