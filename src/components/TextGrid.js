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

const TextGrid = ({ title, description, list }) => (
  <Flex justifyContent="center" pt={5} pb={5}>
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']}>
          <H2>{title}</H2>
          <BodyText>{description}</BodyText>
        </Box>
        <Flex pt={4} pb={5} borderBottom="1px solid #000" flexWrap={true}>
          {R.map(({ title, text }) => {
            return (
              <Box width={['100%', '33.33%']} pr={[0, 2]} mb={[2, 4]}>
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
      text: PropTypes.string.isRequired,
    })
  ),
}
