import React from 'react'
import {css} from 'emotion'
import R from 'ramda'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import LI from './LI'
import BodyText from './BodyText'
import SmallText from './SmallText'
import {colors, space} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const CalculateRiskFlat = ({title, description, list}) => (
  <Flex
    background={colors.backgrounds.dark}
    justifyContent="center"
    pt={[2, 5]}
  >
    <SiteContainer>
      <Flex flexWrap={true}>
        <Box width={['100%', '50%']} pb={3}>
          <H2 color="yellow">{title}</H2>
          <BodyText color="white">{description}</BodyText>
        </Box>
        <Box width="100%">
          <ul
            className={css({
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: 0,
              marginBottom: R.nth(3, space),
              listStyleType: 'none'
            })}
          >
            {mapIndex(({title, list, icon}, index) => {
              return (
                <LI
                  width={['100%', '50%', '25%']}
                  mb={0}
                  pt={3}
                  pb={3}
                  key={index}
                >
                  <Flex justifyContent="space-between">
                    <Box display="flex" position="relative">
                      <img
                        className={css({
                          position: 'absolute',
                          left: 0,
                          marginBottom: 0
                        })}
                        src={icon}
                      />
                      <SmallText pl={3} color={colors.yellow}>
                        {title}
                      </SmallText>
                    </Box>
                  </Flex>
                  <Flex>
                    <ul
                      className={css({
                        listStyleType: 'none',
                        marginLeft: R.nth(3, space)
                      })}
                    >
                      {mapIndex(
                        (item, index) => (
                          <li
                            key={index}
                            className={css({
                              marginTop: R.nth(2, space)
                            })}
                          >
                            <SmallText color={colors.white}>{item}</SmallText>
                          </li>
                        ),
                        list
                      )}
                    </ul>
                  </Flex>
                </LI>
              )
            }, list)}
          </ul>
        </Box>
      </Flex>
    </SiteContainer>
  </Flex>
)

export default CalculateRiskFlat
