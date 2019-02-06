import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

import H2 from './H2'
import H3 from './H3'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'
import ProductCard from './PriceCard'

class ProductTabs extends Component {
  renderTabs = customerTypeList =>
    customerTypeList.map(({title}) => (
      <Tab
        className={css({
          display: 'inline-block',
          cursor: 'pointer',
          listStyle: 'none',
          fontWeight: 'bold',
          fontFamily: 'Chivo',
          position: 'relative',
          padding: '6px 25px',
          marginBottom: 0
        })}
        key={title}
      >
        {title}
      </Tab>
    ))

  renderTabPanel = customerTypeList =>
    customerTypeList.map(({title, customerTypeDesc, productCards}) => (
      <TabPanel key={title}>
        <SmallText className={css({color: 'white'})}>
          {customerTypeDesc}
        </SmallText>
        <Flex flexDirection={['column', 'column', 'row']}>
          {productCards && productCards.length > 0
            ? this.renderProductCards(productCards)
            : null}
        </Flex>
      </TabPanel>
    ))

  renderProductCards = productCards =>
    productCards.map(
      ({
        productType,
        fromText,
        perText,
        buttonOneText,
        buttonTwoText,
        fromPrice,
        policyFeatureList
      }) => (
        <ProductCard
          key={productType}
          productType={productType}
          fromText={fromText}
          perText={perText}
          buttonOneText={buttonOneText}
          buttonTwoText={buttonTwoText}
          fromPrice={fromPrice}
          policyFeatureList={policyFeatureList}
          buttonOneOnClick={() => window.open('https://my.flockcover.com')}
          buttonTwoOnClick={() => window.open('https://my.flockcover.com')}
        />
      )
    )

  render() {
    const {
      renderTabs,
      renderTabPanel,
      props: {title, description, customerTypeList}
    } = this
    return (
      <React.Fragment>
        <Flex justifyContent="center">
          <SiteContainer>
            <Flex flexWrap={true} flexDirection="column">
              <Box width={['100%', '50%']} mb={50}>
                <ShowIf predicate={R.not(R.isEmpty(title))}>
                  <H2 markdown={true}>{title}</H2>
                </ShowIf>

                <ShowIf predicate={R.not(R.isEmpty(description))}>
                  <BodyText>{description}</BodyText>
                </ShowIf>
              </Box>
            </Flex>
          </SiteContainer>
        </Flex>

        <Flex justifyContent="center" className={css({background: '#363636'})}>
          <SiteContainer>
            <Flex flexWrap={true} flexDirection="column">
              <Tabs
              className={css({ background: 'white'})}
                selectedTabClassName={css({
                  background: '#363636',
                  color: 'white',
                  borderTop: '5px solid #FFE001'
                })}
                selectedTabPanelClassName={css({
                  display: 'block',
                  background: '#363636',
                  paddingTop: 20,
                  paddingBottom: 70
                })}
              >
                <TabList
                  className={css({
                    marginBottom: 0,
                    marginLeft: 0
                  })}
                >
                  {renderTabs(customerTypeList)}
                </TabList>

                {renderTabPanel(customerTypeList)}
              </Tabs>
            </Flex>
          </SiteContainer>
        </Flex>
      </React.Fragment>
    )
  }
}

export default ProductTabs

ProductTabs.propTypes = {
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
