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
  state = {
    active: 0,
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
                  mb={2}
                  color={colors.white}
                  className={styles.quote}
                >
                  {R.prop('quote', activeTestimonial)}
                </BodyText>
                <SmallText
                  textAlign="center"
                  fontWeight="700"
                  color={colors.white}
                  mb={3}
                >
                  — {R.prop('author', activeTestimonial)}
                </SmallText>
              </Box>
            </Flex>
            <Flex
              flexWrap={true}
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              {mapIndex(({ quote, author, image }, index) => {
                const isActive = R.equals(index, this.state.active)
                const button = css({
                  padding: 0,
                  margin: 10,
                  width: 32,
                  height: 32,
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  outline: 0,
                  '&:hover .dot': {
                    padding: 10,
                    background: 'rgba(255, 255, 255, 1)',
                  },
                })
                const dot = css({
                  padding: 8,
                  transition:
                    '200ms padding ease-in-out, 200ms background ease-in-out',
                  borderRadius: '100%',
                  background: 'rgba(255, 255, 255, 0.6)',
                })
                const activeDot = css({
                  padding: 12,
                  background: 'rgba(255, 255, 255, 1)',
                })

                return (
                  <button
                    className={button}
                    onClick={event => {
                      event.preventDefault()

                      return this.setState({
                        active: index,
                      })
                    }}
                  >
                    <div
                      className={`${dot} ${isActive ? activeDot : null} dot`}
                    />
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
