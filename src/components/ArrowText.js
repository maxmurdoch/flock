import React, {Component} from 'react'
import * as R from 'ramda'
import {css} from '@emotion/core'

class ArrowText extends Component {
  static defaultProps = {
    moveOnHover: true
  }

  state = {
    isHovered: false
  }

  render() {
    const {css: CSS, children, moveOnHover, isHovered} = this.props

    return (
      <span
        onMouseOver={() => {
          this.setState({isHovered: true})
        }}
        onMouseOut={() => {
          this.setState({isHovered: false})
        }}
        css={css({display: 'flex'}, CSS)}
      >
        {children}
        <i
          css={css({
            color: 'inherit',
            fontStyle: 'normal',
            transition: '200ms padding ease-in-out',
            paddingLeft: R.and(
              moveOnHover,
              R.or(this.state.isHovered, isHovered)
            )
              ? 20
              : 10
          })}
        >
          →
        </i>
      </span>
    )
  }
}

export default ArrowText
