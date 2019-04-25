import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from '@emotion/core'

import {breakpoints} from '../constants/theme'
import H2 from './H2'
import BodyText from './BodyText'
import ProductCard from './PriceCard'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'

const TabSection = ({title, description, productCards}) => {
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
          style={{marginRight: 16, marginBottom: 16}}
        />
      )
    )

  return (
    <React.Fragment>
      <Flex justifyContent="center">
        <SiteContainer>
          <Flex flexWrap={true} flexDirection="column">
            <Box width={['100%', '50%']} mb={50}>
              <ShowIf predicate={R.not(R.isEmpty(title))}>
                <H2 markdown={true} pb={15}>
                  {title}
                </H2>
              </ShowIf>

              <ShowIf predicate={R.not(R.isEmpty(description))}>
                <BodyText>{description}</BodyText>
              </ShowIf>
            </Box>
          </Flex>
        </SiteContainer>
      </Flex>

      <Flex background="#363636" justifyContent="center">
        <SiteContainer edgeToEdge>
          <Flex pt={4} pb={3} pl={2} flexDirection={['column', 'column', 'row']}>
            {renderProductCards(productCards)}
          </Flex>
        </SiteContainer>
      </Flex>
    </React.Fragment>
  )
}

export default TabSection

TabSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
}

const styles = {
  tabListStyle: {
    marginBottom: 0,
    marginLeft: 20,
    display: 'flex'
  },
  tabStyle: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none',
    fontFamily: 'Chivo',
    position: 'relative',
    padding: '10px 30px',
    marginBottom: 0,
    textAlign: 'left',
    width: 250,
    marginRight: 10,
    borderTop: '7px solid #F7F7F4',
    backgroundColor: '#F7F7F4',

    ':focus': {
      boxShadow: 'none',
      outline: 'none'
    },

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      marginRight: 10
    },

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      marginRight: 15
    }
  }),
  selectedTabStyle: {
    boxSizing: 'border-box',
    backgroundColor: '#363636',
    color: 'white',
    borderTop: '7px solid #FFE001'
  },
  selectedTabPanelStyle: {
    display: 'block',
    background: '#363636',
    paddingTop: 30
  }
}
