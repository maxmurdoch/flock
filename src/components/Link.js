import React from 'react'
import R from 'ramda'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import {isURL, isEmail} from 'validator'

const Link = ({children, onClick, className, target, to = '', ...props}) => {
  const validators = [isURL(to), isEmail(to), R.test(/^tel:/, to)]

  return to && R.anyPass(validators) ? (
    <a href={to} onClick={onClick} className={className} target={target}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} onClick={onClick} className={className} {...props}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  target: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string
}

export default Link
