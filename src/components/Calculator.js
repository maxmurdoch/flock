import React, {Component} from 'react'
import R from 'ramda'
import {css, injectGlobal} from 'react-emotion'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Flex from './Flex'
import Box from './Box'
import Label from './Label'
import SmallText from './SmallText'
import BodyText from './BodyText'
import Text from './Text'
import SiteContainer from './SiteContainer'
import {colors, boxShadows} from '../constants/theme'

injectGlobal`
  .Select-control {
    border-radius: 0;
    border: 0;
    height: 52px;
  }
  /* we have to do this very specific selector to override built in styles */
  .Select-placeholder, .Select--single > .Select-control .Select-value {
    line-height: 52px;
  }
  .Select-arrow {
    border-color: #000 transparent transparent;
  }
  .Select-menu-outer {
    border: 0;
  }
`

const averageFlightPrice = 8
const pilotTypeOptions = [
  {
    label: 'Commercial',
    value: 1.015
  },
  {
    label: 'Trainee',
    value: 1.04625
  },
  {
    label: 'Hobbyist',
    value: 0.58375
  }
]
const droneTypeOptions = [
  {
    label: 'Less than 1000g',
    value: 0.80625
  },
  {
    label: 'Less than 3000g',
    value: 0.965
  },
  {
    label: 'Less than 5000g',
    value: 1.42
  },
  {
    label: 'More than 5000g',
    value: 2.57
  }
]
const flightFrequencyOptions = [
  {
    label: 'A few times a year',
    value: 8
  },
  {
    label: 'A couple of times a month',
    value: 24
  },
  {
    label: 'On a weekly basis',
    value: 52
  }
]
const locationOptions = [
  {
    label: 'Countryside',
    value: 0.86375
  },
  {
    label: 'Villages, Towns',
    value: 0.98
  },
  {
    label: 'Cities',
    value: 1.20625
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
    const pricePerFlightPreCheck = R.reduce(
      R.multiply,
      averageFlightPrice,
      R.map(R.prop('value'), priceValues)
    ).toFixed(2)
    const pricePerFlight = pricePerFlightPreCheck < 25 ? pricePerFlightPreCheck : 25

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
            flexWrap="wrap"
          >
            <Flex width={['100%', '100%', '66.66%']} flexWrap="wrap">
              <Box width={['100%', '50%']} mt={[2, 3]} pr={[0, 2]}>
                <Label htmlFor="pilotType">What type of pilot are you?</Label>
                <Select
                  clearable={false}
                  id="pilotType"
                  value={this.state.pilotTypeValue}
                  onChange={value => this.handleChange({pilotTypeValue: value})}
                  options={pilotTypeOptions}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[2, 3]} pr={[0, 2]}>
                <Label htmlFor="droneType">
                  What type of drone do you fly?
                </Label>
                <Select
                  clearable={false}
                  id="droneType"
                  value={this.state.droneTypeValue}
                  onChange={value => this.handleChange({droneTypeValue: value})}
                  options={droneTypeOptions}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[2, 3]} pr={[0, 2]}>
                <Label htmlFor="flightFrequency">How often do you fly?</Label>
                <Select
                  clearable={false}
                  id="flightFrequency"
                  value={this.state.flightFrequencyValue}
                  onChange={value =>
                    this.handleChange({flightFrequencyValue: value})
                  }
                  options={flightFrequencyOptions}
                />
              </Box>
              <Box width={['100%', '50%']} mt={[2, 3]} pr={[0, 2]}>
                <Label htmlFor="location">Where do you normally fly?</Label>
                <Select
                  clearable={false}
                  id="location"
                  value={this.state.locationValue}
                  onChange={value => this.handleChange({locationValue: value})}
                  options={locationOptions}
                />
              </Box>
            </Flex>
            <Flex width={['100%', '100%', '33.33%']}>
              <Flex
                flex="1 1 auto"
                background={colors.yellow}
                p={3}
                alignItems="center"
                justifyContent="center"
                mt={[2, 3]}
                flexDirection="column"
              >
                <SmallText textAlign="center" mb={1}>
                  Your estimate*
                </SmallText>
                <BodyText textAlign="center" fontWeight={700} className={css({marginBottom: 0})}>
                  £{Math.round(this.state.pricePerYear)} per year
                </BodyText>
                <SmallText textAlign="center" mt={1}>
                  That’s £{this.state.pricePerFlight} per flight
                </SmallText>
              </Flex>
            </Flex>
          </Flex>
          <Text textAlign="left" mb={1} className={css({marginBottom: 0, paddingTop: 20, paddingLeft: 3, fontSize: 12, color: 'grey'})}>
            * Your estimate is based on average usage. Prices are dependent on the real-time risks of each flight.
          </Text>
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
