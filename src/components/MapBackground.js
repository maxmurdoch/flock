import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import map from '../images/map.png'
import {colors} from '../constants/theme'

const MapBackground = ({children}) => {
  return (
    <div
      className={css({
        background: `${colors.backgrounds.dark} url(${map})`,
        backgroundSize: 'auto 100vh',
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
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
}

export default MapBackground
