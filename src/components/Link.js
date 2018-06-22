import React from 'react'
import R from 'ramda'
import GatsbyLink from 'gatsby-link'
import PropTypes from 'prop-types'
import {isURL, isEmail} from 'validator'

const Link = ({children, to, ...props}) => {
  const validators = [isURL(to), isEmail(to), R.test(/^tel:/, to)]

  return to && R.anyPass(validators) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  to: PropTypes.string
}

export default Link
