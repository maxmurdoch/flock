import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import BodyText from './BodyText'

const mapIndex = R.addIndex(R.map)

const NewLineToBr = ({Component = BodyText, children, ...props}) => {
  return (
    <Component {...props}>
      {R.is(String, children) && R.contains(/[\n\r]/, children)
        ? mapIndex((child, key) => {
            return (
              <Fragment key={key}>
                {child}
                <br />
              </Fragment>
            )
          }, R.split(/[\n\r]/, children))
        : children}
    </Component>
  )
}

NewLineToBr.propTypes = {
  Component: PropTypes.func,
  children: PropTypes.node
}

export default NewLineToBr
