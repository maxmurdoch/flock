import React from 'react'
import * as R from 'ramda'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import {isURL, isEmail} from 'validator'

const link = ({children, onClick, css, target, to = '', ...props}) => {
  const validators = [isURL(to), isEmail(to), R.test(/^tel:/, to)]

  return to && R.anyPass(validators) ? (
    <a href={to} onClick={onClick} css={css} target={target}>
      {children}
    </a>
  ) : (
    <Link to={to} onClick={onClick} css={css} {...props}>
      {children}
    </Link>
  )
}

link.propTypes = {
  children: PropTypes.node,
  target: PropTypes.string,
  onClick: PropTypes.func,
  css: PropTypes.string,
  to: PropTypes.string
}

export default link
