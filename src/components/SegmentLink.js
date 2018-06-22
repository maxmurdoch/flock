import React, {Component} from 'react'
import {css} from 'emotion'
import R from 'ramda'
import Link from 'gatsby-link'

import ArrowText from './ArrowText'
import SmallText from './SmallText'
import H4 from './H4'
import Flex from './Flex'
import Box from './Box'
import {fontFamilies, space, colors} from '../constants/theme'

class SegmentLink extends Component {
  constructor() {
    super()
    this.state = {
      isHovered: false
    }
  }

  render() {
    const {title, text, icon, link} = this.props

    return (
      <Flex position="relative" zIndex="0">
        <Link
          onMouseOver={() => {
            this.setState({isHovered: true})
          }}
          onMouseOut={() => {
            this.setState({isHovered: false})
          }}
          className={styles.link}
          to={link}
        >
          <img
            className={css({
              marginTop: '0.5rem',
              marginBottom: '1rem',
              height: '2rem'
            })}
            src={icon}
          />
          <Box>
            <ArrowText isHovered={this.state.isHovered}>
              <H4 tag="h3">{title}</H4>
            </ArrowText>
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
}

export default SegmentLink

const styles = {
  link: css({
    zIndex: 1,
    display: 'flex',
    fontFamily: fontFamilies.chivo,
    backgroundColor: colors.backgrounds.light,
    flexWrap: 'wrap',
    padding: R.nth(2, space),
    color: 'initial',
    textDecoration: 'none',
    transition: '150ms transform ease-in-out',
    '&:hover': {
      transform: 'translateY(-10px)'
    }
  })
}
