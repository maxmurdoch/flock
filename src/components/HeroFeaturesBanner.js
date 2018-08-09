import React from 'react'
import R from 'ramda'
import {css} from 'emotion'
import Media from 'react-media'

import SiteContainer from './SiteContainer'
import SmallText from './SmallText'
import Flex from './Flex'

import {colors, breakpoints} from '../constants/theme'
import allianz from '../images/logo/allianz/black.png'
import tick from '../images/icons/black-tick.png'
import support from '../images/icons/support.png'

const HeroFeaturesBanner = () => (
  <Flex position="relative" zIndex="1" justifyContent="center">
    <SiteContainer>
      <Flex
        pt={2}
        pb={2}
        background={colors.white}
        borderBottom="1px solid black"
        width="100%"
        justifyContent="space-between"
        flexDirection={['column', 'row', 'row']}
      >
        <Flex alignItems="center" mb={['6px', 0]}>
          <SmallText>Underwritten by</SmallText>
          <img
            className={css({
              marginLeft: '0.3rem',
              width: '5rem',
              marginBottom: 0
            })}
            src={allianz}
          />
        </Flex>
        <Flex alignItems="center" mb={['6px', 0]}>
          <Media query={`(min-width: ${R.nth(0, breakpoints)})`}>
            {matches =>
              matches ? (
                <img
                  className={css({
                    marginBottom: 0,
                    marginRight: '0.5rem',
                    width: '1rem'
                  })}
                  src={tick}
                />
              ) : null
            }
          </Media>
          <SmallText>FCA & CAA regulated</SmallText>
        </Flex>
        <Flex alignItems="center" mb={0}>
          <Media query={`(min-width: ${R.nth(0, breakpoints)})`}>
            {matches =>
              matches ? (
                <img
                  className={css({
                    marginBottom: 0,
                    marginRight: '0.5rem',
                    width: '1rem'
                  })}
                  src={support}
                />
              ) : null
            }
          </Media>
          <SmallText>Instant customer support</SmallText>
        </Flex>
      </Flex>
    </SiteContainer>
  </Flex>
)

export default HeroFeaturesBanner
