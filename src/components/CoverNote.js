import React from 'react'
import {withPrefix} from 'gatsby-link'
import R from 'ramda'
import PropTypes from 'prop-types'
import {css} from 'react-emotion'

import Link from './Link'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {breakpoints} from '../constants/theme'

const CoverNote = ({title, image, bodyText, smallText, link}) => {
  return (
    <Flex justifyContent="center" pt={[3, 5]} pb={[3, 5]}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '100%', '50%']} order={[1, 1, 0]} mt={[2, 0]}>
            <H2 mb={2}>{title}</H2>
            <BodyText mb={2}>{bodyText}</BodyText>
            <SmallText mb={2}>{smallText}</SmallText>
            <SmallText mb={2}>
              <Link to={link.to} className={css({color: 'initial'})}>
                {link.text}
              </Link>
            </SmallText>
          </Box>
          <Flex
            justifyContent="center"
            width={['100%', '100%', '50%']}
            order={[0, 0, 1]}
            mt={[2, 0]}
            pr={[2, 0]}
          >
            <Box width={['80%', 'auto']}>
              <img className={style.image} src={withPrefix(image)} />
            </Box>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

const style = {
  image: css({
    marginBottom: 0,
    width: '100%',
    maxWidth: '20rem',

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      maxWidth: '100%'
    }
  })
}

CoverNote.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  bodyText: PropTypes.string,
  smallText: PropTypes.string,
  link: PropTypes.object
}

export default CoverNote
