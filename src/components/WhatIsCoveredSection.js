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
import Text from './Text'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import ShowIf from './ShowIf'
import Box from './Box'

import {colors, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({
  mainTitle,
  mainList,
  priceSmallPrint,
  buttonText,
  fromPrice,
  policyFeatureList
}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex
          flexWrap
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="flex-start"
          pb={[2, 3]}
          pl={2}
          pr={2}
        >
          <Flex
            flex={3}
            flexDirection="column"
            className={css({
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              alignSelf: 'flex-start'
            })}
          >
            <Flex
              style={{
                backgroundColor: '#F7F7F4',
                padding: 15,
                alignItems: 'center'
              }}
            >
              <H2 markdown={true} mb={0}>
                FLY UNLIMITED
              </H2>
            </Flex>

            <Flex
              flex={2}
              p={2}
              style={{backgroundColor: '#FFE001', flexDirection: 'column'}}
              justifyContent="center"
            >
              <SmallText>from</SmallText>

              <Flex alignItems="flex-end">
                <H1 mb={0} markdown={true}>{fromPrice}</H1>
                <SmallText
                  className={css({
                    marginLeft: 10
                  })}
                >
                  per month**
                </SmallText>
              </Flex>
            </Flex>

            <Flex
              flex={4}
              style={{
                backgroundColor: '#F7F7F4',
                flexDirection: 'column',
                paddingLeft: 15,
                paddingRight: 15,
                justifyContent: 'space-between'
              }}
            >
              <Flex flexDirection="column" pt={20}>
                {mapIndex(
                  ({text}) => (
                    <SmallText
                      className={css({
                        fontSize: 15,
                        marginBottom: 10
                      })}
                    >
                      {text}
                    </SmallText>
                  ),
                  policyFeatureList
                )}
              </Flex>
              <PrimaryButton
                className={css({
                  alignSelf: 'flex-start',
                  marginBottom: 30,
                })}
              >
                <ArrowText moveOnHover={false}>
                  <p
                    className={css({
                      fontSize: 17
                    })}
                  >
                    {buttonText}
                  </p>
                </ArrowText>
              </PrimaryButton>
            </Flex>
          </Flex>

          <Flex
            flexWrap
            pt={25}
            ml={[0, 2, 3]}
            style={{
              flex: '5'
            }}
            flexDirection="column"
          >
            <H2
              markdown={true}
              className={css({
                marginBottom: 50
              })}
            >
              {mainTitle}
            </H2>
            <Flex
              flexWrap={true}
              className={css({
                flex: 1
              })}
            >
              {mapIndex(
                ({title, text, icon}) => (
                  <Flex
                    flex="1 1 auto"
                    flexDirection="column"
                    alignItems="flex-start"
                    width={['100%', '50%', '50%', '25%']}
                    p={20}
                  >
                    <ShowIf predicate={!!icon}>
                      <img
                        src={withPrefix(icon)}
                        className={css({marginBottom: 10, flex: 1})}
                      />
                    </ShowIf>
                    <H3>{title}</H3>
                    <SmallText>{text}</SmallText>
                  </Flex>
                ),
                mainList
              )}
            </Flex>
          </Flex>
        </Flex>

        <Text
          textAlign="left"
          mb={1}
          className={css({
            marginBottom: 20,
            marginLeft: 20,
            fontSize: 12,
            color: 'grey'
          })}
        >
          ** {priceSmallPrint}
        </Text>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
