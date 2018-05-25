import React from 'react'
import { css } from 'emotion'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import LI from './LI'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhone from '../../static/images/uploads/risk-iphone-mockup.png'
import buildingIcon from '../images/icons/icons-house.svg'
import circleIcon from '../images/icons/icons-circle.svg'
import planeIcon from '../images/icons/icons-plane.svg'
import cloudIcon from '../images/icons/icons-cloud.svg'

const HowToCalculateRisk = ({ data }) => {
  const title = 'How we calculate risk'
  const description =
    'Get much more than an insurance policy. We’ll help you fly safer by providing a risk report for your flight. Simply enter your flight’s details and instantly see surrounding hazards'

  const riskCalculationMethods = [
    {
      title: 'Inabited spaces',
      icon: buildingIcon,
    },
    {
      title: 'Ground hazards',
      icon: circleIcon,
    },
    {
      title: 'Restricted airspace',
      icon: planeIcon,
    },
    {
      title: 'Hyperlocal weather',
      icon: cloudIcon,
    },
  ]

  return (
    <Flex background="rgba(49, 49, 49, 1)" justifyContent="center" pt={5}>
      <SiteContainer>
        <Flex>
          <Box width={['100%', '50%']}>
            <img width="75%" src={iPhone} />
          </Box>
          <Box width={['100%', '50%']}>
            <H2 color="yellow">{title}</H2>
            <BodyText color="white">{description}</BodyText>
            <ul className={css({ marginLeft: 0, listStyleType: 'none' })}>
              {R.map(({ title, icon }) => {
                return (
                  <LI
                    width={['100%', '66.66%']}
                    mb={0}
                    className={css({
                      borderBottom: '1px solid white',
                      '&:last-of-type': {
                        borderBottom: 0,
                      },
                    })}
                  >
                    <Flex pt={3} pb={3}>
                      <img className={css({ marginBottom: 0 })} src={icon} />
                      <SmallText pl={2} color="white">
                        {title}
                      </SmallText>
                    </Flex>
                  </LI>
                )
              }, riskCalculationMethods)}
            </ul>
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default HowToCalculateRisk
