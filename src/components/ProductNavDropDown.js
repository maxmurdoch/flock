import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import {Collapse} from 'react-collapse'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import ProductLink from './ProductLink'
import {colors} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const ProductNavDropDown = ({productsIsOpen}) => {
  return (
    <Collapse
      isOpened={productsIsOpen}
      className={css({width: '100%'})}
      springConfig={{stiffness: 1000, damping: 50}}
    >
      <Flex
        justifyContent="center"
        width="100%"
        background={colors.backgrounds.dark}
      >
        <SiteContainer>
          <Flex alignItems="stretch">
            {mapIndex(
              ({image, to, text}, index) => (
                <Box width="33.33%" key={index}>
                  <ProductLink to={to} image={image} text={text} />
                </Box>
              ),
              [
                {
                  to: '/products/commercial',
                  image: '/images/uploads/commercial-pilot.svg',
                  text: 'Commercial pilot'
                },
                {
                  to: '/products/trainee',
                  image: '/images/uploads/trainee-pilot.svg',
                  text: 'Trainee pilot'
                },
                {
                  to: '/products/recreational',
                  image: '/images/uploads/recreational-pilot.svg',
                  text: 'Recreational pilot'
                }
              ]
            )}
          </Flex>
        </SiteContainer>
      </Flex>
    </Collapse>
  )
}

export default ProductNavDropDown
