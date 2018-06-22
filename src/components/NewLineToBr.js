import React, {Fragment} from 'react'
import R from 'ramda'
import BodyText from './BodyText'

const mapIndex = R.addIndex(R.map)

const NewLineToBr = ({Component = BodyText, children, ...props}) => {
  return (
    <Component {...props}>
      {R.and(R.is(String, children), R.contains('\n', children))
        ? mapIndex((child, key) => {
            return (
              <Fragment key={key}>
                {child}
                <br />
              </Fragment>
            )
          }, R.split('\n', children))
        : children}
    </Component>
  )
}

export default NewLineToBr
