import React from 'react'
import PropTypes from 'prop-types'
import {css} from '@emotion/core'

import {colors} from '../constants/theme'
import ArrowIcon from '../images/icons/arrow-head.svg'

const NavPrimaryButton = ({title, to, flexGrow, mb, hasIcon, ...props}) => {
  function clickHandler() {
    window.open(to, '_self')
  }
  return (
    <button
      css={css({
        cursor: 'pointer',
        appearance: 'none',
        display: 'inline-block',
        padding: '14px 16px',
        backgroundColor: colors.dark,
        border: 'none',
        outline: 'none',
        textDecoration: 'none',
        textAlign: 'left',
        color: 'white',
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
            textAlign: 'left'
          })}
        >
          {title}
        </span>
        <img
          css={css({marginLeft: 5, marginBottom: 0})}
          src={hasIcon && ArrowIcon}
        />
      </span>
    </button>
  )
}

NavPrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['yellow', 'black']).isRequired,
  to: PropTypes.string,
  external: PropTypes.bool,
  branch: PropTypes.bool,
  track: PropTypes.string
}

export default NavPrimaryButton
