import React from 'react'
import { css } from 'emotion'
import R from 'ramda'
import Link from 'gatsby-link'

import SmallText from './SmallText'
import H4 from './H4'
import Flex from './Flex'
import Box from './Box'
import { space, colors } from '../constants/theme'

const SegmentLink = ({ title, text, icon, link }) => {
  return (
    <Flex position="relative">
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
}

export default SegmentLink

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
