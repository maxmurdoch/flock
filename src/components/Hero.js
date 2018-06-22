import React from 'react'
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
import iPhone from '../../static/images/uploads/white-phone-cropped@2x.png'

const Hero = ({
  textColor = colors.black,
  headerClassName,
  header,
  description,
  button
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      flex="1 1 auto"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        className={headerClassName}
        flex="1 1 auto"
        overflow="hidden"
      >
        <SiteContainer>
          <Flex alignItems="center" mt={[3, 5]}>
            <Box width={['100%', '50%']}>
              <H1 color={textColor} mb={[2, 3]}>
                {header}
              </H1>
              <BodyText color={textColor} mb={[2, 3]}>
                {description}
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
            <Flex
              alignItems="center"
              justifyContent="center"
              width={['100%', '50%']}
            >
              <img src={iPhone} className={style.iphone} />
            </Flex>
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
  textColor: PropTypes.string,
  headerClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
}

const style = {
  iphone: css({
    marginBottom: 0
  })
}
