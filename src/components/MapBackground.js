import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'
import map from '../images/map.jpg'
import {colors} from '../constants/theme'

const MapBackground = ({children}) => {
  return (
    <div
      css={css({
        overflow: 'hidden',
        position: 'relative',

        '&:before': {
          content: '\' \'',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          background: `${colors.backgrounds.dark} url(${map})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundAttachment: 'fixed',
          willChange: 'transform',
          zIndex: -1
        }
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
