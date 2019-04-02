import React from 'react'
import {withPrefix} from 'gatsby-link'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from 'react-emotion'

import Link from './Link'
import Flex from './Flex'
import H4 from './H4'
import SiteContainer from './SiteContainer'
import {space, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const FlightSchool = ({title, list}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex alignItems="center" flexDirection="column">
          <H4 tag="h3" mb={[2, 3]}>
            {title}
          </H4>
          <Flex
            flexWrap="wrap"
            width={['100%', '100%', `${(100 / 12) * 8}%`]}
            justifyContent="center"
          >
            {mapIndex(({image, to}, key) => {
              return (
                <Link target="_blank" className={style.link} to={to} key={key}>
                  <img src={withPrefix(image)} className={style.image} />
                </Link>
              )
            }, list)}
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

const style = {
  image: css({
    marginBottom: 0,
    paddingLeft: R.nth(1, space),
    paddingRight: R.nth(1, space)
  }),
  link: css({
    width: '10rem',
    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      width: '25%'
    }
  })
}

FlightSchool.propTypes = {
  title: PropTypes.string
}

export default FlightSchool
