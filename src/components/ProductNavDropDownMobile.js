import React from 'react'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import PrimaryButton from './NavPrimaryButton'
import SecondaryButton from './NavSecondaryButton'
import {colors} from '../constants/theme'

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
            <Flex flexDirection="column" mb="20px" key={index}>
              <PrimaryButton to={to} title={text} hasIcon={hasIcon} />
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
