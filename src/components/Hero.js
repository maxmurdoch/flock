import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Markdown from 'react-remarkable'
import PropTypes from 'prop-types'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import ShowIf from './ShowIf'
import BodyText from './BodyText'
import HeroFeaturesBanner from './HeroFeaturesBanner'
import {colors, breakpoints} from '../constants/theme'

const Hero = ({
  textColor = colors.dark,
  headerClassName,
  textShadow = true,
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
        <SiteContainer className={css({overflow: 'visible'})}>
          <Flex mt={[3, 5]}>
            <Flex
              justifyContent="center"
              flexDirection="column"
              width={['100%', '75%', '60%']}
              mt={[4, 5]}
              mb={[3, 6]}
            >
              <ScrollAnimation
                duration={0.5}
                animateIn="fadeInUp"
                animateOnce={true}
              >
                <H1
                  textShadow={
                    textShadow ? '0 1px 0 rgba(0, 0, 0, 0.3)' : 'none'
                  }
                  color={textColor}
                  mb={[2, 3]}
                >
                  {header}
                </H1>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                duration={0.5}
                delay={200}
                animateOnce={true}
              >
                <BodyText tag="div" color={textColor} mb={[2, 3]}>
                  <Markdown>{description}</Markdown>
                </BodyText>
              </ScrollAnimation>
              <ShowIf predicate={R.not(R.isNil(button))}>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  duration={0.5}
                  delay={400}
                  animateOnce={true}
                >
                  <Media query={`(min-width: ${R.nth(1, breakpoints)}`}>
                    {matches =>
                      matches ? (
                        <PrimaryButton to={button.to}>
                          <ArrowText moveOnHover={false}>
                            {button.text}
                          </ArrowText>
                        </PrimaryButton>
                      ) : (
                        <SecondaryButton to={button.to}>
                          <ArrowText moveOnHover={false}>
                            {button.text}
                          </ArrowText>
                        </SecondaryButton>
                      )
                    }
                  </Media>
                </ScrollAnimation>
              </ShowIf>
            </Flex>
            {R.not(R.isNil(RightSideComponent)) ? (
              <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
                {matches =>
                  matches ? (
                    <Flex
                      alignItems="flex-end"
                      justifyContent="center"
                      width={['100%', '50%']}
                    >
                      <RightSideComponent />
                    </Flex>
                  ) : null
                }
              </Media>
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
  textShadow: PropTypes.bool,
  headerClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
}
