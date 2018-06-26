import React from 'react'
import PropTypes from 'prop-types'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import BodyText from './BodyText'

const TitleAndDescription = ({title, description}) => (
  <Flex justifyContent="center">
    <SiteContainer>
      <Box width={['100%', '75%', '50%']} mb={[2, 3]}>
        <H2>{title}</H2>
        <BodyText>{description}</BodyText>
      </Box>
    </SiteContainer>
  </Flex>
)

TitleAndDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default TitleAndDescription
