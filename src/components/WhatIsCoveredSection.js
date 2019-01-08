import React from 'react'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import H1 from './H1'
import H2 from './H2'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'

const whatIsCovered = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex
          flexWrap="wrap"
          height={600}
          flexDirection="row"
          justifyContent="space-between"
          pt={[3, 5]}
          pb={[2, 3]}
          pl={2}
          pr={2}
        >
          <Flex flexWrap={true} flex={1} flexDirection="column">
            <Flex
              style={{
                flex: 1,
                backgroundColor: '#F7F7F4'
              }}
            >
              <H2 markdown={true}>FLY UNLIMITED</H2>
            </Flex>
            <Flex flex={2} style={{backgroundColor: '#FFE001'}}>
              <SmallText>from</SmallText>
              <Flex alignItems="flex-end">
                <H1 markdown={true}>£30</H1>
                <SmallText>per month</SmallText>
              </Flex>
            </Flex>
            <Flex
              flex={4}
              style={{
                backgroundColor: '#F7F7F4'
              }}
              flexWrap="wrap"
              justifyContent="flex-start"
              pt={[3, 5]}
              pb={[2, 3]}
              pl={2}
              pr={2}
            >
              <PrimaryButton>
                <ArrowText moveOnHover={false}>GET A QUICK QUOTE</ArrowText>
              </PrimaryButton>
            </Flex>
          </Flex>

          <Flex
            style={{
              flex: 3,
              borderColor: 'black',
              backgroundColor: 'blue'
            }}
          />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
