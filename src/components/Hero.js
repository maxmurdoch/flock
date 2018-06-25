import React from 'react'
import Markdown from 'react-remarkable'
import PropTypes from 'prop-types'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Box from './Box'
import Flex from './Flex'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import BodyText from './BodyText'
import HeroFeaturesBanner from './HeroFeaturesBanner'
import {colors, breakpoints} from '../constants/theme'

const Hero = ({
  textColor = colors.black,
  headerClassName,
  header,
  RightSideComponent,
  description,
  button
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      flex="1 1 auto"
      position="relative"
      zIndex="0"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        className={headerClassName}
        flex="1 1 auto"
        overflow="hidden"
      >
        <SiteContainer
          className={css({
            overflow: 'visible'
          })}
        >
          <Flex alignItems="center" mt={[3, 5]}>
            <Box width={['100%', '50%']} mt={[3, 5]} mb={[3, 6]}>
              <H1 color={textColor} mb={[2, 3]}>
                {header}
              </H1>
              <BodyText color={textColor} mb={[2, 3]}>
                <Markdown>{description}</Markdown>
              </BodyText>
              {button ? (
                <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
                  {matches =>
                    matches ? (
                      <PrimaryButton to={button.to}>
                        <ArrowText moveOnHover={false}>{button.text}</ArrowText>
                      </PrimaryButton>
                    ) : (
                      <SecondaryButton to={button.to}>
                        <ArrowText moveOnHover={false}>{button.text}</ArrowText>
                      </SecondaryButton>
                    )
                  }
                </Media>
              ) : null}
            </Box>
            {RightSideComponent ? (
              <Flex
                alignItems="center"
                justifyContent="center"
                width={['100%', '50%']}
              >
                <RightSideComponent />
              </Flex>
            ) : null}
          </Flex>
        </SiteContainer>
      </Flex>
      <HeroFeaturesBanner />
    </Flex>
  )
}

export default Hero

Hero.propTypes = {
  RightSideComponent: PropTypes.func,
  textColor: PropTypes.string,
  headerClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
}
