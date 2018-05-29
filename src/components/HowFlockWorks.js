import React from 'react'
import R from 'ramda'
import { css } from 'emotion'

import Flex from './Flex'
import Box from './Box'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhoneX from '../../static/images/uploads/iphone-x-mockup.png'
import { colors, space } from '../constants/theme'

const HowFlockWorks = ({ data: { title, description, listOfHow } }) => {
  return (
    <Flex background="rgba(49, 49, 49, 1)" justifyContent="center" pt={5}>
      <SiteContainer>
        <Flex flexWrap={true}>
          <Box width={['100%', '50%']}>
            <Box pb={4}>
              <H2 color="yellow">{title}</H2>
              <BodyText color="white">{description}</BodyText>
            </Box>
            <Box width="66.66%">
              <ol
                className={css({
                  marginLeft: 0,
                  listStyleType: 'none',
                })}
              >
                {R.map(({ title, text }) => {
                  return (
                    <li
                      className={css({
                        marginBottom: R.nth(3, space),
                        borderBottom: `1px solid ${colors.white}`,
                        paddingBottom: R.nth(3, space),
                        '&:last-of-type': {
                          borderBottom: 0,
                        },
                      })}
                    >
                      <Flex
                        flexDirection="column"
                        className={css({
                          borderLeft: `3px solid ${colors.yellow}`,
                          paddingLeft: R.nth(1, space),
                          marginLeft: `-${R.nth(1, space)}`,
                        })}
                      >
                        <H3 color="yellow">{title}</H3>
                        <SmallText color="white">{text}</SmallText>
                      </Flex>
                    </li>
                  )
                }, listOfHow)}
              </ol>
            </Box>
          </Box>
          <Box width="50%">
            <img src={iPhoneX} />
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default HowFlockWorks
