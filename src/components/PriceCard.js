import React from 'react'
import {css, cx} from 'react-emotion'
import R from 'ramda'
import {withPrefix} from 'gatsby-link'

import Flex from './Flex'
import H1 from './H1'
import H2 from './H2'
import SmallText from './SmallText'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import ArrowText from './ArrowText'

const mapIndex = R.addIndex(R.map)

const PriceCard = ({
  fromText,
  perText,
  productType,
  buttonOneText,
  buttonTwoText,
  fromPrice,
  icon,
  policyFeatureList,
  buttonOneOnClick,
  buttonTwoOnClick,
  flex = null,
  className
}) => (
  <Flex
    flex={flex || '0 0 auto'}
    flexDirection="column"
    width={[300, 400, 400]}
    className={cx(
      css({
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s'
      }),
      className
    )}
  >
    {productType && (
      <Flex
        style={{
          backgroundColor: '#F7F7F4',
          padding: 20,
          paddingBottom: 25,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <H2 markdown={true} mb={0} flex={1}>
          {productType}
        </H2>
        {icon && (
          <img
            src={withPrefix(icon)}
            className={css({marginBottom: 0, height: 40})}
          />
        )}
      </Flex>
    )}

    {fromPrice && (
      <Flex
        p={2}
        style={{
          backgroundColor: '#FFE001',
          flexDirection: 'column',
          paddingLeft: 20,
          paddingTop: 25,
          paddingBottom: 25
        }}
        justifyContent="center"
      >
        <SmallText>{fromText}</SmallText>

        <Flex alignItems="flex-end">
          <H1 mb={0} markdown={true} fontSize={12}>
            {fromPrice}
          </H1>
          <SmallText
            className={css({
              marginLeft: 10,
              lineHeight: '28px'
            })}
          >
            {perText}
          </SmallText>
        </Flex>
      </Flex>
    )}

    <Flex
      flex={1}
      style={{
        backgroundColor: '#F7F7F4',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 15,
        justifyContent: 'space-between',
        paddingBottom: 5
      }}
    >
      {policyFeatureList &&
        policyFeatureList.length > 0 && (
          <Flex flexDirection="column" pt={30} pb={30}>
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
        )}
    </Flex>

    <Flex
      flexDirection="column"
      className={css({
        backgroundColor: '#F7F7F4',
        paddingTop: 5,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 20
      })}
    >
      {buttonOneText &&
        buttonOneOnClick && (
          <PrimaryButton
            className={css({
              alignSelf: 'flex-start',
              marginBottom: 15,
              cursor: 'pointer'
            })}
            onClick={buttonOneOnClick}
          >
            <ArrowText moveOnHover={false}>
              <p
                className={css({
                  fontSize: 17,
                  marginRight: 10
                })}
              >
                {buttonOneText}
              </p>
            </ArrowText>
          </PrimaryButton>
        )}

      {buttonTwoText &&
        buttonTwoOnClick && (
          <SecondaryButton
            className={css({
              alignSelf: 'flex-start',
              cursor: 'pointer'
            })}
            onClick={buttonTwoOnClick}
          >
            <ArrowText moveOnHover={false}>
              <p
                className={css({
                  fontSize: 17,
                  marginRight: 10
                })}
              >
                {buttonTwoText}
              </p>
            </ArrowText>
          </SecondaryButton>
        )}
    </Flex>
  </Flex>
)

export default PriceCard
