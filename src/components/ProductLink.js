import React, {Component} from 'react'
import {withPrefix} from 'gatsby-link'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from 'react-emotion'

import Link from './Link'
import ArrowText from './ArrowText'
import SmallText from './SmallText'
import {colors, space, fontFamilies} from '../constants/theme'

class ProductLink extends Component {
  state = {
    isHovered: false
  }

  render() {
    const {to, image, text} = this.props
    return (
      <Link
        onMouseOver={() => {
          this.setState({isHovered: true})
        }}
        onMouseOut={() => {
          this.setState({isHovered: false})
        }}
        to={to}
        className={styles.link}
      >
        <img
          className={css({
            height: '2rem',
            marginBottom: R.nth(1, space)
          })}
          src={withPrefix(image)}
        />
        <ArrowText
          className={css({fontFamily: fontFamilies.chivo})}
          isHovered={this.state.isHovered}
        >
          <SmallText fontWeight={700} color={colors.white}>
            {text}
          </SmallText>
        </ArrowText>
      </Link>
    )
  }
}

export default ProductLink

const styles = {
  link: css({
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: colors.white,
    height: '100%',
    paddingTop: R.nth(3, space),
    paddingBottom: R.nth(3, space)
  })
}

ProductLink.propTypes = {
  to: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string
}
