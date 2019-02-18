import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import {Collapse} from 'react-collapse'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import NavButton from './NavButton'
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
        pt={40}
        pb={40}
      >
        <SiteContainer>
          <Flex alignItems="space-between" justifyContent='space-between'>
            {mapIndex(
              ({to, text}, index) => (
                <Flex width="25%" key={index} m={'5px'}>
                  <NavButton to={to}  title={text} flexGrow={1}/>
                </Flex>
              ),
              [
                {
                  to: '/insurance/commercial',
                  image: '/images/uploads/commercial-pilot.svg',
                  text: 'COMMERCIAL OPERATORS'
                },
                {
                  to: '/insurance/trainee',
                  image: '/images/uploads/trainee-pilot.svg',
                  text: 'PILOTS IN TRAINING'
                },
                {
                  to: '/insurance/recreational',
                  image: '/images/uploads/recreational-pilot.svg',
                  text: 'RECREATIONAL PILOT'
                },
                {
                  to: '/insurance/recreational',
                  image: '/images/uploads/recreational-pilot.svg',
                  text: 'DRONE ENTERPRISES'
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
