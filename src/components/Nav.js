import R from 'ramda'
import React, {Component} from 'react'
import Link from 'gatsby-link'
import {Sticky} from 'react-sticky'
import {css} from 'react-emotion'

import SiteContainer from './SiteContainer'
import SmallText from './SmallText'
import Flex from '../components/Flex'
import Box from '../components/Box'
import ProductNavDropDown from './ProductNavDropDown'
import downArrow from '../images/icons/small-arrow-black.svg'
import {colors, space} from '../constants/theme'

class Nav extends Component {
  static defaultProps = {
    textColor: () => colors.black,
    arrowImage: () => downArrow
  }

  state = {
    productsIsOpen: false
  }

  render() {
    const {Logo, DownloadButton, textColor, arrowImage} = this.props

    const navClass = css({
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'flex-end'
    })

    return (
      <Sticky disableCompensation={true}>
        {({style, distanceFromTop}) => {
          const activateStickyStyle = R.or(
            distanceFromTop < -50,
            this.state.productsIsOpen
          )
          const activeLinkStyle = {
            borderBottom: `4px solid ${
              activateStickyStyle ? colors.white : colors.yellow
            }`
          }
          const linkClass = css({
            color: textColor({isSticky: activateStickyStyle}),
            textDecoration: 'none',
            margin: `0 ${R.nth(1, space)}px 0`,
            padding: `${R.nth(1, space)}px ${R.nth(1, space)}px`
          })
          const downloadButtonClass = css({
            marginLeft: R.nth(1, space),
            paddingLeft: R.nth(2, space)
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
                  : 'transparent'
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
                        to="/products"
                        onClick={event => {
                          event.preventDefault()

                          this.setState({
                            productsIsOpen: R.not(this.state.productsIsOpen)
                          })
                        }}
                      >
                        <SmallText
                          className={css({
                            position: 'relative',
                            '&::after': {
                              content: `url(${arrowImage({
                                isSticky: activateStickyStyle
                              })})`,
                              display: 'inline-block',
                              transform: this.state.productsIsOpen
                                ? 'rotate(180deg)'
                                : null,
                              position: 'relative',
                              paddingLeft: this.state.productsIsOpen ? 0 : 10,
                              paddingRight: this.state.productsIsOpen ? 10 : 0
                            }
                          })}
                        >
                          Products
                        </SmallText>
                      </Link>
                      <Link
                        activeStyle={activeLinkStyle}
                        className={linkClass}
                        exact={true}
                        to="/pricing"
                      >
                        <SmallText>Pricing</SmallText>
                      </Link>
                      <a
                        className={linkClass}
                        href="https://help.flockcover.com"
                      >
                        <SmallText>Support</SmallText>
                      </a>
                      <div className={downloadButtonClass}>
                        <DownloadButton isSticky={activateStickyStyle} />
                      </div>
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