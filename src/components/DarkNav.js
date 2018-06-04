import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import R from 'ramda'
import { Sticky } from 'react-sticky'
import debounce from 'debounce'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import blackLogo from '../images/logo-black.svg'
import SecondaryButton from './SecondaryButton'
import ArrowText from './ArrowText'
import SmallText from './SmallText'
import Nav from './Nav'

const DarkNav = () => {
  return (
    <Nav
      Logo={isSticky => (
        <img className={css({ width: '6rem', margin: 0 })} src={blackLogo} />
      )}
      DownloadButton={() => (
        <SecondaryButton
          onClick={() => console.log('clicked')}
          ml={3}
          Text={SmallText}
        >
          <ArrowText moveOnHover={false}>Download</ArrowText>
        </SecondaryButton>
      )}
    />
  )
}

export default DarkNav
