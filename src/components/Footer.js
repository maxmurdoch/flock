import React from 'react'
import {css} from '@emotion/core'
import * as R from 'ramda'

import logo from '../images/logo-white.svg'
import Link from './Link'
import SmallText from './SmallText'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import mediumIcon from '../images/medium-icon.svg'
import linkedInIcon from '../images/linked-in.svg'
import twitterIcon from '../images/twitter-icon.svg'
import facebookIcon from '../images/facebook-icon.svg'
import {colors, space, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const socialMediaLinks = [
  {
    to: 'https://en-gb.facebook.com/flockcover/',
    src: facebookIcon
  },
  {
    to: 'https://twitter.com/flockcover',
    src: twitterIcon
  },
  {
    to: 'https://www.linkedin.com/company/flockcover/',
    src: linkedInIcon
  },
  {
    to: 'https://blog.flockcover.com/',
    src: mediumIcon
  }
]

const Footer = ({containerCSS}) => {
  const firstFooterLinks = [
    {
      to: '/insurance/commercial',
      text: 'Commercial pilots'
    },
    {
      to: '/insurance/trainee',
      text: 'Trainee pilots'
    },
    {
      to: '/insurance/recreational',
      text: 'Recreational pilots'
    }
  ]

  const secondFooterLinks = [
    {
      to: '/about',
      text: 'About us'
    },
    {
      to: 'https://help.flockcover.com',
      text: 'FAQ'
    },
    {
      to: 'https://flockcover.workable.com',
      text: 'Jobs'
    },
    {
      to: 'https://landing.flockcover.com/flock-media-pack/',
      text: 'Media pack'
    },
    {
      to: 'https://blog.flockcover.com/',
      text: 'Blog'
    }
  ]

  const bottomFooterLinks = [
    {
      to: 'http://help.flockcover.com/legal/terms-of-use',
      text: 'Terms of Use'
    },
    {
      to: 'http://help.flockcover.com/legal/privacy-policy',
      text: 'Privacy Policy'
    },
    {
      to: 'http://help.flockcover.com/legal/cookies-policy',
      text: 'Cookies Policy'
    }
  ]

  return (
    <Flex
      css={containerCSS}
      background={colors.backgrounds.dark}
      justifyContent="center"
      pt={[1, 3]}
      pb={[1, 3]}
    >
      <SiteContainer>
        <Flex flexWrap={true}>
          <Flex css={styles.flexiFooter} width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Insurance
              </SmallText>
            </Box>
            {mapIndex(({to, text}, index) => {
              return (
                <Link css={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, firstFooterLinks)}
          </Flex>
          <Flex css={styles.flexiFooter} width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Company
              </SmallText>
            </Box>
            {mapIndex(({to, text}, index) => {
              return (
                <Link css={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, secondFooterLinks)}
          </Flex>
          <Flex css={styles.lastFlexiFooter} width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Got a question? Get in touch:
              </SmallText>
            </Box>
            <Link to="mailto:hello@flockcover.com" css={styles.link}>
              <SmallText>hello@flockcover.com</SmallText>
            </Link>
            <Link to="tel:+44 (0) 1234 480260" css={styles.header}>
              <SmallText>+44 (0) 1234 480260</SmallText>
            </Link>
            <Flex alignItems="flex-end" pt={2}>
              {R.addIndex(R.map)(({to, src}, key) => {
                return (
                  <Box key={key} pr={2}>
                    <Link to={to} target="_blank">
                      <img src={src} />
                    </Link>
                  </Box>
                )
              }, socialMediaLinks)}
            </Flex>
            <Box width={['100%', '33.33%']} mb={[2, 0]}>
              <Link to={'/'}>
                <img src={logo} css={css({marginBottom: 0})} />
              </Link>
            </Box>
          </Flex>
        </Flex>
        <Flex borderTop="1px solid white" pt={3} mt={3} pb={3} flexWrap={true}>
          <Box width={['100%', '100%']} mb={[2, 0]}>
            <Flex flexDirection="row" justifyContent="center">
              {mapIndex(({to, text}, index) => {
                return (
                  <Link css={styles.horizontalLink} to={to} key={index}>
                    <SmallText>{text}</SmallText>
                  </Link>
                )
              }, bottomFooterLinks)}
            </Flex>
            <Box pb={2} css={styles.centeredFooterText}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={100}>
                Flock Limited (FCA #785551) is an Appointed Representative of Worry+Peace (a trading name of Innovative Risk Limited, authorised and regulated by the Financial Conduct Authority, FCA #609155) who have arranged for the insurance provided by Flock to be underwritten by Allianz Global Corporate & Specialty.
              </SmallText>
            </Box>
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Footer

const styles = {
  link: css({
    color: R.prop('yellow', colors),
    textDecoration: 'none',
    paddingBottom: R.nth(2, space)
  }),
  header: css({
    color: R.prop('white', colors),
    textDecoration: 'none',
    paddingBottom: R.nth(1, space)
  }),
  horizontalLink: css({
    color: R.prop('yellow', colors),
    textDecoration: 'none',
    paddingRight: R.nth(2, space),
    marginBottom: '40px'
  }),
  centeredFooterText: css({
    margin: '0 auto',
    width: '60%'
  }),
  flexiFooter: css({
    [`@media (min-width: 24em) and (max-width: ${R.nth(1, breakpoints)})`]: {
      width: '50%',
      justifyContent: 'space-between'
    }
  }),
  lastFlexiFooter: css({
    [`@media (max-width: ${R.nth(1, breakpoints)})`]: {
      width: '100%'
    }
  })
}
