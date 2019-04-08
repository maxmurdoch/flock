import React from 'react'
import * as R from 'ramda'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import {isURL, isEmail} from 'validator'

const link = ({children, onClick, className, target, to = '', ...props}) => {
  const validators = [isURL(to), isEmail(to), R.test(/^tel:/, to)]

  return to && R.anyPass(validators) ? (
    <a href={to} onClick={onClick} css={className} target={target}>
      {children}
    </a>
  ) : (
    <Link to={to} onClick={onClick} className={className} {...props}>
      {children}
    </Link>
  )
}

link.propTypes = {
  children: PropTypes.node,
  target: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string
}

export default link
