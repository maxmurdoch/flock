import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'

import H2 from './H2'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'
import ProductTabItem from './ProductTabItem'

const mapIndex = R.addIndex(R.map)

class ProductTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: props.children[0].props.label
    }
  }

  onClickTabItem = tab => {
    this.setState({activeTab: tab})
  }
  render() {
    const {
      onClickTabItem,
      state: {activeTab},
      props: {title, description, children}
    } = this
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

            <Flex flexDirection="column" >
              <ol
                className={css({
                  borderBottom: '1px solid #ccc',
                  marginLeft: 0
                })}
              >
                {children.map(child => {
                  const {label} = child.props

                  return (
                    <ProductTabItem
                      activeTab={activeTab}
                      key={label}
                      label={label}
                      onClick={onClickTabItem}
                    />
                  )
                })}
              </ol>
              <div>
                {children.map(child => {
                  if (child.props.label === activeTab)
                    return child.props.children
                })}
              </div>
            </Flex>
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
