import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

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
        <SmallText className={css({color: 'white'})} mb={4}>
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
        buttonOneUrl,
        buttonTwoUrl,
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
          buttonOneOnClick={() => window.open(buttonOneUrl)}
          buttonTwoOnClick={() => window.open(buttonTwoUrl)}
          className={css({marginRight: 16, marginBottom: 16})}
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

        <div className={css({background: '#363636'})}>
          <Tabs
            selectedTabClassName={css({
              background: '#363636',
              color: 'white',
              borderTop: '5px solid #FFE001'
            })}
            selectedTabPanelClassName={css({
              display: 'block',
              background: '#363636',
              paddingTop: 30,
              paddingBottom: 70
            })}
          >
            <Flex justifyContent="center" className={css({backgroundColor: 'white'})}>
              <SiteContainer edgeToEdge className={css({overflowX: 'scroll'})}>
                <TabList
                  className={css({
                    marginBottom: 0,
                    marginLeft: 0,
                    width: '100%',
                    display: 'flex'
                  })}
                >
                  {renderTabs(customerTypeList)}
                </TabList>
              </SiteContainer>
            </Flex>

            <Flex justifyContent="center">
              <SiteContainer>
                {renderTabPanel(customerTypeList)}
              </SiteContainer>
            </Flex>
          </Tabs>
        </div>
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
