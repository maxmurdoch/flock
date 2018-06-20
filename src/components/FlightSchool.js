import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'

import Flex from './Flex'
import H4 from './H4'
import flightSchoolList from '../../static/images/uploads/flight-school-list.png'
import SiteContainer from './SiteContainer'
import {space} from '../constants/theme'

const Featured = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex alignItems="center" flexDirection="column">
          <H4 tag="h3" mb={[1, 2]}>
            Flock is proud to work with the leading flight schools in the UK
          </H4>
          <img
            src={flightSchoolList}
            className={css({
              paddingTop: R.nth(2, space),
              marginBottom: 0
            })}
          />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Featured
