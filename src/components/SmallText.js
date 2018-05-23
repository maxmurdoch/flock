import React, { Children } from 'react'
import Text from './Text'

const SmallText = ({ children, ...props }) => {
  return (
    <Text fontSize={[2, 2, 2]} {...props}>
      {children}
    </Text>
  )
}

export default SmallText
