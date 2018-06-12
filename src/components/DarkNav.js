import React from 'react'
import {css} from 'react-emotion'

import blackLogo from '../images/logo-black.svg'
import SecondaryButton from './SecondaryButton'
import ArrowText from './ArrowText'
import SmallText from './SmallText'
import Nav from './Nav'

const DarkNav = () => {
  return (
    <Nav
      Logo={() => (
        <img className={css({width: '6rem', margin: 0})} src={blackLogo} />
      )}
      DownloadButton={() => (
        <SecondaryButton
          onClick={() => console.log('clicked')}
          Text={SmallText}
        >
          <ArrowText moveOnHover={false}>Download</ArrowText>
        </SecondaryButton>
      )}
    />
  )
}

export default DarkNav
