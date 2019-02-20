import React from 'react'
import Markdown from 'react-remarkable'
import PropTypes from 'prop-types'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import BodyText from './BodyText'
import HeroFeaturesBanner from './HeroFeaturesBanner'
import PrimaryButton from './PrimaryButton'
import {colors, breakpoints} from '../constants/theme'
import {downloadClickHandler} from '../utils/trackDownload'

const Hero = ({
  textColor = colors.dark,
  headerClassName,
  textShadow = true,
  header,
  RightSideComponent,
  description,
  buttons = [],
  features = []
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
              alignItems="flex-start"
              width={['100%', '75%', '64%']}
              mt={[4, 5]}
              mb={[3, 6]}
            >
              <H1
                textShadow={textShadow ? '0 1px 0 rgba(0, 0, 0, 0.3)' : 'none'}
                color={textColor}
                mb={[2, 2, 3]}
              >
                {header}
              </H1>
              <BodyText tag="div" color={textColor} mb={[2, 3]}>
                {description}
              </BodyText>
              <Flex flexDirection={['column', 'column', 'row']}>
                {buttons.map((button, idx) => {
                  return (
                    <PrimaryButton
                      key={idx}
                      to={button.to}
                      color={button.color}
                      external={button.external}
                      branch={button.branch}
                      track={button.track}
                      mb={15}
                      mr={15}
                      title={button.title}
                    />
                  )
                })}
              </Flex>
            </Flex>
            {R.not(R.isNil(RightSideComponent)) ? (
              <Media query={`(min-width: ${R.nth(0, breakpoints)})`}>
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
      <HeroFeaturesBanner features={features} />
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
  buttonOne: PropTypes.object,
  buttonTwo: PropTypes.object
}
