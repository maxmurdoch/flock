import * as React from 'react'
import Media from 'react-media'
import flock from '../images/icons/flock.svg'
import flockSmall from '../images/icons/flockSmall.svg'
import {css} from 'react-emotion'

const NavBarExternal = ({ backIcon, backText, backUrl }) => {
  return (<div className={css(styles.wrapper)}>
    <div className={css(styles.container)}>
      <Media query="(min-width: 768px)">
        {(matches) => matches
          ? <button className={css(styles.hidden)}></button>
          : <a className={css(styles.smallLink)} href={backUrl}>
              <img src={backIcon} alt="Back Arrow" />
            </a>
        }
      </Media>
      <Media query="(min-width: 768px)">
        {(matches) => matches
          ? <div className={css(styles.largeImageWrapper)}>
              <img className={css(styles.largeImage)} src={flock} alt="Flock Logo" />
            </div>
          : <div className={css(styles.smallImageWrapper)}>
              <img src={flockSmall} alt="Flock Logo" />
            </div>
        }
      </Media>

      <Media query="(min-width: 768px)">
        {(matches) => matches
          ? <div className={css(styles.linkTextWrapper)}>
              <a className={css(styles.linkText)} href={backUrl}>
                <img className={css(styles.linkImage)} src={backIcon} alt="Back Arrow" />
                {backText}
              </a>
            </div>
          : null
        }
      </Media>
    </div>
  </div>)
}

const styles = {
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '55px',
    backgroundColor: 'white'
  },
  container: {
    display: 'flex',
    justifyContent: 'spaceBetween',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1024px',
    height: '55px',
    margin: '0 auto',
    padding: '0 16px'
  },
  hidden: {
    display: 'none'
  },
  smallLink: {
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
    cursor: 'pointer',
    lineHeight: '85px',
    zIndex: 1000
  },
  largeImageWrapper: {
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
  },
  largeImage: {
    marginBottom: 0,
    height: 'auto'
  },
  smallImageWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    top: 10,
    left: 0,
    width: '100%',
    height: '55px',
    pointerEvents: 'none'
  },
  linkTextWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1
  },
  linkText: {
    display: 'block',
    color: '#000',
    fontFamily: 'Chivo, sans-serif',
    fontSize: '12px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    zIndex: 1000
  },
  linkImage: {
    margin: 'auto',
    paddingRight: '10px'
  }
}

export default NavBarExternal
