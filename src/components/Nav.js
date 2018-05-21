import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import { Sticky } from 'react-sticky'

import SiteContainer from './SiteContainer'
import blackLogo from '../images/logo-black.svg'
import Flex from '../components/Flex'
import Box from '../components/Box'
import { colors } from '../constants/theme'
import { active } from 'styled-system'

const Nav = ({ siteTitle }) => {
  const linkClass = css({
    margin: '0 1rem 0',
    padding: '0 1rem 0.5rem',
    color: 'initial',
    textDecoration: 'none',
  })

  return (
    <Sticky>
      {({ isSticky, style, distanceFromTop }) => {
        const activateStickyStyle = distanceFromTop < -50
        const activeLinkStyle = {
          borderBottom: `4px solid ${
            activateStickyStyle ? colors.black : colors.yellow
          }`,
        }

        return (
          <header
            style={style}
            className={css({
              display: 'flex',
              justifyContent: 'center',
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
                <nav>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    exact={true}
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    exact={true}
                    to="/products"
                  >
                    Products
                  </Link>
                  <Link
                    activeStyle={activeLinkStyle}
                    className={linkClass}
                    exact={true}
                    to="/support"
                  >
                    Support
                  </Link>
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
