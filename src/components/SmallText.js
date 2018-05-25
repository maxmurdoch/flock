import React, { Children } from 'react'
import Text from './Text'

const SmallText = ({ children, ...props }) => {
  return (
    <Text fontSize={[1, 1, 1]} {...props}>
      {children}
    </Text>
  )
}

export default SmallText
