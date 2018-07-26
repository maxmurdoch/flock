import React from 'react'
import {withPrefix} from 'gatsby-link'
import Markdown from 'react-remarkable'
import R from 'ramda'
import {css} from 'react-emotion'
import PropTypes from 'prop-types'

import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {space} from '../constants/theme'

const FlockStory = ({header, bigText, smallText, image, imageHeader}) => {
  return (
    <Flex justifyContent="center" pt={[2, 3, 5]}>
      <SiteContainer>
        <Flex width="100%" alignItems="baseline">
          <H2>{header}</H2>
        </Flex>
        <Flex
          flexWrap={true}
          alignItems="baseline"
          justifyContent="space-between"
        >
          <Box width={['100%', `${(100 / 12) * 7}%`]} order={[1, 0]}>
            <BodyText mb={2}>{bigText}</BodyText>
            <div className={css({p: {marginBottom: R.nth(1, space)}})}>
              <SmallText mb={2}>
                <Markdown container="span">{smallText}</Markdown>
              </SmallText>
            </div>
          </Box>
          <Flex
            alignItems="baseline"
            width={['75%', `${(100 / 12) * 4}%`]}
            order={[0, 1]}
            flexWrap="wrap"
          >
            <SmallText mb={3}>{imageHeader}</SmallText>
            <img src={image} />
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default FlockStory

FlockStory.propTypes = {
  header: PropTypes.string,
  bigText: PropTypes.string,
  smallText: PropTypes.string,
  image: PropTypes.string,
  imageHeader: PropTypes.string
}
