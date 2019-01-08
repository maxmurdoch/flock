import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'emotion'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import {colors, boxShadows} from '../constants/theme'
import H2 from './H2'

const RenewalBanner = ({image, mainText, buttonText}) => {
  const download = () => {
    trackDownload()
    const linkAnonymousId =
      buttonOne.to + '?anonymous_id=' + analytics.user().anonymousId()
    window.open(linkAnonymousId, '_blank')
  }

  return (
    <Flex
      justifyContent="center"
      position="relative"
      zIndex="0"
      background={`url(${image})`}
      className={styles.background}
    >
      <SiteContainer>
        <Flex
          flexWrap="wrap"
          justifyContent="flex-start"
          pt={[3, 5]}
          pb={[2, 3]}
          pl={2}
          pr={2}
        >
          <H2 mb={[2, 3]}>{mainText}</H2>
          <PrimaryButton onClick={download}>
            <ArrowText moveOnHover={false}>{buttonText}</ArrowText>
          </PrimaryButton>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default RenewalBanner

RenewalBanner.propTypes = {
  testimonials: PropTypes.array
}

const styles = {
  background: css({
    position: 'relative',
    zIndex: 1,
    backgroundSize: 'cover'
  })
}
