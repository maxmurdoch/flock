import React from 'react'
import {css} from '@emotion/core'

const Collapse = ({isOpen, children}) => (
  <div
    id="collapse"
    css={css({
      position: 'relative',
      width: '100%',
      height: isOpen ? 'calc(100vh - 63px)' : '0',
      transformOrigin: '50% 0',
      transition: 'transform 250ms ease-out, opacity 250ms ease-out',
      pointerEvents: isOpen ? 'default' : 'none',
      opacity: isOpen ? 1 : 0,
      backgroundColor: 'rgba(54,54,54,1)',

      '&::after': {
        content: '\'\'',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 150,
        backgroundImage:
          'linear-gradient(to bottom, rgba(54, 54, 54, 0.3), rgba(54,54,54,1))'
      }
    })}
  >
    <div
      css={css({
        width: '100%',
        height: '100%',
        overflowY: 'scroll'
      })}
    >
      {children}
    </div>
  </div>
)

export default Collapse
