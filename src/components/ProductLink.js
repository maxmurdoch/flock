import React, {Component} from 'react'
import Link from 'gatsby-link'
import R from 'ramda'
import {css} from 'react-emotion'

import ArrowText from './ArrowText'
import SmallText from './SmallText'
import {colors, space} from '../constants/theme'

class ProductLink extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false
    }
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
          src={image}
        />
        <ArrowText isHovered={this.state.isHovered}>
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
    display: 'block',
    color: colors.white,
    height: '100%',
    paddingTop: R.nth(3, space),
    paddingBottom: R.nth(3, space)
  })
}
