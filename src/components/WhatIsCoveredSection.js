import React from 'react'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'
import R from 'ramda'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import ShowIf from './ShowIf'
import Box from './Box'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({ title,list }) => {
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
              <PrimaryButton style={{height: '25%'}}>
                <ArrowText moveOnHover={false}>GET A QUICK QUOTE</ArrowText>
              </PrimaryButton>
            </Flex>
          </Flex>

          <Flex
            style={{
              flex: 4
            }}
            flexDirection='column'
          >
            <H2 markdown={true}>{title}</H2>
            <Flex flexWrap={true}>
              {mapIndex(
                ({title, text, icon}, index) => (
                  <Box
                    flex="1 1 auto"
                    width={['100%', '50%', '33.33%']}
                    pr={[0, 3]}
                    mt={[3, 3, 4]}
                    key={index}
                  >
                    <ShowIf predicate={!!icon}>
                      <img
                        src={withPrefix(icon)}
                        className={css({marginBottom: 0})}
                      />
                    </ShowIf>
                    <H3>{title}</H3>
                    <SmallText>{text}</SmallText>
                  </Box>
                ),
                list
              )}
            </Flex>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
