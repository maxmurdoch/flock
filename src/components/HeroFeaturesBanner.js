import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'emotion'
import Media from 'react-media'

import SiteContainer from './SiteContainer'
import SmallText from './SmallText'
import Flex from './Flex'

import {colors, breakpoints} from '../constants/theme'

const HeroFeaturesBanner = ({features}) => (
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
        {features.map((feature, idx) => {
          return (
            <Flex key={idx} alignItems="center" mb={['6px', 0]}>
              <Media query={`(min-width: ${R.nth(0, breakpoints)})`}>
                {matches =>
                  matches ? (
                    <img
                      className={css({
                        marginBottom: 0,
                        marginRight: '0.5rem',
                        width: '1rem'
                      })}
                      src={feature.leftIcon}
                    />
                  ) : null
                }
              </Media>
              
              <SmallText>
                {feature.title}
              </SmallText>
              
              {feature.rightIcon &&
                <img
                  className={css({
                    marginLeft: '0.3rem',
                    width: '5rem',
                    marginBottom: 0
                  })}
                  src={feature.rightIcon}
                />
              }
            </Flex>
          )
        })}
      </Flex>
    </SiteContainer>
  </Flex>
)

HeroFeaturesBanner.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      leftIcon: PropTypes.string,
      title: PropTypes.string.isRequired,
      rightIcon: PropTypes.string
    })
  )
}

export default HeroFeaturesBanner
