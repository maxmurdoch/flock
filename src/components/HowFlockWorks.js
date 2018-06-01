import React, { Component } from 'react'
import R from 'ramda'
import { css } from 'emotion'

import Flex from './Flex'
import Box from './Box'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhoneX from '../../static/images/uploads/iphone-x.png'
import { colors, space } from '../constants/theme'
import ToggleActive from '../components/ToggleActive'

const mapIndex = R.addIndex(R.map)

class HowFlockWorks extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
      isHovered: [],
    }
  }

  componentDidMount() {
    this.setState({
      isHovered: mapIndex(R.F, this.props.data.listOfHow),
    })
  }

  render() {
    const {
      data: { title, description, listOfHow },
    } = this.props

    return (
      <Flex background="rgba(49, 49, 49, 1)" justifyContent="center" pt={5}>
        <SiteContainer>
          <Flex flexWrap={true}>
            <Box width={['100%', '50%']}>
              <Box pb={4}>
                <H2 color="yellow">{title}</H2>
                <BodyText color="white">{description}</BodyText>
              </Box>
              <Box width="66.66%">
                <ol
                  className={css({
                    marginLeft: 0,
                    listStyleType: 'none',
                  })}
                >
                  {mapIndex(({ title, text }, index) => {
                    return (
                      <li
                        className={css({
                          marginBottom: R.nth(3, space),
                          borderBottom: `1px solid ${colors.white}`,
                          paddingBottom: R.nth(3, space),
                          '&:last-of-type': {
                            borderBottom: 0,
                          },
                        })}
                      >
                        <Flex
                          onMouseEnter={() => {
                            this.setState((previousState, props) => {
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
                            this.setState((previousState, props) => {
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
                              : `3px solid transparent`,
                          }}
                          className={css({
                            cursor: R.path(['isHovered', index], this.state)
                              ? 'pointer'
                              : 'default',
                            paddingLeft: R.nth(1, space),
                            marginLeft: `-${R.nth(1, space)}`,
                          })}
                          onClick={() => {
                            return this.setState({ activeIndex: index })
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
                  }, listOfHow)}
                </ol>
              </Box>
            </Box>
            <Box width="50%" position="relative" zIndex="0">
              <img
                className={css({
                  zIndex: 1,
                  position: 'absolute',
                  transform: 'rotate(14deg)',
                  width: '46%',
                  left: '36%',
                  top: '12%',
                })}
                src={R.path([this.state.activeIndex, 'image'], listOfHow)}
              />
              <img
                className={css({
                  position: 'absolute',
                })}
                src={iPhoneX}
              />
            </Box>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

export default HowFlockWorks
