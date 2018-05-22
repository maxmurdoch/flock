import React, { Children } from 'react'
import Text from './Text'

const SmallText = ({ children }) => {
  return <Text fontSize={[2, 2, 2]}>{children}</Text>
}

export default SmallText
