import React from 'react'
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
import LargeBodyText from './LargeBodyText'
import HeroFeaturesBanner from './HeroFeaturesBanner'
import {colors, breakpoints} from '../constants/theme'
import trackDownload from '../utils/trackDownload'

const Hero = ({
  textColor = colors.dark,
  headerClassName,
  textShadow = true,
  header,
  RightSideComponent,
  description,
  buttonOne,
  buttonTwo,
  buttonTwoAction
}) => {
  const download = () => {
    trackDownload()
    const linkAnonymousId =
      buttonOne.to + '?anonymous_id=' + analytics.user().anonymousId()
    window.open(linkAnonymousId, '_blank')
  }
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
              <LargeBodyText tag="div" color={textColor} mb={[2, 3]}>
                <Markdown>{description}</Markdown>
              </LargeBodyText>
              <Flex flexDirection={['column', 'column', 'row']}>
                <ShowIf predicate={R.not(R.isNil(buttonOne))}>
                  <Media query={`(min-width: ${R.nth(1, breakpoints)})`}>
                    {matches => {
                      return matches ? (
                        <PrimaryButton
                          onClick={download}
                          style={{marginRight: 15}}
                        >
                          <ArrowText moveOnHover={false}>
                            {buttonOne.text}
                          </ArrowText>
                        </PrimaryButton>
                      ) : (
                        <SecondaryButton onClick={download} mb={15}>
                          <ArrowText moveOnHover={false}>
                            {buttonOne.text}
                          </ArrowText>
                        </SecondaryButton>
                      )
                    }}
                  </Media>
                </ShowIf>
                <ShowIf predicate={R.not(R.isNil(buttonTwo))}>
                  <Media query={`(min-width: ${R.nth(1, breakpoints)})`}>
                    {matches => {
                      return matches ? (
                        <SecondaryButton onClick={buttonTwoAction}>
                          <ArrowText moveOnHover={false}>
                            {buttonTwo.text}
                          </ArrowText>
                        </SecondaryButton>
                      ) : (
                        <SecondaryButton onClick={buttonTwoAction}>
                          <ArrowText moveOnHover={false}>
                            {buttonTwo.text}
                          </ArrowText>
                        </SecondaryButton>
                      )
                    }}
                  </Media>
                </ShowIf>
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
  buttonOne: PropTypes.object,
  buttonTwo: PropTypes.object
}
