import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'

import H2 from './H2'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import Flex from './Flex'
import Box from './Box'

const mapIndex = R.addIndex(R.map)

const MeetTheTeam = ({title, description, team}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']}>
            {title ? <H2>{title}</H2> : null}
            <BodyText>{description}</BodyText>
          </Box>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="flex-start">
          {mapIndex(({member, role, photo}, key) => {
            return (
              <Box key={key} pr={2} width={[`${100 / 6}%`]}>
                {photo ? <img src={photo} /> : null}
                <SmallText fontWeight="700">{member}</SmallText>
                <SmallText>{role}</SmallText>
              </Box>
            )
          }, team)}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default MeetTheTeam

MeetTheTeam.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  team: PropTypes.array
}
