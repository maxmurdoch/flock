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
import SmallText from './SmallText'
import BodyText from './BodyText'
import allianz from '../images/logo/allianz/black.png'
import tick from '../images/icons/black-tick.png'
import support from '../images/icons/support.png'
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
      <Flex position="relative" zIndex="1" justifyContent="center">
        <SiteContainer>
          <Flex
            pt={2}
            pb={2}
            background={colors.white}
            borderBottom="1px solid black"
            width="100%"
            justifyContent="space-between"
            flexDirection={['column', 'row']}
          >
            <Flex alignItems="center" mb={[2, 0]}>
              <SmallText>Underwritten by</SmallText>
              <img
                className={css({
                  marginLeft: '0.5rem',
                  width: '5rem',
                  marginBottom: 0
                })}
                src={allianz}
              />
            </Flex>
            <Flex alignItems="center" mb={[2, 0]}>
              <img
                className={css({
                  marginBottom: 0,
                  marginRight: '0.5rem',
                  width: '1rem'
                })}
                src={tick}
              />
              <SmallText>FCA & CAA regulated</SmallText>
            </Flex>
            <Flex alignItems="center" mb={0}>
              <img
                className={css({
                  marginBottom: 0,
                  marginRight: '0.5rem',
                  width: '1rem'
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

export default Hero

Hero.propTypes = {
  RightSideComponent: PropTypes.func,
  textColor: PropTypes.string,
  headerClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
}
