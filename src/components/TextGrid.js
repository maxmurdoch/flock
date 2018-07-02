import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'

import H2 from './H2'
import H3 from './H3'
import BodyText from './BodyText'
import SmallText from './SmallText'
import SiteContainer from './SiteContainer'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'

const mapIndex = R.addIndex(R.map)

const TextGrid = ({title, description, list, image}) => (
  <Flex justifyContent="center">
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']}>
          <ShowIf predicate={R.not(R.isEmpty(title))}>
            <H2 markdown={true}>{title}</H2>
          </ShowIf>
          <ShowIf predicate={!!image}>
            <img src={withPrefix(image)} />
          </ShowIf>
          <ShowIf predicate={R.not(R.isEmpty(description))}>
            <BodyText>{description}</BodyText>
          </ShowIf>
        </Box>
        <Flex flexWrap={true}>
          {mapIndex(
            ({title, text, icon}, index) => (
              <Box
                flex="1 1 auto"
                width={['100%', '50%', '33.33%']}
                pr={[0, 3]}
                mt={[3, 3, 4]}
                key={index}
              >
                <ShowIf predicate={!!icon}>
                  <img
                    src={withPrefix(icon)}
                    className={css({marginBottom: 0})}
                  />
                </ShowIf>
                <H3>{title}</H3>
                <SmallText>{text}</SmallText>
              </Box>
            ),
            list
          )}
        </Flex>
      </Flex>
    </SiteContainer>
  </Flex>
)

export default TextGrid

TextGrid.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      icon: PropTypes.string
    })
  )
}
