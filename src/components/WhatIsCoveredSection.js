import React from 'react'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'
import R from 'ramda'
import Media from 'react-media'

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

import {colors, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({title, list}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex
          flexWrap="wrap"
          height={500}
          flexDirection="row"
          justifyContent="space-between"
          pb={[2, 3]}
          pl={2}
          pr={2}
        >
          <Flex
            flex={3}
            flexDirection="column"
            className={css({
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s'
            })}
          >
            <Flex
              style={{
                backgroundColor: '#F7F7F4',
                padding: 15
              }}
            >
              <H2 markdown={true}>FLY UNLIMITED</H2>
            </Flex>

            <Flex
              flex={2}
              pl={2}
              style={{backgroundColor: '#FFE001', flexDirection: 'column'}}
            >
              <SmallText>from</SmallText>

              <Flex alignItems="flex-end">
                <H1 markdown={true}>£30</H1>
                <SmallText>per month**</SmallText>
              </Flex>
            </Flex>

            <Flex
              flex={4}
              style={{backgroundColor: '#F7F7F4', flexDirection: 'column'}}
            >
              <Flex flexDirection="column" pl={2}>
                <SmallText
                  className={css({
                    fontSize: 15
                  })}
                >
                  Unlimited commercial flight
                </SmallText>
                <SmallText> Up to £10M for drones</SmallText>
                <SmallText> Public liability up to £10M</SmallText>
              </Flex>
              <PrimaryButton>
                <ArrowText moveOnHover={false}>Get a quote</ArrowText>
              </PrimaryButton>
            </Flex>
          </Flex>

          <Flex
            style={{
              flex: 5,
              marginLeft: '50px'
            }}
            flexDirection="column"
          >
            <H2
              markdown={true}
              className={css({
                marginBottom: '60px'
              })}
            >
              {title}
            </H2>
            <Flex
              flexWrap={true}
              className={css({
                flex: 1
              })}
            >
              {mapIndex(
                ({title, text, icon}, index) => (
                  <Box
                    width={['100%', '50%', '25%']}
                    className={css({
                      paddingRight: '40px'
                    })}
                  >
                    <ShowIf predicate={!!icon}>
                      <img
                        src={withPrefix(icon)}
                        className={css({marginBottom: 0})}
                      />
                    </ShowIf>
                    <H3
                      className={css({
                        fontSize: 17
                      })}
                    >
                      {title}
                    </H3>
                    <SmallText>{text}</SmallText>
                  </Box>
                ),
                list
              )}
            </Flex>
          </Flex>
        </Flex>
        <SmallText
          style={{
            marginLeft: '20px',
            marginBottom: '50px'
          }}
        >
          ** Prices depend on factors such as experience, equipment and claims
          history
        </SmallText>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
