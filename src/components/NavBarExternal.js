import * as React from 'react'
import Media from 'react-media'
import flock from '../images/icons/flock.svg'
import flockSmall from '../images/icons/flockSmall.svg'
import {css} from 'react-emotion'

const navigateToPage = url => {
  window.location.href = url
}

const NavBarExternal = ({ backIcon, backText, backUrl }) =>
  <div className={css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '55px',
    backgroundColor: '#FFDA00'
  })}>
    <div className={css({
      display: 'flex',
      justifyContent: 'spaceBetween',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1024px',
      height: '55px',
      margin: '0 auto',
      padding: '0 16px'
    })}>
      <Media query="(min-width: 768px)">
        {(matches) => matches
          ? <button className={css({
              display: 'none'
            })}></button>
          : <button className={css({
              appearance: 'none',
              display: 'inline-block',
              width: '40px',
              height: '40px',
              margin: 0,
              padding: 0,
              background: 'none',
              border: 'none',
              outline: 'none',
              textAlign: 'left',
              cursor: 'pointer'
            })} onClick={navigateToPage.bind({}, backUrl)}>
              <img src={backIcon} alt="Back Arrow" />
            </button>
        }
      </Media>
      <Media query="(min-width: 768px)">
        {(matches) => matches
          ? <div className={css({
              position: 'static',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flex: 1,
              top: 0,
              left: 0,
              width: '100%',
              height: '55px',
              pointerEvents: 'none'
            })}>
              <img className={css({
                marginBottom: 0,
                height: 'auto'
              })} src={flock} alt="Flock Logo" />
            </div>
          : <div className={css({
              position: 'absolute',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              top: 0,
              left: 0,
              width: '100%',
              height: '55px',
              pointerEvents: 'none'
            })}>
              <img src={flockSmall} alt="Flock Logo" />
            </div>
        }
      </Media>

      <div className={css({
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1
      })} onClick={navigateToPage.bind({}, backUrl)}>
        <a className={css({
          display: 'block',
          color: '#000',
          fontFamily: 'Chivo, sans-serif',
          fontSize: '12px',
          textDecoration: 'none',
          textTransform: 'uppercase'
        })} href={backUrl}>
          {backText}
        </a>
      </div>
    </div>
  </div>

export default NavBarExternal
