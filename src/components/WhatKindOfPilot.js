import React from 'react'
import Link from 'gatsby-link'
import R from 'ramda'
import { css } from 'emotion'

import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import Flex from './Flex'
import Box from './Box'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import { colors, space } from '../constants/theme'

const WhatKindOfPilot = ({ data }) => {
  const { title, description, pilots } = data

  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex mb={4}>
          <Box width={['100%', '50%']}>
            <H2 mb={2}>{title}</H2>
            <BodyText>{description}</BodyText>
          </Box>
        </Flex>
        <Flex alignItems="stretch" position="relative" zIndex={0} mb={5}>
          {R.map(({ title, icon, text, link }) => {
            return (
              <Flex position="relative" mr={2}>
                <Link className={styles.link} to={link}>
                  <img
                    className={css({
                      marginTop: '0.5rem',
                      marginBottom: '1rem',
                      height: '2rem',
                    })}
                    src={icon}
                  />
                  <Box>
                    <H4 tag="h3">{title}</H4>
                    <SmallText>{text}</SmallText>
                  </Box>
                </Link>
                <Flex
                  width="100%"
                  height="100%"
                  background={colors.yellow}
                  position="absolute"
                  zIndex={0}
                  flex="1 1 auto"
                />
              </Flex>
            )
          }, pilots)}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default WhatKindOfPilot

const styles = {
  link: css({
    zIndex: 1,
    display: 'flex',
    backgroundColor: colors.backgrounds.light,
    flexWrap: 'wrap',
    padding: R.nth(2, space),
    color: 'initial',
    textDecoration: 'none',
    transition: '150ms transform ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  }),
}
