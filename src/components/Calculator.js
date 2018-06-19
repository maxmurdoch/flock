import React, {Component} from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Flex from './Flex'
import Box from './Box'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import H4 from './H4'
import {colors, boxShadows} from '../constants/theme'
import {SSL_OP_NETSCAPE_CA_DN_BUG} from 'constants'

const data = {
  questions: [
    {
      key: 'typeOfPilot',
      label: 'What type of pilot are you?',
      options: [
        {
          label: 'Professional',
          value: 1
        },
        {
          label: 'Trainee',
          value: 1.2
        },
        {
          label: 'Hobbyist',
          value: 1.4
        }
      ]
    },
    {
      key: 'kindOfDrone',
      label: 'What kind of drone do you fly?',
      options: [
        {
          label: 'Less than 250g',
          value: 1
        },
        {
          label: 'Less than 500g',
          value: 1.2
        },
        {
          label: 'More than 500g',
          value: 1.4
        }
      ]
    },
    {
      key: 'howOften',
      label: 'How often do you fly?',
      options: [
        {
          label: 'Most days',
          value: 100
        },
        {
          label: 'Most months',
          value: 20
        },
        {
          label: 'A few times a year',
          value: 5
        }
      ]
    },
    {
      key: 'where',
      label: 'Where do you mainly fly?',
      options: [
        {
          label: 'Urban environments',
          value: 1
        },
        {
          label: 'Countryside',
          value: 1.2
        },
        {
          label: 'Near water',
          value: 1.4
        }
      ]
    }
  ]
}
class Calculator extends Component {
  state = {
    pilotTypeValue: null,
    droneTypeValue: null,
    flightFrequencyValue: null,
    locationValue: null,
    pricePerFlight: 0,
    pricePerYear: 0
  }

  calculatePrice() {
    const {
      pilotTypeValue,
      droneTypeValue,
      flightFrequencyValue,
      locationValue
    } = this.state

    const priceValues = [pilotTypeValue, droneTypeValue, locationValue]
    const pricePerFlight = R.reduce(
      R.multiply,
      0,
      R.map(R.prop('value'), priceValues)
    )
    const pricePerYear = R.multiply(flightFrequencyValue.value, pricePerFlight)
    this.setState({pricePerFlight, pricePerYear})
    console.log(this.state)
    console.log('here')
  }

  handleChange(state) {
    this.setState(state)
    this.calculatePrice()
  }

  render() {
    return (
      <Flex justifyContent="center" className={styles.outerContainer}>
        <SiteContainer>
          <Flex
            pt={[2, 0]}
            pl={[2, 3]}
            pr={[2, 3]}
            pb={[2, 3]}
            className={styles.container}
            flexDirection={['column', 'row']}
          >
            <Flex width={['100%', '66.66%']} flexWrap="wrap">
              <Box width={['100%', '50%']} mt={[1, 3]} pr={[0, 2]}>
                <label htmlFor="pilotType">
                  <SmallText mb={1}>What type of pilot are you?</SmallText>
                </label>
                <Select
                  clearable={false}
                  id="pilotType"
                  value={this.state.pilotTypeValue}
                  onChange={value => this.handleChange({pilotTypeValue: value})}
                  options={[
                    {
                      label: 'Professional',
                      value: 1
                    },
                    {
                      label: 'Trainee',
                      value: 1.2
                    },
                    {
                      label: 'Hobbyist',
                      value: 1.4
                    }
                  ]}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[1, 3]} pr={[0, 2]}>
                <label htmlFor="droneType">
                  <SmallText mb={1}>What type of drone do you fly?</SmallText>
                </label>
                <Select
                  clearable={false}
                  id="droneType"
                  value={this.state.droneTypeValue}
                  onChange={value => this.handleChange({droneTypeValue: value})}
                  options={[
                    {
                      label: 'Less than 250g',
                      value: 1
                    },
                    {
                      label: 'Less than 500g',
                      value: 1.2
                    },
                    {
                      label: 'More than 500g',
                      value: 1.4
                    }
                  ]}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[1, 3]} pr={[0, 2]}>
                <label htmlFor="flightFrequency">
                  <SmallText mb={1}>How often do you fly?</SmallText>
                </label>
                <Select
                  clearable={false}
                  id="flightFrequency"
                  value={this.state.flightFrequencyValue}
                  onChange={value =>
                    this.handleChange({flightFrequencyValue: value})
                  }
                  options={[
                    {
                      label: 'Most days',
                      value: 100
                    },
                    {
                      label: 'Most months',
                      value: 20
                    },
                    {
                      label: 'A few times a year',
                      value: 5
                    }
                  ]}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[1, 3]} pr={[0, 2]}>
                <label htmlFor="location">
                  <SmallText mb={1}>How often do you fly?</SmallText>
                </label>
                <Select
                  clearable={false}
                  id="location"
                  value={this.state.locationValue}
                  onChange={value => this.handleChange({locationValue: value})}
                  options={[
                    {
                      label: 'Urban environments',
                      value: 1
                    },
                    {
                      label: 'Countryside',
                      value: 1.2
                    },
                    {
                      label: 'Near water',
                      value: 1.4
                    }
                  ]}
                />
              </Box>
            </Flex>
            <Flex width={['100%', '33.33%']}>
              <Flex
                flex="1 1 auto"
                background={colors.yellow}
                p={3}
                alignItems="center"
                justifyContent="center"
                mt={[2, 3]}
                flexDirection="column"
              >
                <SmallText textAlign="center">Prices from</SmallText>
                <H4 className={css({marginBottom: 0})}>
                  £{Math.round(this.state.pricePerYear)} per year
                </H4>
                <SmallText textAlign="center">
                  Just {this.state.pricePerFlight} per flight
                </SmallText>
              </Flex>
            </Flex>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

export default Calculator

const styles = {
  container: css({
    backgroundColor: R.path(['backgrounds', 'light'], colors),
    boxShadow: R.nth(0, boxShadows)
  })
}
