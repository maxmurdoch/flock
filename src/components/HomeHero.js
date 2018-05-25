import React from 'react'
import { css } from 'emotion'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Box from './Box'
import Flex from './Flex'
import PrimaryButton from './PrimaryButton'
import Text from './Text'
import SmallText from './SmallText'
import BodyText from './BodyText'
import allianz from '../images/logo/allianz/black.png'
import tick from '../images/icons/black-tick.png'
import support from '../images/icons/support.png'
import bigFlock from '../images/big-arrow.svg'
import { colors } from '../constants/theme'

const HomeHero = ({ header, description, button }) => {
  return (
    <Flex
      height="calc(100vh)"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      flex="1 1 auto"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        background={colors.backgrounds.light}
        flex="1 1 auto"
        backgroundImage={bigFlock}
        backgroundRepeat="no-repeat"
        backgroundPosition="bottom right"
      >
        <SiteContainer>
          <Box width={['100%', '50%']}>
            <H1 mb={3}>{header}</H1>
            <BodyText mb={3}>{description}</BodyText>
            <PrimaryButton to={button.to}>{button.text}</PrimaryButton>
          </Box>
        </SiteContainer>
      </Flex>
      <Flex justifyContent="center">
        <SiteContainer>
          <Flex
            pt={3}
            pb={3}
            background={colors.white}
            borderBottom="1px solid black"
            width="100%"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <SmallText>Underwritten by</SmallText>
              <img
                className={css({
                  marginLeft: '0.5rem',
                  width: '5rem',
                  marginBottom: 0,
                })}
                src={allianz}
              />
            </Flex>
            <Flex alignItems="center">
              <img
                className={css({
                  marginBottom: 0,
                  marginRight: '0.5rem',
                  width: '1rem',
                })}
                src={tick}
              />
              <SmallText>FCA & CAA regulated</SmallText>
            </Flex>
            <Flex alignItems="center">
              <img
                className={css({
                  marginBottom: 0,
                  marginRight: '0.5rem',
                  width: '1rem',
                })}
                src={support}
              />
              <SmallText>24/7 customer support</SmallText>
            </Flex>
          </Flex>
        </SiteContainer>
      </Flex>
    </Flex>
  )
}

export default HomeHero
