import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import PropTypes from 'prop-types'
import R from 'ramda'
import Media from 'react-media'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Box from './Box'
import Flex from './Flex'
import ShowIf from './ShowIf'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import BodyText from './BodyText'
import {colors, breakpoints} from '../constants/theme'

const AboutHero = ({
  textColor = colors.dark,
  headerClassName,
  header,
  description,
  button
}) => {
  return (
    <Box
      height="100%"
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        className={headerClassName}
        flex="1 1 auto"
      >
        <SiteContainer>
          <Box width={['100%']}>
            <ScrollAnimation animateIn="fadeInUp" delay={200}>
              <H1
                textShadow="0 1px 0 rgba(0, 0, 0, 0.3)"
                textAlign={'center'}
                color={textColor}
                mb={0}
              >
                {header}
              </H1>
            </ScrollAnimation>
            <BodyText textAlign={'center'} color={textColor} mb={[2, 3]}>
              {description}
            </BodyText>
            <ShowIf predicate={button}>
              <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
                {matches =>
                  matches ? (
                    <PrimaryButton to={button.to}>{button.text}</PrimaryButton>
                  ) : (
                    <SecondaryButton to={button.to}>
                      {button.text}
                    </SecondaryButton>
                  )
                }
              </Media>
            </ShowIf>
          </Box>
        </SiteContainer>
      </Flex>
    </Box>
  )
}

export default AboutHero

AboutHero.propTypes = {
  textColor: PropTypes.string,
  headerClassName: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object,
  center: PropTypes.bool
}
