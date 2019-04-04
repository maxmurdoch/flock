import React from 'react'

import {css} from '@emotion/core'

import ProductCard from './PriceCard'

import SmallText from './SmallText'

const productCardTabPanel = ({customerTypeDesc, productCards}) => {

  const renderProductCards = productCards =>
    productCards.map(
      ({
        productType,
        fromText,
        perText,
        buttonOneText,
        buttonTwoText,
        buttonOneUrl,
        buttonTwoUrl,
        buttonOneExternal,
        buttonTwoExternal,
        fromPrice,
        policyFeatureList,
        icon
      }) => (
        <ProductCard
          key={productType}
          icon={icon}
          productType={productType}
          fromText={fromText}
          perText={perText}
          buttonOneText={buttonOneText}
          buttonTwoText={buttonTwoText}
          fromPrice={fromPrice}
          policyFeatureList={policyFeatureList}
          buttonOneUrl={buttonOneUrl}
          buttonTwoUrl={buttonTwoUrl}
          buttonOneExternal={buttonOneExternal}
          buttonTwoExternal={buttonTwoExternal}
          css={css({marginRight: 16, marginBottom: 16})}
        />
      )
    )

  return (
    <div>
      <SmallText css={css({color: 'white'})} mb={4} ml={2} mr={2}>
        {customerTypeDesc}
      </SmallText>
      <div
        css={css({
          overflowX: 'scroll',
          WebkitOverflowScrolling: 'touch',
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        })}
      >
        <div css={css({display: 'inline-flex', padding: '0 20px'})}>
          {productCards && productCards.length > 0
            ? renderProductCards(productCards)
            : null}
        </div>
      </div>
    </div>
  )
}

export default productCardTabPanel
