import React from 'react'
import {Sticky} from 'react-sticky'
import {Collapse} from 'react-collapse'
import {withState} from 'recompose'
import R from 'ramda'
import {css} from 'react-emotion'

import Link from './Link'
import ArrowText from './ArrowText'
import Flex from './Flex'
import Box from './Box'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import ProductNavDropDownMobile from './ProductNavDropDownMobile'

import hamburger from '../images/icons/hamburger.svg'
import blackLogo from '../images/logo-black.svg'
import {colors, space} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const styles = {
  product: css({
    fontWeight: 700,
    display: 'flex',
    color: colors.white,
    textDecoration: 'none',
    marginTop: R.nth(2, space)
  })
}

const navList = [
  {
    to: '/',
    className: styles.product,
    text: 'Home'
  },
  {
    to: '/about',
    className: styles.product,
    text: 'About us'
  },
  {
    to: 'https://help.flockcover.com',
    className: styles.product,
    text: 'FAQ'
  },
  {
    to: 'https://blog.flockcover.com/',
    className: styles.product,
    text: 'Blog'
  },
  {
    to: 'https://flockcover.workable.com',
    className: styles.product,
    text: 'Jobs'
  }
]

const MobileNav = ({
  isOpen,
  toggleMenu,
  logo = () => blackLogo,
  icon = () => hamburger,
  iconColor = () => colors.dark,
  to
}) => {
  return (
    <Sticky disableCompensation={true}>
      {({style, distanceFromTop}) => {
        const isSticky = R.or(distanceFromTop < -50, isOpen)

        return (
          <Flex
            style={{width: '100%', position: 'fixed', top: 0, ...style}}
            flexWrap={true}
            position="relative"
            zIndex="2"
          >
            <Flex
              background={isSticky ? colors.yellow : 'transparent'}
              pt={2}
              pr={2}
              pb={2}
              pl={2}
              justifyContent="space-between"
              width="100%"
              className={css({
                transition: '200ms background ease-in-out'
              })}
            >
              <Box>
                <Link to="/">
                  <img
                    className={css({
                      marginBottom: 0,
                      width: R.nth(5, space)
                    })}
                    src={logo({isSticky})}
                  />
                </Link>
              </Box>
              <Box>
                <button
                  className={css({
                    border: 0,
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center'
                  })}
                  onClick={() => toggleMenu(isOpen => R.not(isOpen))}
                >
                  <img
                    className={css({
                      marginBottom: 0,
                      paddingRight: 5
                    })}
                    src={icon({isSticky})}
                  />
                  <SmallText color={iconColor({isSticky})}>Menu</SmallText>
                </button>
              </Box>
            </Flex>
            <Collapse
              isOpened={isOpen}
              className={css({width: '100%'})}
              springConfig={{stiffness: 1000, damping: 50}}
            >
              <Flex background={colors.backgrounds.dark} width="100%" pb={2}>
                <SiteContainer>
                  <nav
                    className={css({
                      width: '100%'
                    })}
                  >
                    <ProductNavDropDownMobile />
                    <Flex
                      pt={2}
                      borderBottom={`1px solid ${colors.white}`}
                      width="100%"
                    />
                    {mapIndex(
                      ({text, to, className}, key) => (
                        <Link key={key} to={to} className={className}>
                          <SmallText>{text}</SmallText>
                        </Link>
                      ),
                      navList
                    )}
                    <Flex
                      pt={2}
                      borderBottom={`1px solid ${colors.white}`}
                      width="100%"
                    />
                    <Link to={to.to} className={styles.product}>
                      <ArrowText>
                        <SmallText fontWeight={700}>Download</SmallText>
                      </ArrowText>
                    </Link>
                  </nav>
                </SiteContainer>
              </Flex>
            </Collapse>
          </Flex>
        )
      }}
    </Sticky>
  )
}

const addOpenCloseToggleState = withState('isOpen', 'toggleMenu', false)
export default addOpenCloseToggleState(MobileNav)
