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
const productList = [
  {
    to: '/products/commercial',
    className: styles.product,
    text: 'Commercial pilot'
  },
  {
    to: '/products/trainee',
    className: styles.product,
    text: 'Trainee pilot'
  },
  {
    to: '/products/hobbyist',
    className: styles.product,
    text: 'Hobbyist pilot'
  }
]

const navList = [
  {
    to: '/',
    className: styles.product,
    text: 'Home'
  },
  {
    to: '/about',
    className: styles.product,
    text: 'About'
  },
  {
    to: '/support',
    className: styles.product,
    text: 'Support'
  }
]

const MobileNav = ({isOpen, toggleMenu, textColor = () => colors.black}) => {
  return (
    <Sticky disableCompensation={true}>
      {({style, distanceFromTop}) => {
        const activateStickyStyle = distanceFromTop < -50

        return (
          <Flex
            style={{width: '100%', position: 'fixed', top: 0, ...style}}
            flexWrap={true}
            position="relative"
            zIndex="2"
          >
            <Flex
              background={colors.yellow}
              pt={2}
              pr={2}
              pb={2}
              pl={2}
              justifyContent="space-between"
              width="100%"
            >
              <Box>
                <img
                  className={css({marginBottom: 0, width: R.nth(5, space)})}
                  src={blackLogo}
                />
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
                    src={hamburger}
                  />
                  <SmallText>Menu</SmallText>
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
                    {mapIndex(
                      ({text, to, className}, index) => (
                        <Link to={to} className={className} key={index}>
                          <ArrowText>
                            <SmallText fontWeight={700}>{text}</SmallText>
                          </ArrowText>
                        </Link>
                      ),
                      productList
                    )}
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
                    <Link to="/download" className={styles.product}>
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
