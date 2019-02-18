import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'react-emotion'

import {downloadClickHandler} from '../utils/trackDownload'
import {colors} from '../constants/theme'
import BlackArrow from '../images/icons/arrow-black.svg'
import WhiteArrow from '../images/icons/arrow-white.svg'

const NavButton = ({
  title,
  download,
  color,
  to,
  external,
  branch,
  track,
  mb,
  mr,
  flexGrow,
  ...props
}) => {
  function clickHandler() {
    window.open(link, '_self')
  }
  return (
    <button
      className={css({
        cursor: 'pointer',
        appearance: 'none',
        display: 'inline-block',
        minHeight: '54px',
        padding: '14px 16px',
        backgroundColor: color === 'yellow' ? colors.yellow : colors.dark,
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        textAlign: 'left',
        color: color === 'yellow' ? 'black' : 'white',
        marginRight: mr,
        marginBottom: mb,
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
            fontFamily: 'ITC, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            flex: '1 1 auto',
            textAlign: 'left'
          })}
        >
          {title}
        </span>
        <img
          className={css({ marginBottom: 0})}
          src={color === 'yellow' ? BlackArrow : WhiteArrow}
        />
      </span>
    </button>
  )
}

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'black']).isRequired,
  to: PropTypes.string,
  external: PropTypes.bool,
  branch: PropTypes.bool,
  track: PropTypes.string
}

export default NavButton
