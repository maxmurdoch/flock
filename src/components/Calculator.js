import React, {Component} from 'react'
import R from 'ramda'
import {css} from 'react-emotion'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import Flex from './Flex'
import Box from './Box'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import {colors, boxShadows} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const data = {
  questions: [
    {
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
    price: 0
  }

  render() {
    return (
      <Flex justifyContent="center" className={styles.outerContainer}>
        <SiteContainer>
          <Flex pl={3} pr={3} pb={3} className={styles.container}>
            <Flex width="66.66%" flexWrap="wrap">
              {mapIndex((question, key) => {
                return (
                  <Box width="50%" mt={3} pr={2} key={key}>
                    <SmallText mb={1}>{question.label}</SmallText>
                    <Select options={question.options} />
                  </Box>
                )
              }, data.questions)}
            </Flex>
            <Flex width="33.33%">
              <Box background={colors.yellow} mt={3}>
                Prices from
                {this.state.price}
                per year
              </Box>
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
  }),
  outerContainer: css({
    transform: 'translateY(-50%)'
  })
}
