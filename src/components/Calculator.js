import React, {Component} from 'react'
import R from 'ramda'
import {css, injectGlobal} from 'react-emotion'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Flex from './Flex'
import Box from './Box'
import Label from './Label'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import H4 from './H4'
import {colors, boxShadows} from '../constants/theme'

injectGlobal`
  .Select-control {
    border-radius: 0;
    border: 0;
  }
  .Select-arrow {
    border-color: #000 transparent transparent;
  }
  .Select-menu-outer {
    border: 0;
  }
`

const pilotTypeOptions = [
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
const droneTypeOptions = [
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
const flightFrequencyOptions = [
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
const locationOptions = [
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

class Calculator extends Component {
  state = {
    pilotTypeValue: R.head(pilotTypeOptions),
    droneTypeValue: R.head(droneTypeOptions),
    flightFrequencyValue: R.head(flightFrequencyOptions),
    locationValue: R.head(locationOptions),
    pricePerFlight: 0,
    pricePerYear: 0
  }

  componentDidMount() {
    this.calculatePrice()
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
      3,
      R.map(R.prop('value'), priceValues)
    ).toFixed(2)
    const pricePerYear = R.multiply(
      flightFrequencyValue.value,
      pricePerFlight
    ).toFixed(2)
    this.setState({pricePerFlight, pricePerYear})
  }

  handleChange(state) {
    this.setState(state, this.calculatePrice)
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
                <Label htmlFor="pilotType">What type of pilot are you?</Label>
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
                <Label htmlFor="droneType">
                  What type of drone do you fly?
                </Label>
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
                <Label htmlFor="flightFrequency">How often do you fly?</Label>
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
                <Label htmlFor="location">How often do you fly?</Label>
                <Select
                  clearable={false}
                  id="location"
                  value={this.state.locationValue}
                  onChange={value => this.handleChange({locationValue: value})}
                  options={locationOptions}
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
                  Just ${this.state.pricePerFlight} per flight
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
