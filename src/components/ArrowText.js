import React, { Component } from 'react'
import R from 'ramda'
import { css } from 'react-emotion'

import Flex from './Flex'

class ArrowText extends Component {
  static defaultProps = {
    moveOnHover: true,
  }

  state = {
    isHovered: false,
  }

  render() {
    return (
      <span
        onMouseOver={() => {
          this.setState({ isHovered: true })
        }}
        onMouseOut={() => {
          this.setState({ isHovered: false })
        }}
        className={css({ display: 'flex' }, this.props.className)}
      >
        {this.props.children}
        <i
          className={css({
            color: 'inherit',
            fontStyle: 'normal',
            transition: '200ms padding ease-in-out',
            paddingLeft: R.and(
              this.props.moveOnHover,
              R.or(this.state.isHovered, this.props.isHovered)
            )
              ? 20
              : 10,
          })}
        >
          →
        </i>
      </span>
    )
  }
}

export default ArrowText
