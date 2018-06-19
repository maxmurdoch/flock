import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'emotion'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {colors, boxShadows} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

class Testimonial extends Component {
  state = {
    active: 0
  }

  render() {
    const {testimonials} = this.props
    const activeTestimonial = R.nth(this.state.active, testimonials)

    return (
      <Flex justifyContent="center" position="relative" zIndex="0">
        <SiteContainer>
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            background={`url(${R.prop('image', activeTestimonial)})`}
            className={styles.background}
            pt={[3, 5]}
            pb={[2, 3]}
            pl={[0, 0]}
            pr={[0, 0]}
          >
            <Flex flexWrap="wrap" justifyContent="center" zIndex={2}>
              <Box width={['100%', '75%']}>
                <BodyText
                  textShadow="0 1px 0 rgba(0, 0, 0, 0.2)"
                  textAlign="center"
                  mb={2}
                  color={colors.white}
                  className={styles.quote}
                >
                  {R.prop('quote', activeTestimonial)}
                </BodyText>
                <SmallText
                  textShadow="0 1px 0 rgba(0, 0, 0, 0.2)"
                  textAlign="center"
                  fontWeight={700}
                  color={colors.white}
                  mb={[2, 3]}
                >
                  {`— ${R.prop('author', activeTestimonial)}`}
                </SmallText>
              </Box>
            </Flex>
            <Flex
              flexWrap={true}
              justifyContent="center"
              alignItems="center"
              zIndex={2}
            >
              {mapIndex((_, index) => {
                const isActive = R.equals(index, this.state.active)
                const button = css({
                  padding: 0,
                  margin: 10,
                  width: 24,
                  height: 24,
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  outline: 0,
                  '&:hover .dot': {
                    padding: 8,
                    background: 'rgba(255, 255, 255, 1)'
                  }
                })
                const dot = css({
                  padding: 6,
                  transition:
                    '200ms padding ease-in-out, 200ms background ease-in-out',
                  borderRadius: '100%',
                  background: 'rgba(255, 255, 255, 0.6)'
                })
                const activeDot = css({
                  padding: 10,
                  background: 'rgba(255, 255, 255, 1)'
                })

                return (
                  <button
                    key={index}
                    className={button}
                    onClick={event => {
                      event.preventDefault()

                      return this.setState({
                        active: index
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

Testimonial.propTypes = {
  testimonials: PropTypes.array
}

const styles = {
  button: css({
    background: 'none',
    border: 'none'
  }),
  background: css({
    boxShadow: R.nth(0, boxShadows),
    position: 'relative',
    zIndex: 1,
    backgroundSize: 'cover',
    '&::before': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      content: '\'\'',
      display: 'block',
      top: 0,
      zIndex: 0,
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  }),
  quote: css({
    '&::before': {
      content: '\'“\'',
      display: 'inline-block'
    },
    '&::after': {
      content: '\'”\'',
      display: 'inline-block'
    }
  })
}
