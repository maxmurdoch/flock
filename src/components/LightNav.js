import React, { Component } from 'react'
import { Sticky } from 'react-sticky'
import debounce from 'debounce'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import SiteContainer from './SiteContainer'
import whiteLogo from '../images/logo-white.svg'
import blackLogo from '../images/logo-black.svg'
import SmallText from './SmallText'
import Flex from '../components/Flex'
import Box from '../components/Box'
import WhiteButton from '../components/WhiteButton'
import SecondaryButton from '../components/SecondaryButton'
import { colors } from '../constants/theme'
import { active } from 'styled-system'

const Nav = ({ siteTitle }) => {
  return (
    <Sticky disableCompensation={true}>
      {({
        style,
        isSticky,
        wasSticky,
        distanceFromTop,
        distanceFromBottom,
        calculatedHeight,
      }) => {
        const activateStickyStyle = distanceFromTop < -50
        const activeLinkStyle = {
          borderBottom: `4px solid ${
            activateStickyStyle ? colors.white : colors.yellow
          }`,
        }
        const linkClass = css({
          margin: '0 0.5rem 0',
          padding: '0 1rem 0.5rem',
          color: activateStickyStyle ? colors.black : colors.white,
          textDecoration: 'none',
        })
        const navClass = css({
          display: 'flex',
          alignItems: 'baseline',
        })

        return (
          <header
            style={style}
            className={css({
              display: 'flex',
              position: 'fixed',
              width: '100%',
              justifyContent: 'center',
              zIndex: 1,
              transition:
                'background-color 200ms ease-in-out, borderBottom 200ms ease-in-out',
              backgroundColor: activateStickyStyle
                ? colors.yellow
                : 'transparent',
            })}
          >
            <SiteContainer>
              <Flex
                className={css({
                  display: 'flex',
                  height: '5rem',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <Link to={'/'}>
                  <img
                    className={css({ width: '6rem', margin: 0 })}
                    src={activateStickyStyle ? blackLogo : whiteLogo}
                  />
                </Link>
                <nav className={navClass}>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    exact={true}
                    to="/"
                  >
                    <SmallText>Home</SmallText>
                  </Link>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    to="/products"
                  >
                    <SmallText>Products</SmallText>
                  </Link>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    to="/support"
                  >
                    <SmallText>Support</SmallText>
                  </Link>
                  {activateStickyStyle ? (
                    <SecondaryButton
                      onClick={() => console.log('clicked')}
                      ml={3}
                    >
                      <SmallText>Download</SmallText>
                    </SecondaryButton>
                  ) : (
                    <WhiteButton onClick={() => console.log('clicked')} ml={3}>
                      <SmallText>Download</SmallText>
                    </WhiteButton>
                  )}
                </nav>
              </Flex>
            </SiteContainer>
          </header>
        )
      }}
    </Sticky>
  )
}

export default Nav
