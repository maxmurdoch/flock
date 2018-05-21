import React, { Children } from 'react'
import Text from './Text'

const SmallText = ({ children }) => {
  return <Text fontSize={[2, 3, 3]}>{children}</Text>
}

export default SmallText
