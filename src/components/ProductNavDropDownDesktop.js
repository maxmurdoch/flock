import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import {Collapse} from 'react-collapse'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import PrimaryButton from './NavPrimaryButton'
import SecondaryButton from './NavSecondaryButton'
import ProductLink from './ProductLink'
import {colors, breakpoints} from '../constants/theme'

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
        pt={30}
        pb={30}
      >
        <SiteContainer edgeToEdge>
          <Flex justifyContent="flex-start" alignItems="flex-start" flexWrap p={'15px'}>
            {mapIndex(
              ({to, text, options, hasIcon}, index) => (
                <Flex
                  p='5px'
                  key={index}
                  flexDirection="column"
                  className={css({
                    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
                      width: '50%'
                    },

                    '@media (min-width: 1200px)': {
                      width: '25%'
                    }
                  })}
                >
                  <Flex flexDirection="column">
                    <PrimaryButton to={to} title={text} mb={12} hasIcon={hasIcon}/>
                    {mapIndex(
                      ({to, text, icon}) => (
                        <SecondaryButton
                          to={to}
                          title={text}
                          flexGrow={1}
                          icon={icon}
                        />
                      ),
                      options
                    )}
                  </Flex>
                </Flex>
              ),
              buttonContent
            )}
          </Flex>
        </SiteContainer>
      </Flex>
    </Collapse>
  )
}

const buttonContent = [
  {
    to: '/insurance/commercial',
    text: 'COMMERCIAL OPERATOR',
    hasIcon: true,
    options: [
      {
        to: '/insurance/commercial',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      },
      {
        to: '/flyunlimited',
        text: 'Fly Unlimited',
        icon: 'FU'
      }
    ]
  },
  {
    to: '/insurance/trainee',
    text: 'TRAINEE PILOT',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      }
    ]
  },
  {
    to: '/insurance/recreational',
    text: 'RECREATIONAL PILOT',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      }
    ]
  },
  {
    to: '',
    text: 'ENTERPRISE',
    hasIcon: false,
    options: [
      {
        to: '',
        text: 'Coming soon!'
      }
    ]
  }
]

export default ProductNavDropDown
