import React from 'react'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'
import R from 'ramda'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import Link from './Link'
import PriceCard from './PriceCard'
import H2 from './H2'
import H3 from './H3'
import Text from './Text'
import SmallText from './SmallText'
import ShowIf from './ShowIf'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({
  mainTitle,
  mainList,
  priceSmallPrint,
  pilotSmallPrint,
  buttonText,
  fromPrice,
  policyFeatureList,
  samplePolicyWordingUrl,
  productType,
  fromText,
  perText
}) => {
  return (
    <Flex justifyContent="center" pb={2}>
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
          <PriceCard
            productType={productType}
            fromText={fromText}
            perText={perText}
            buttonOneText={buttonText}
            fromPrice={fromPrice}
            policyFeatureList={policyFeatureList}
            buttonOneOnClick={() => window.open('https://my.flockcover.com')}
          />

          <Flex
            flexWrap
            mt={[30, 30, 0]}
            pt={25}
            ml={[0, 0, 3]}
            style={{
              flex: '5'
            }}
            flexDirection="column"
          >
            <H2 pl={10} mb={[10, 10, 40]} markdown={true}>
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
            <Link
              to={samplePolicyWordingUrl}
              className={css({
                textDecoration: 'none',
                color: 'inherit'
              })}
            >
              <Flex mt={20} mb={20} ml={[0, 0, 20]}>
                <SmallText>
                  View the <b>Key Facts</b> for details of what's covered.
                </SmallText>
              </Flex>
            </Link>
          </Flex>
        </Flex>

        <Text
          textAlign="left"
          className={css({
            marginLeft: 20,
            fontSize: 12,
            color: 'grey',
            marginBottom: 0
          })}
        >
          ** {priceSmallPrint}
        </Text>
        <Text
          textAlign="left"
          className={css({
            marginBottom: 20,
            marginLeft: 20,
            fontSize: 12,
            color: 'grey'
          })}
        >
          &#8314; {pilotSmallPrint}
        </Text>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
