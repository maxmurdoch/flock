import React, {Component} from 'react'
import * as R from 'ramda'
import {css} from 'react-emotion'

class ArrowText extends Component {
  static defaultProps = {
    moveOnHover: true
  }

  state = {
    isHovered: false
  }

  render() {
    const {className, children, moveOnHover, isHovered} = this.props

    return (
      <span
        onMouseOver={() => {
          this.setState({isHovered: true})
        }}
        onMouseOut={() => {
          this.setState({isHovered: false})
        }}
        className={css({display: 'flex'}, className)}
      >
        {children}
        <i
          className={css({
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
