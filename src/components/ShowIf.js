import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const ShowIf = ({predicate, children}) =>
  predicate ? <Fragment>{children}</Fragment> : null

ShowIf.propTypes = {
  predicate: PropTypes.bool,
  children: PropTypes.node
}

export default ShowIf
