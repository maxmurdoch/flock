import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import PrimaryButton from './PrimaryButton'
import {breakpoints, fontFamilies, colors} from '../constants/theme'
import Text from './Text'

const PromotionBanner = ({
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
      style={{backgroundImage: `url(${image})`}}
      className={css(styles.background)}
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
          <Text mb={1} className={css(styles.text)}>
            {mainText}
          </Text>
          {buttonText && buttonUrl && (
            <PrimaryButton
              to={buttonUrl}
              track={buttonTrack}
              title={buttonText}
              color={buttonColor || 'yellow'}
            />
          )}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default PromotionBanner

const styles = {
  background: `
    position: relative;
    background-size: cover;
    background-position-x: right;
    background-position-y: center;

    @media (max-width: ${R.nth(1, breakpoints)}) {
      background: ${colors.yellow}
    }
  `,

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
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
      line-height: 44px;
      max-width: 70%;
    }
    `
}
