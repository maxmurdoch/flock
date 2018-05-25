import React from 'react'

import Flex from './Flex'
import H3 from './H3'
import featuredList from '../images/featured-list.png'
import SiteContainer from './SiteContainer'

const Featured = ({}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex alignItems="center" flexDirection="column" pb={3}>
          <H3 mb={3}>We’ve been featured</H3>
          <img src={featuredList} />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Featured
