import React, {Component} from 'react'
import {css} from 'emotion'

class ProductTabItem extends Component {
  onClick = () => {
    const {label, onClick} = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: {activeTab, label}
    } = this

    const tabListItemStyle = {
      display: 'inline-block',
      listStyle: 'none',
      marginBottom: '-1px',
      padding: '0.5rem 0.75rem'
    }

    const tabListActiveStyle = {
      backgroundColor: 'white',
      border: 'solid #ccc',
      borderWidth: '1px 1px 0 1px'
    }

    let className
    if (activeTab === label)
      className = {...tabListItemStyle, ...tabListActiveStyle}
    else className = tabListItemStyle

    return (
      <li className={css(className)} onClick={onClick}>
        {label}
      </li>
    )
  }
}

export default ProductTabItem
