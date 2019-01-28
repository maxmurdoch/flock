import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import BodyText from './BodyText'

const mapIndex = R.addIndex(R.map)

const hasNewLine = str => R.contains('\n', str) || R.contains('\r', str)

const NewLineToBr = ({Component = BodyText, children, ...props}) => {
  const text = R.is(Array, children) ? children.reduce((memo, child) => {
    return R.is(String, child) && !!child.trim() ? memo + child : memo
  }, '') : ''

  return (
    <Component {...props}>
      {!!text && R.is(String, text) && hasNewLine(text)
        ? mapIndex((child, key) => {
            return (
              <Fragment key={key}>
                {child}
                <br />
              </Fragment>
            )
          }, R.split(/\r\n|\n|\r/, text))
        : children}
    </Component>
  )
}

NewLineToBr.propTypes = {
  Component: PropTypes.func,
  children: PropTypes.node
}

export default NewLineToBr
