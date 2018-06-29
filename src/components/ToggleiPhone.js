import React, {Component} from 'react'
import {withPrefix} from 'gatsby-link'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'emotion'

import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import H3 from './H3'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {colors, space, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

class ToggleiPhone extends Component {
  state = {
    activeIndex: 0,
    isHovered: []
  }

  componentDidMount() {
    this.setState({
      isHovered: mapIndex(R.F, this.props.list)
    })
  }

  render() {
    const {title, description, list} = this.props

    return (
      <Flex background="transparent" justifyContent="center" pt={[2, 5]}>
        <SiteContainer>
          <Flex flexWrap={true}>
            <Box width={['100%']} order={[0, 1]}>
              <Box width={['100%', '50%']} pb={[2, 4]}>
                <H2 color="yellow">{title}</H2>
                <BodyText color="white">{description}</BodyText>
              </Box>
            </Box>

            <Box width={['100%', '50%']} order={[2, 2]} pb={[3, 5]}>
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
                          marginBottom: R.nth(3, space),
                          borderBottom: `1px solid ${colors.white}`,
                          paddingBottom: R.nth(3, space),
                          '&:last-of-type': {
                            borderBottom: 0,
                            paddingBottom: 0,
                            marginBottom: 0
                          }
                        })}
                        key={index}
                      >
                        <Flex
                          onMouseEnter={() => {
                            this.setState(previousState => {
                              const newIsHovered = R.update(
                                index,
                                true,
                                previousState.isHovered
                              )

                              return R.assoc(
                                'isHovered',
                                newIsHovered,
                                previousState
                              )
                            })
                          }}
                          onMouseLeave={() => {
                            this.setState(previousState => {
                              const newIsHovered = R.update(
                                index,
                                false,
                                previousState.isHovered
                              )

                              return R.assoc(
                                'isHovered',
                                newIsHovered,
                                previousState
                              )
                            })
                          }}
                          flexDirection="column"
                          style={{
                            borderLeft: R.equals(this.state.activeIndex, index)
                              ? `3px solid ${colors.yellow}`
                              : '3px solid transparent'
                          }}
                          className={css({
                            cursor: R.path(['isHovered', index], this.state)
                              ? 'pointer'
                              : 'default',
                            paddingLeft: R.nth(1, space),
                            marginLeft: `-${R.nth(1, space)}`
                          })}
                          onClick={() => {
                            return this.setState({activeIndex: index})
                          }}
                        >
                          <H3
                            color={
                              R.or(
                                R.path(['isHovered', index], this.state),
                                R.equals(this.state.activeIndex, index)
                              )
                                ? colors.yellow
                                : colors.white
                            }
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
              <Flex justifyContent="center">
                <Box width={['100%']} position="relative">
                  <img
                    className={style.image}
                    src={withPrefix(
                      R.path([this.state.activeIndex, 'image'], list)
                    )}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

const style = {
  image: css({
    transform: 'translateX(-20px)',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      transform: 'none',
      position: 'absolute',
      top: '-100px',
      left: '-5%'
    },
    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      left: '-15%'
    }
  })
}

ToggleiPhone.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default ToggleiPhone
