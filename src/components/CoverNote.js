import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import coverNote from '../../static/images/uploads/cover-note.svg'

const CoverNote = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']} order={[1, 0]}>
            <H2>Applying for your PfCO?</H2>
            <BodyText mb={2}>
              You no longer need to commit to an annual insurance policy in
              order to get your proof of insurance for your PfCO renewal.
            </BodyText>
            <SmallText mb={2}>
              Flock’s Cover Note is accepted by the CAA as proof of EC785/2004
              compliant insurance, and you can get yours instantly without
              having to pay a penny.
            </SmallText>
            <SmallText mb={2}>
              <Link to="/download" className={css({ color: 'initial' })}>
                Learn how to get your cover note within our app →
              </Link>
            </SmallText>
          </Box>
          <Box width={['100%', '50%']} order={[0, 1]}>
            <img src={coverNote} />
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default CoverNote
