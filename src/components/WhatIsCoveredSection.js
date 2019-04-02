import React from 'react'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'
import * as R from 'ramda'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import PriceCard from './PriceCard'
import H2 from './H2'
import H3 from './H3'
import SmallText from './SmallText'
import ShowIf from './ShowIf'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({
  id,
  mainTitle,
  mainDescription,
  mainList,
  smallPrints,
  buttonOneText,
  buttonTwoText,
  buttonOneUrl,
  buttonTwoUrl,
  fromPrice,
  policyFeatureList,
  samplePolicyWordingUrl,
  productType,
  fromText,
  itemTextColor = 'black',
  headerTextColor = 'black',
  smallPrintColor= 'grey',
  perText
}) => {
  return (
    <Flex id={id} justifyContent="center" pb={2}>
      <SiteContainer>
        <Flex
          flexWrap
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="flex-start"
          pb={[2, 3]}
        >
          <PriceCard
            flex={3}
            productType={productType}
            fromText={fromText}
            perText={perText}
            buttonOneText={buttonOneText}
            buttonTwoText={buttonTwoText}
            buttonOneUrl={buttonOneUrl}
            buttonTwoUrl={buttonTwoUrl}
            fromPrice={fromPrice}
            policyFeatureList={policyFeatureList}
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
            <H2
              pl={10}
              mb={[10, 10, 40]}
              markdown={true}
              color={headerTextColor}
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
                ({title, icon}, index) => (
                  <Flex
                    flex="1 1 auto"
                    flexDirection="column"
                    alignItems="flex-start"
                    width={['50%', '50%', '50%', '25%']}
                    p={20}
                    key={index}
                  >
                    <ShowIf predicate={!!icon}>
                      <img
                        src={withPrefix(icon)}
                        className={css({
                          marginBottom: 10,
                          width: 40,
                          height: 40
                        })}
                      />
                    </ShowIf>
                    <H3 color={itemTextColor}>{title}</H3>
                  </Flex>
                ),
                mainList
              )}
            </Flex>

            <Flex mt={20} mb={20} ml={[0, 0, 20]}>
              <SmallText>{mainDescription}</SmallText>
            </Flex>
          </Flex>
        </Flex>

        {smallPrints &&
          smallPrints.length > 0 && (
            <Flex flexDirection="column" pt={10} pb={10}>
              {mapIndex(
                ({text}) => (
                  <SmallText
                    textAlign="left"
                    style={{fontSize: 14}}
                    className={css({
                      color: smallPrintColor
                    })}
                  >
                    {text}
                  </SmallText>
                ),
                smallPrints
              )}
            </Flex>
          )}
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
