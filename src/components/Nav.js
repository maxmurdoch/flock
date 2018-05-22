import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import { Sticky } from 'react-sticky'

import SiteContainer from './SiteContainer'
import blackLogo from '../images/logo-black.svg'
import SmallText from './SmallText'
import Flex from '../components/Flex'
import Box from '../components/Box'
import SecondaryButton from '../components/SecondaryButton'
import { colors } from '../constants/theme'
import { active } from 'styled-system'

const Nav = ({ siteTitle }) => {
  const linkClass = css({
    margin: '0 0.5rem 0',
    padding: '0 1rem 0.5rem',
    color: 'initial',
    textDecoration: 'none',
  })
  const navClass = css({
    display: 'flex',
    alignItems: 'baseline',
  })

  return (
    <Sticky>
      {({ isSticky, style, distanceFromTop }) => {
        const activateStickyStyle = distanceFromTop < -50
        const activeLinkStyle = {
          borderBottom: `4px solid ${
            activateStickyStyle ? colors.white : colors.yellow
          }`,
        }

        return (
          <header
            style={style}
            className={css({
              display: 'flex',
              justifyContent: 'center',
              zIndex: 1,
              transition:
                'background-color 200ms ease-in-out, borderBottom 200ms ease-in-out',
              backgroundColor: activateStickyStyle
                ? colors.yellow
                : colors.backgrounds.light,
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
                <img
                  className={css({ width: '6rem', margin: 0 })}
                  src={blackLogo}
                />
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
                    exact={true}
                    to="/products"
                  >
                    <SmallText>Products</SmallText>
                  </Link>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    exact={true}
                    to="/support"
                  >
                    <SmallText>Support</SmallText>
                  </Link>
                  <SecondaryButton
                    onClick={() => console.log('clicked')}
                    ml={3}
                  >
                    <SmallText>Download</SmallText>
                  </SecondaryButton>
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
