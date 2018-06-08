import React, { Component } from 'react'
import R from 'ramda'
import Media from 'react-media'
import { css } from 'emotion'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import backArrow from '../images/icons/back-arrow.svg'
import { colors, breakpoints } from '../constants/theme'

const mapIndex = R.addIndex(R.map)

class Testimonial extends Component {
  constructor() {
    super()
    this.state = {
      active: 0,
    }
  }

  render() {
    const { testimonials } = this.props
    const activeTestimonial = R.nth(this.state.active, testimonials)

    return (
      <Flex justifyContent="center" position="relative" zIndex="0">
        <SiteContainer>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            background={`url(${R.prop('image', activeTestimonial)})`}
            className={styles.background}
            pt={4}
            pb={4}
          >
            <Flex flexWrap="wrap" justifyContent="center" zIndex={2}>
              <Box width={['100%', '75%']}>
                <BodyText
                  textAlign="center"
                  mb={3}
                  color={colors.white}
                  className={styles.quote}
                >
                  {R.prop('quote', activeTestimonial)}
                </BodyText>
              </Box>
            </Flex>
            <Flex flexWrap={true} justifyContent="center" zIndex={2}>
              {mapIndex(({ quote, author, image }, index) => {
                const isActive = R.equals(index, this.state.active)
                return isActive ? (
                  <button
                    className={styles.button}
                    onClick={event => {
                      event.preventDefault()

                      return this.setState({
                        active: index,
                      })
                    }}
                  >
                    <Box
                      pl={2}
                      pr={2}
                      pb={2}
                      borderBottom={`3px solid ${colors.yellow}`}
                    >
                      <SmallText fontWeight="700" color={colors.white}>
                        {author}
                      </SmallText>
                    </Box>
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={event => {
                      event.preventDefault()

                      return this.setState({
                        active: index,
                      })
                    }}
                  >
                    <Box pl={2} pr={2} pb={2}>
                      <SmallText fontWeight="700" color={colors.white}>
                        {author}
                      </SmallText>
                    </Box>
                  </button>
                )
              }, testimonials)}
            </Flex>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

export default Testimonial

const styles = {
  button: css({
    background: 'none',
    border: 'none',
  }),
  background: css({
    position: 'relative',
    zIndex: 1,
    backgroundSize: 'cover',
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      content: "''",
      display: 'block',
      top: 0,
      zIndex: 0,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
  }),
  quote: css({
    '&::before': {
      content: "'“'",
      display: 'inline-block',
    },
    '&::after': {
      content: "'”'",
      display: 'inline-block',
    },
  }),
}
