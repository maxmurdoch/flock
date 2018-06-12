import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import H2 from './H2'
import H3 from './H3'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'

const mapIndex = R.addIndex(R.map)

const TextGrid = ({title, description, list}) => (
  <Flex justifyContent="center" pt={[3, 5]}>
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']}>
          <H2>{title}</H2>
          <BodyText>{description}</BodyText>
        </Box>
        <Flex flexWrap={true}>
          {mapIndex(({title, text}, index) => {
            return (
              <Box
                width={['100%', '33.33%']}
                pr={[0, 2]}
                mt={[2, 4]}
                key={index}
              >
                <H3>{title}</H3>
                <SmallText>{text}</SmallText>
              </Box>
            )
          }, list)}
        </Flex>
      </Flex>
    </SiteContainer>
  </Flex>
)

export default TextGrid

TextGrid.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}
