import React from 'react'
import {css} from 'emotion'
import R from 'ramda'

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
import {colors, space} from '../constants/theme'

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

const Footer = ({containerClassName}) => {
  const firstFooterLinks = [
    {
      to: '/',
      text: 'Home'
    },
    {
      to: '/products/commercial',
      text: 'Commercial pilots'
    },
    {
      to: '/products/trainee',
      text: 'Trainee pilots'
    },
    {
      to: '/products/hobbyist',
      text: 'Hobbyist pilots'
    }
  ]

  const secondFooterLinks = [
    {
      to: '/about',
      text: 'About us'
    },
    {
      to: 'https://help.flockcover.com',
      text: 'Support'
    },
    {
      to: 'https://help.flockcover.com',
      text: 'FAQ'
    },
    {
      to: 'https://flockcover.workable.com',
      text: 'Careers'
    },
    {
      to: '/media-pack',
      text: 'Media pack'
    },
    {
      to: 'http://help.flockcover.com/legal/terms-of-use',
      text: 'Terms of Use'
    },
    {
      to: 'http://help.flockcover.com/legal/privacy-policy',
      text: 'Cookies Policy'
    },
    {
      to: 'http://help.flockcover.com/legal/cookies-policy',
      text: 'Privacy Policy'
    }
  ]

  return (
    <Flex
      className={containerClassName}
      background={colors.backgrounds.dark}
      justifyContent="center"
      pt={[1, 3]}
      pb={[1, 3]}
    >
      <SiteContainer>
        <Flex flexWrap={true}>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Products
              </SmallText>
            </Box>
            {mapIndex(({to, text}, index) => {
              return (
                <Link className={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, firstFooterLinks)}
          </Flex>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Company
              </SmallText>
            </Box>
            {mapIndex(({to, text}, index) => {
              return (
                <Link className={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, secondFooterLinks)}
          </Flex>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <Box pb={2}>
              <SmallText tag="h3" color="white" mb={0} fontWeight={700}>
                Got a question? Get in touch:
              </SmallText>
            </Box>
            <Link to="mailto:hello@flockcover.com" className={styles.link}>
              <SmallText>hello@flockcover.com</SmallText>
            </Link>
            <Link to="tel:+44 (0) 1234 480260" className={styles.header}>
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
          </Flex>
        </Flex>
        <Flex borderTop="1px solid white" pt={3} mt={3} pb={3} flexWrap={true}>
          <Box width={['100%', '33.33%']} mb={[2, 0]}>
            <img src={logo} className={css({marginBottom: 0})} />
          </Box>
          <Box width={['100%', '33.33%']} mb={[2, 0]}>
            <SmallText fontWeight={700} color="white">
              Flock Cover is regulated by the FCA.
            </SmallText>
            <SmallText color="white">
              <Link
                to="https://help.flockcover.com/legal/how-is-flock-regulated"
                className={styles.link}
              >
                Click here
              </Link>
              &nbsp;to learn what that means
            </SmallText>
          </Box>
          <Box width={['100%', '33.33%']}>
            <SmallText color="white">
              © 2017 Flock Ltd. All Rights Reserved. <br /> Company number
              9503380
            </SmallText>
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
  })
}
