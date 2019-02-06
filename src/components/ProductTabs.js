import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

import 'react-tabs/style/react-tabs.css'

import H2 from './H2'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'
import ProductCard from './PriceCard'



class ProductTabs extends Component {
  renderTabs = customerTypeList =>
    customerTypeList.map(({title}) => <Tab key={title}>{title}</Tab>)

  renderTabPanel = customerTypeList => {
    return customerTypeList.map(({title, customerTypeDesc, productCards}) => (
      <TabPanel key={title}>
        <SmallText>{customerTypeDesc}</SmallText>
        <Flex flexDirection={['column', 'column', 'row']} >
          {productCards && productCards.length > 0
            ? this.renderProductCards(productCards)
            : null}
        </Flex>
      </TabPanel>
    ))
  }

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
    console.log(customerTypeList)
    return (
      <Flex justifyContent="center">
        <SiteContainer>
          <Flex flexWrap={true} flexDirection="column">
            <Box width={['100%', '50%']} mb={40}>
              <ShowIf predicate={R.not(R.isEmpty(title))}>
                <H2 markdown={true}>{title}</H2>
              </ShowIf>

              <ShowIf predicate={R.not(R.isEmpty(description))}>
                <BodyText>{description}</BodyText>
              </ShowIf>
            </Box>

            <Tabs>
              <TabList>{renderTabs(customerTypeList)}</TabList>

              {renderTabPanel(customerTypeList)}
            </Tabs>
          </Flex>
        </SiteContainer>
      </Flex>
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
