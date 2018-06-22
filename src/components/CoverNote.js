import React from 'react'
import {css} from 'react-emotion'

import Link from './Link'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import coverNote from '../../static/images/uploads/cover-note.svg'

const CoverNote = () => {
  return (
    <Flex justifyContent="center" pt={[3, 5]} pb={[3, 5]}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']} order={[1, 0]}>
            <H2 mb={2}>Applying for your PfCO?</H2>
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
              <Link to="/download" className={css({color: 'initial'})}>
                Learn how to get your cover note within our app →
              </Link>
            </SmallText>
          </Box>
          <Flex
            justifyContent="center"
            width={['100%', '50%']}
            order={[0, 1]}
            mt={[2, 0]}
            pr={[2, 0]}
          >
            <Box width={['80%', 'auto']}>
              <img className={style.image} src={coverNote} />
            </Box>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

const style = {
  image: css({
    marginBottom: 0
  })
}

export default CoverNote
