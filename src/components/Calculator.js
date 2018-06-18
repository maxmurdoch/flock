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

const mapIndex = R.addIndex(R.map)

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
          value: 1
        },
        {
          label: 'Most months',
          value: 1.2
        },
        {
          label: 'A few times a year',
          value: 1.4
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
    values: R.map(R.path(['options', 0]), data.questions),
    price: null
  }

  componentDidMount() {
    this.setState({
      price: R.reduce(
        R.multiply,
        50,
        R.map(R.prop('value'), this.state.values)
      )
    })
  }

  handleChange(value, index) {
    const newValues = R.update(index, value, this.state.values)

    this.setState({
      values: newValues,
      price: R.reduce(R.multiply, 50, R.map(R.prop('value'), newValues))
    })
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
              {mapIndex((question, index) => {
                return (
                  <Box
                    width={['100%', '50%']}
                    mt={[1, 3]}
                    pr={[0, 2]}
                    key={index}
                  >
                    <label htmlFor={question.key}>
                      <SmallText mb={1}>{question.label}</SmallText>
                    </label>
                    <Select
                      clearable={false}
                      id={question.key}
                      value={R.nth(index, this.state.values)}
                      onChange={value => {
                        return this.handleChange(value, index)
                      }}
                      options={question.options}
                    />
                  </Box>
                )
              }, data.questions)}
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
                  £{Math.round(this.state.price)} per year
                </H4>
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
