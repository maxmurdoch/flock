// @flow strict

import * as React from 'react'
import {css} from 'react-emotion'
import Media from 'react-media'

const TopHalfWhite = ({ title, subTitle }) =>
  <div
    className={css({
      display: 'flex',
      justifyContent: 'center',
      minHeight: '50vh'
    })}
  >
    <Media query="(min-width: 1024px)">
      {(matches) => matches
        ? <div className={css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '1024px',
            minHeight: '40vh',
            marginTop: '40px'
          })}>
            <div className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '16px'
            })}>
              <h2 className={css({
                marginBottom: '16px',
                fontFamily: 'ITC, sans-serif',
                fontSize: '24px',
                fontWeight: 700
              })}>{title}</h2>
              <p className={css({
                marginBottom: '16px',
                maxWidth: '450px',
                fontFamily: 'Chivo, sans-serif',
                fontSize: '14px',
                fontWeight: 550
              })}>{subTitle}</p>
            </div>
          </div>
        : <div className={css({
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '40vh',
            marginTop: '40px'
          })}>
            <div className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
              padding: '16px'
            })}>
              <h2 className={css({
                marginBottom: '16px',
                fontFamily: 'ITC, sans-serif',
                fontSize: '24px',
                fontWeight: 700
              })}>{title}</h2>
              <p className={css({
                marginBottom: '16px',
                fontFamily: 'Chivo, sans-serif',
                fontSize: '14px',
                maxWidth: '450px',
                fontWeight: 550
              })}>{subTitle}</p>
            </div>
          </div>
        }
      </Media>
    </div>

export default TopHalfWhite
