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

const ProductNavDropDown = () => {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      background={colors.backgrounds.dark}
      pt={30}
    >
      <SiteContainer edgeToEdge>

          {mapIndex(
            ({to, text, options, hasIcon}, index) => (
              <Flex
                mb="20px"
                key={index}
                flexDirection="column"
                className={css({
                  // [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
                  //   width: '50%'
                  // },

                  // '@media (min-width: 1200px)': {
                  //   width: '25%'
                  // }
                })}
              >
                <Flex flexDirection="column">
                  <PrimaryButton
                    to={to}
                    title={text}
                    hasIcon={hasIcon}
                  />
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

      </SiteContainer>
    </Flex>
  )
}

const buttonContent = [
  {
    to: '/insurance/commercial',
    text: 'COMMERCIAL OPERATORS',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
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
    text: 'PILOTS IN TRAINING',
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
    text: 'DRONE ENTERPRISES',
    hasIcon: false,
    options: [
      {
        to: '',
        text: 'Coming Soon'
      }
    ]
  }
]

export default ProductNavDropDown
