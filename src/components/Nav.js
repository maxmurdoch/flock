import React, { Component } from 'react'
import R from 'ramda'
import { Sticky } from 'react-sticky'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import SiteContainer from './SiteContainer'
import SmallText from './SmallText'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ProductNavDropDown from './ProductNavDropDown'
import downArrow from '../images/icons/small-arrow-black.svg'
import { colors, space } from '../constants/theme'

class Nav extends Component {
  static defaultProps = {
    textColor: () => colors.black,
    arrowImage: () => downArrow,
  }
  state = {
    productsIsOpen: false,
  }

  render() {
    const { Logo, DownloadButton, textColor, arrowImage } = this.props

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
          const linkClass = css({
            margin: '0 0.5rem 0',
            padding: '0 1rem 0.5rem',
            color: textColor({ isSticky: activateStickyStyle }),
            textDecoration: 'none',
          })

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
                      <Logo isSticky={activateStickyStyle} />
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
                            '&::after': {
                              content: `url(${arrowImage({
                                isSticky: activateStickyStyle,
                              })})`,
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
                      <DownloadButton isSticky={activateStickyStyle} />
                    </nav>
                  </Box>
                </Flex>
              </SiteContainer>
              <ProductNavDropDown productsIsOpen={this.state.productsIsOpen} />
            </header>
          )
        }}
      </Sticky>
    )
  }
}

export default Nav
