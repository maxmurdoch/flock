import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css, injectGlobal, cx} from 'react-emotion'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import {colors, boxShadows, breakpoints, fontFamilies} from '../constants/theme'
import Text from './Text'

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
          <Text
            mb={1}
            className={cx(
              css`
                ${styles.text};
              `
            )}
          >
            {mainText}
          </Text>
          <PrimaryButton onClick={download}>
            <ArrowText moveOnHover={false}>
              <p
                className={css({
                  fontSize: 17
                })}
              >
                {buttonText}
              </p>
            </ArrowText>
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
    backgroundSize: 'cover'
  }),

  text: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 17px;
    line-height: 34px;
    margin-bottom: 40px;
    text-transform: uppercase;
    max-width: 75%;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      text-transform: none;
      font-size: 24px;
      line-height: 34px;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
      line-height: 44px;
    }
    `
}

const style = {}

injectGlobal`
  h2 {
    ${style.text}
  }
`
