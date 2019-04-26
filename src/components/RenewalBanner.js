import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from '@emotion/core'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import {breakpoints, fontFamilies} from '../constants/theme'
import Text from './Text'

const RenewalBanner = ({
  image,
  mainText,
  buttonText,
  buttonUrl,
  buttonTrack,
  buttonColor
}) => {
  const download = () => {
    if (buttonTrack) analytics.track(buttonTrack)
    window.open(buttonUrl)
  }

  return (
    <Flex
      justifyContent="center"
      position="relative"
      background={`url(${image})`}
      css={styles.background}
    >
      <SiteContainer>
        <Flex
          flexWrap="wrap"
          alignItems="flex-start"
          flexDirection="column"
          pt={[3, 5]}
          pb={[3, 5]}
          pl={2}
          pr={2}
        >
          <Text
            mb={1}
            css={css`
              ${styles.text};
            `}
          >
            {mainText}
          </Text>
          {buttonText && buttonUrl && (
            <PrimaryButton
              to={buttonUrl}
              track={buttonTrack}
              title={buttonText}
              color={buttonColor || "yellow"}
            />
          )}
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
    backgroundSize: 'cover'
  }),

  renewalButton: `
    align-self: 'flex-start';
    cursor: pointer;
    @media (max-width: ${R.nth(0, breakpoints)}) {
      text-align: left;
    }
  `,

  text: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    margin-bottom: 40px;
    max-width: 100%;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      text-transform: none;
      font-size: 29px;
      line-height: 34px;
      max-width: 87%;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
      line-height: 44px;
      max-width: 75%;
    }
    `
}
