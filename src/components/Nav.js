import React, { Component } from 'react'
import { Collapse } from 'react-collapse'
import R from 'ramda'
import { Sticky } from 'react-sticky'
import debounce from 'debounce'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import ArrowText from './ArrowText'
import SiteContainer from './SiteContainer'
import blackLogo from '../images/logo-black.svg'
import SmallText from './SmallText'
import Flex from '../components/Flex'
import Box from '../components/Box'
import SecondaryButton from '../components/SecondaryButton'
import ProductLink from './ProductLink'
import downArrow from '../images/icons/small-arrow-black.svg'
import { colors, space } from '../constants/theme'
import { active } from 'styled-system'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      productsIsOpen: false,
    }
  }
  render() {
    const { siteTitle } = this.props
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
      <Sticky disableCompensation={true}>
        {({
          style,
          isSticky,
          wasSticky,
          distanceFromTop,
          distanceFromBottom,
          calculatedHeight,
        }) => {
          const activateStickyStyle = R.or(
            distanceFromTop < -50,
            this.state.productsIsOpen
          )
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
                flexWrap: 'wrap',
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
                  alignItems="center"
                  justifyContent="space-between"
                  height="5rem"
                  flexWrap={['wrap', 'nowrap']}
                >
                  <Box width="100%">
                    <Link to={'/'}>
                      <img
                        className={css({ width: '6rem', margin: 0 })}
                        src={blackLogo}
                      />
                    </Link>
                  </Box>
                  <Box width="100%">
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
                        onClick={event => {
                          event.preventDefault()

                          this.setState({
                            productsIsOpen: R.not(this.state.productsIsOpen),
                          })
                        }}
                      >
                        <SmallText
                          className={css({
                            position: 'relative',
                            '&:after': {
                              content: `url(${downArrow})`,
                              transform: this.state.productsIsOpen
                                ? 'rotate(180deg)'
                                : null,
                              position: 'absolute',
                              paddingLeft: this.state.productIsOpen ? 0 : 5,
                              paddingRight: this.state.productIsOpen ? 0 : 5,
                            },
                          })}
                        >
                          Products
                        </SmallText>
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
                        Text={SmallText}
                      >
                        <ArrowText moveOnHover={false}>Download</ArrowText>
                      </SecondaryButton>
                    </nav>
                  </Box>
                </Flex>
              </SiteContainer>
              <Collapse
                isOpened={this.state.productsIsOpen}
                className={css({
                  width: '100%',
                })}
                springConfig={{ stiffness: 1000, damping: 50 }}
              >
                <Flex
                  justifyContent="center"
                  width="100%"
                  background={colors.backgrounds.dark}
                >
                  <SiteContainer>
                    <Flex alignItems="stretch">
                      {R.map(
                        ({ image, to, text }) => (
                          <Box width="33.33%">
                            <ProductLink to={to} image={image} text={text} />
                          </Box>
                        ),
                        [
                          {
                            to: '/products/commercial',
                            image: '/images/uploads/drone-camera.svg',
                            text: 'Commercial pilot',
                          },
                          {
                            to: '/products/trainee',
                            image: '/images/uploads/drone.svg',
                            text: 'Trainee pilot',
                          },
                          {
                            to: '/products/hobbyists',
                            image: '/images/uploads/drone-diamond.svg',
                            text: 'Hobbyist pilot',
                          },
                        ]
                      )}
                    </Flex>
                  </SiteContainer>
                </Flex>
              </Collapse>
            </header>
          )
        }}
      </Sticky>
    )
  }
}

export default Nav
