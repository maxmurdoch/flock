// @flow strict

import * as React from 'react'
import {css} from '@emotion/core'
import Media from 'react-media'

const TopHalfWhite = ({ title, subTitle }) =>
  <div
    css={css({
      display: 'flex',
      justifyContent: 'center',
      minHeight: '50vh',
      backgroundColor: '#fff'
    })}
  >
    <Media query="(min-width: 1024px)">
      {(matches) => matches
        ? <div css={css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '1024px',
            minHeight: '40vh',
            marginTop: '40px'
          })}>
            <div css={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '16px'
            })}>
              <h2 css={css({
                marginBottom: '16px',
                maxWidth: '400px',
                fontFamily: 'ITC, sans-serif',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: 1.3
              })}>{title}</h2>
              <p css={css({
                marginBottom: '16px',
                maxWidth: '400px',
                fontFamily: 'Chivo, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: 1.3
              })}>{subTitle}</p>
            </div>
          </div>
        : <div css={css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '40vh',
            marginTop: '40px'
          })}>
            <div css={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '16px'
            })}>
              <h2 css={css({
                marginBottom: '16px',
                fontFamily: 'ITC, sans-serif',
                fontSize: '24px',
                maxWidth: '400px',
                fontWeight: 700,
                lineHeight: 1.3
              })}>{title}</h2>
              <p css={css({
                marginBottom: '16px',
                fontFamily: 'Chivo, sans-serif',
                fontSize: '14px',
                maxWidth: '400px',
                fontWeight: 400,
                lineHeight: 1.3
              })}>{subTitle}</p>
            </div>
          </div>
        }
      </Media>
    </div>

export default TopHalfWhite
