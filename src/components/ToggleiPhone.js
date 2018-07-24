import React, {Component} from 'react'
import {withPrefix} from 'gatsby-link'
import PropTypes from 'prop-types'
import {inc, addIndex, map, nth, path, F, equals, length, gte} from 'ramda'
import {css, cx, keyframes} from 'emotion'

import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import H3 from './H3'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhone from '../images/phones/iphone-background.png'
import {
  screenWidths,
  phoneWidths,
  colors,
  space,
  breakpoints
} from '../constants/theme'

const mapIndex = addIndex(map)

class ToggleiPhone extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      loopTimerId: null,
      isHovered: []
    }
    this.stepLoop = this.stepLoop.bind(this)
    this.playLoop = this.playLoop.bind(this)
    this.pauseLoop = this.pauseLoop.bind(this)
    this.chooseIndex = this.chooseIndex.bind(this)
  }

  stepLoop() {
    const {list} = this.props
    const {activeIndex} = this.state

    this.setState({
      activeIndex: gte(inc(activeIndex), length(list)) ? 0 : inc(activeIndex)
    })
  }

  chooseIndex(index) {
    this.pauseLoop()
    this.setState({
      activeIndex: index
    })
  }

  playLoop() {
    this.setState({
      loopTimerId: window.setInterval(this.stepLoop, 3000)
    })
  }

  pauseLoop() {
    this.setState({
      loopTimerId: window.clearInterval(this.state.loopTimerId)
    })
  }

  componentDidMount() {
    this.playLoop()
    this.setState({
      isHovered: mapIndex(F, this.props.list)
    })
  }

  render() {
    const {title, description, list} = this.props

    return (
      <Flex
        background="transparent"
        justifyContent="center"
        pt={[3, 5]}
        overflow="hidden"
      >
        <SiteContainer>
          <Flex flexWrap={true}>
            <Box width={['100%']} order={[0, 1]}>
              <Box width={['100%', '50%']} pb={[2, 4]}>
                <H2 color="yellow">{title}</H2>
                <BodyText color="white">{description}</BodyText>
              </Box>
            </Box>

            <Box width={['100%', '50%']} order={2} pb={[3, 5]}>
              <Box width={['100%', '100%', '66.66%']}>
                <ol
                  className={css({
                    marginLeft: 0,
                    listStyleType: 'none'
                  })}
                >
                  {mapIndex(({title, text}, index) => {
                    return (
                      <li
                        className={css({
                          marginBottom: nth(3, space),
                          borderBottom: `1px solid ${colors.white}`,
                          paddingBottom: nth(3, space),
                          '&:last-of-type': {
                            borderBottom: 0,
                            paddingBottom: 0,
                            marginBottom: 0
                          }
                        })}
                        key={index}
                      >
                        <Flex
                          flexDirection="column"
                          style={{
                            borderLeft: equals(this.state.activeIndex, index)
                              ? `3px solid ${colors.yellow}`
                              : '3px solid transparent'
                          }}
                          className={css({
                            cursor: path(['isHovered', index], this.state)
                              ? 'pointer'
                              : 'default',
                            paddingLeft: nth(1, space),
                            marginLeft: `-${nth(1, space)}`,
                            '&:hover .title': {
                              color: `${colors.yellow} !important`
                            },
                            '&:hover': {
                              cursor: 'pointer'
                            }
                          })}
                          onClick={() => this.chooseIndex(index)}
                        >
                          <H3
                            color={
                              equals(this.state.activeIndex, index)
                                ? colors.yellow
                                : colors.white
                            }
                            className="title"
                          >
                            {title}
                          </H3>
                          <SmallText color="white">{text}</SmallText>
                        </Flex>
                      </li>
                    )
                  }, list)}
                </ol>
              </Box>
            </Box>
            <Box
              justifyContent="center"
              order={[1, 3]}
              zIndex="0"
              width={['100%', '50%']}
            >
              <Flex justifyContent="center" position="relative">
                <div className={style.container}>
                  {mapIndex(
                    ({image}, index) => (
                      <img
                        key={index}
                        className={cx(
                          style.animated,
                          equals(index, this.state.activeIndex)
                            ? style.fadeInRight
                            : style.fadeOutRight,
                          style.screen
                        )}
                        src={withPrefix(image)}
                      />
                    ),
                    list
                  )}
                  <img src={iPhone} className={style.phone} />
                </div>
              </Flex>
            </Box>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

const animations = {
  fadeInRight: keyframes`
    from {
      opacity: 1;
      transform: translate3d(100%, 0, 0) rotate(14deg);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(7deg);
    }
`,
  fadeOutRight: keyframes`
    from {
      z-index: 0;
      opacity: 1;
      transform: rotate(7deg);
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate(14deg);
    }
`
}

const style = {
  container: css({
    position: 'relative',
    width: '12rem',
    borderRadius: '34px',
    boxShadow:
      '-80px 40px 100px rgba(0,0,0,0.15), -50px 20px 60px rgba(0,0,0,0.15), -20px 10px 20px rgba(0,0,0,0.15), inset 20px 0px 12px 16px rgba(0, 0, 0, 0.37)',
    [`@media (min-width: ${nth(0, breakpoints)})`]: {
      borderRadius: '46px',
      width: '16rem'
    },
    [`@media (min-width: ${nth(1, breakpoints)})`]: {
      borderRadius: '53px',
      width: '18rem'
    },
    [`@media (min-width: ${nth(2, breakpoints)})`]: {
      borderRadius: '60px'
    }
  }),
  screen: css({
    transform: 'rotate(7deg)',
    width: '9rem',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    top: 0,
    [`@media (min-width: ${nth(0, breakpoints)})`]: {
      top: '-100px',
      left: 24,
      right: 24
    },
    [`@media (min-width: ${nth(1, breakpoints)})`]: {
      top: '-105px',
      left: 25,
      width: '85%'
    }
  }),
  phone: css({
    transform: 'rotate(7deg)',
    position: 'absolute',
    top: 0,
    width: '12rem',
    borderRadius: '34px',
    boxShadow:
      '-80px 40px 100px rgba(0,0,0,0.15), -50px 20px 60px rgba(0,0,0,0.15), -20px 10px 20px rgba(0,0,0,0.15), inset 20px 0px 12px 16px rgba(0, 0, 0, 0.37)',
    [`@media (min-width: ${nth(0, breakpoints)})`]: {
      top: '-126px',
      borderRadius: '46px',
      width: '16rem'
    },
    [`@media (min-width: ${nth(1, breakpoints)})`]: {
      borderRadius: '53px',
      width: '18rem'
    }
  }),
  animated: css({
    animationDuration: '500ms',
    animationFillMode: 'both'
  }),
  fadeOutRight: css({
    zIndex: 0,
    animationName: animations.fadeOutRight
  }),
  fadeInRight: css({
    zIndex: 1,
    animationName: animations.fadeInRight
  })
}

ToggleiPhone.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default ToggleiPhone
