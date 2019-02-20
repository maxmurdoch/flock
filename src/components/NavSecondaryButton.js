import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'react-emotion'

import {colors} from '../constants/theme'
import PAYFDroneIcon from '../images/icons/drone-white-icon.svg'
import FUDroneIcon from '../images/icons/double-drone-icon-white.svg'

const NavSecondaryButton = ({title, to, icon, flexGrow, ...props}) => {
  function clickHandler() {
    window.open(to, '_self')
  }
  return (
    <button
      className={css({
        cursor: 'pointer',
        appearance: 'none',
        display: 'inline-block',
        padding: '14px 16px',
        backgroundColor: colors.backgrounds.dark,
        '&:hover': {
          backgroundColor: '#1D1D1D'
        },
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        textAlign: 'left',
        color: 'white',
        flexGrow
      })}
      {...props}
      onClick={clickHandler}
    >
      <span
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        })}
      >
        <span
          className={css({
            fontFamily: 'Chivo, sans-serif',
            fontSize: '16px',
            flex: '1 1 auto',
            textAlign: 'left'
          })}
        >
          {title}
        </span>
        <img
          className={css({marginBottom: 0, height: 28})}
          src={icon && (icon === 'PAYF' ? PAYFDroneIcon : FUDroneIcon)}
        />
      </span>
    </button>
  )
}

NavSecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'black']).isRequired,
  to: PropTypes.string,
  external: PropTypes.bool,
  branch: PropTypes.bool,
  track: PropTypes.string
}

export default NavSecondaryButton
