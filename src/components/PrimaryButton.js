import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'

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
  border,
  flexGrow,
  ...props
}) => {
  function clickHandler() {
    if (download) downloadClickHandler()
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

    const link = branch
      ? `${to}?anonymous_id=${analytics.user().anonymousId()}`
      : to
    window.open(link, external ? '_blank' : '_self')
  }

  const {backgroundColor, textColor, arrowColor} = colorGenerator(color)

  return (
    <button
      css={css({
        cursor: 'pointer',
        appearance: 'none',
        display: 'inline-block',
        padding: '18px 16px',
        border: border ? '2px solid black' : 'none',
        backgroundColor,
        outline: 'none',
        textDecoration: 'none',
        textAlign: 'left',
        color: textColor,
        marginRight: mr,
        marginBottom: mb,
        flexGrow
      })}
      {...props}
      onClick={clickHandler}
    >
      <span
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        })}
      >
        <span
          css={css({
            fontFamily: 'ITC, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            flex: '1 1 auto',
            textAlign: 'left',
            lineHeight: 1.1
          })}
        >
          {title}
        </span>
        <img
          css={css({marginLeft: 24, marginBottom: 0})}
          src={arrowColor === 'black' ? BlackArrow : WhiteArrow}
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

function colorGenerator(colorCode) {
  const colorScheme = {}
  switch (colorCode) {
    case 'yellow':
      colorScheme.backgroundColor = colors.yellow
      colorScheme.textColor = colors.dark
      colorScheme.arrowColor = 'black'
      break
    case 'white':
      colorScheme.backgroundColor = colors.white
      colorScheme.textColor = colors.dark
      colorScheme.arrowColor = 'black'
      break
    case 'black':
    default:
      colorScheme.backgroundColor = colors.dark
      colorScheme.textColor = colors.white
      colorScheme.arrowColor = 'white'
  }
  return colorScheme
}

export default NavButton
