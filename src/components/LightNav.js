import React, { Component } from 'react'
import { Sticky } from 'react-sticky'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import WhiteButton from './WhiteButton'
import SecondaryButton from './SecondaryButton'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import blackLogo from '../images/logo-black.svg'
import blackDownArrow from '../images/icons/small-arrow-black.svg'
import whiteDownArrow from '../images/icons/small-down-arrow-white.svg'
import whiteLogo from '../images/logo-white.svg'
import Nav from './Nav'
import { colors } from '../constants/theme'

const LightNav = () => {
  return (
    <Nav
      textColor={({ isSticky }) => (isSticky ? colors.black : colors.white)}
      arrowImage={({ isSticky }) =>
        isSticky ? blackDownArrow : whiteDownArrow
      }
      Logo={({ isSticky }) => (
        <img
          className={css({ width: '6rem', margin: 0 })}
          src={isSticky ? blackLogo : whiteLogo}
        />
      )}
      DownloadButton={({ isSticky }) =>
        isSticky ? (
          <SecondaryButton
            onClick={() => console.log('clicked')}
            ml={3}
            Text={SmallText}
          >
            <ArrowText moveOnHover={false}>Download</ArrowText>
          </SecondaryButton>
        ) : (
          <WhiteButton onClick={() => console.log('clicked')} ml={3}>
            <SmallText>Download</SmallText>
          </WhiteButton>
        )
      }
    />
  )
}

export default LightNav
