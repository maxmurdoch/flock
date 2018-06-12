import React, {Component} from 'react'
import {Collapse} from 'react-collapse'
import {css} from 'emotion'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import LI from './LI'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhone from '../../static/images/uploads/risk-iphone-mockup.png'
import downArrow from '../images/icons/small-down-arrow-white.svg'
import {colors, space} from '../constants/theme'

const mapIndex = R.addIndex(R.map)
class CalculateRiskDropDown extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: null,
      isHovered: []
    }
  }

  componentDidMount() {
    this.setState({
      isHovered: mapIndex(R.F, this.props.list)
    })
  }

  render() {
    const {title, description} = this.props
    const listOfCalculations = R.clone(this.props.list)

    return (
      <Flex
        background={colors.backgrounds.dark}
        justifyContent="center"
        pt={[2, 5]}
      >
        <SiteContainer>
          <Flex flexDirection={['column', 'row']}>
            <Flex justifyContent="center">
              <Box width={['75%', '60%']}>
                <img width="100%" src={iPhone} />
              </Box>
            </Flex>
            <Box width={['100%', '50%']}>
              <H2 color="yellow">{title}</H2>
              <BodyText color="white">{description}</BodyText>
              <ul className={css({marginLeft: 0, listStyleType: 'none'})}>
                {mapIndex(({title, list, icon}, index) => {
                  const isActive = R.equals(this.state.activeIndex, index)
                  const isHovered = R.path(['isHovered', index], this.state)
                  const isLast = R.equals(
                    R.prop('title', R.last(listOfCalculations)),
                    title
                  )

                  return (
                    <LI
                      width={['100%', '66.66%']}
                      mb={0}
                      className={css({
                        borderBottom: isLast ? 'none' : '1px solid white',
                        cursor: isHovered ? 'pointer' : 'default'
                      })}
                      pt={3}
                      key={index}
                      pb={3}
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
                      onClick={() => {
                        return this.setState({
                          activeIndex: isActive ? null : index
                        })
                      }}
                    >
                      <Flex justifyContent="space-between">
                        <Box display="flex" position="relative">
                          <img
                            className={css({
                              position: 'absolute',
                              left: 0,
                              marginBottom: 0
                            })}
                            src={icon}
                          />
                          <SmallText
                            pl={3}
                            color={
                              R.or(isActive, isHovered)
                                ? colors.yellow
                                : colors.white
                            }
                          >
                            {title}
                          </SmallText>
                        </Box>
                        <img
                          className={css({
                            transform: isActive ? 'rotate(180deg)' : 'none'
                          })}
                          src={downArrow}
                        />
                      </Flex>
                      <Collapse
                        isOpened={isActive}
                        springConfig={{stiffness: 1000, damping: 50}}
                      >
                        <Flex>
                          <ul
                            className={css({
                              listStyleType: 'none',
                              marginLeft: R.nth(3, space)
                            })}
                          >
                            {mapIndex(
                              (item, index) => (
                                <li
                                  key={index}
                                  className={css({
                                    marginTop: R.nth(2, space),
                                    transition: `opacity ${R.add(
                                      200,
                                      R.multiply(R.inc(index), 100)
                                    )}ms ease-in-out`,
                                    opacity: isActive ? 1 : 0
                                  })}
                                >
                                  <SmallText color={colors.white}>
                                    {item}
                                  </SmallText>
                                </li>
                              ),
                              list
                            )}
                          </ul>
                        </Flex>
                      </Collapse>
                    </LI>
                  )
                }, listOfCalculations)}
              </ul>
            </Box>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

export default CalculateRiskDropDown
