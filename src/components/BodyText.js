import React, { Children } from 'react'
import Text from './Text'

const BodyText = ({ children, ...props }) => {
  return (
    <Text fontSize={[2, 3, 3]} {...props}>
      {children}
    </Text>
  )
}

export default BodyText
