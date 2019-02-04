import React from 'react'
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

const mapIndex = R.addIndex(R.map)

const ProductTabs = ({title, description}) => (
  <Flex justifyContent="center">
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']}>
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
)

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
