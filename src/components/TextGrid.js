import React from 'react'
import {css} from 'react-emotion'
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

const TextGrid = ({title, description, list, image}) => (
  <Flex justifyContent="center">
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']}>
          {title ? <H2>{title}</H2> : null}
          {image ? <img src={image} /> : null}
          <BodyText>{description}</BodyText>
        </Box>
        <Flex flexWrap={true}>
          {mapIndex(({title, text, icon}, index) => {
            return (
              <Box
                width={['100%', '33.33%']}
                pr={[0, 3]}
                mt={[2, 4]}
                key={index}
              >
                {icon ? (
                  <img src={icon} className={css({marginBottom: 0})} />
                ) : null}
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
  image: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
}
