import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Media from 'react-media'
import {css, injectGlobal, cx} from 'react-emotion'
import Flex from './Flex'
import H2 from './H2'
import BodyText from './BodyText'
import SiteContainer from './SiteContainer'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import {breakpoints, fontFamilies, colors, space} from '../constants/theme'
import Text from './Text'
import Box from './Box'
import Link from './Link'
import ShowIf from './ShowIf'
import SmallText from './SmallText'

const mapIndex = R.addIndex(R.map)

const FUfaqSection = ({faqList, header, buttonText, buttonUrl, body}) => {
  const goToHelp = () => {
    window.open(buttonUrl, '_blank')
  }
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex flexDirection={['column', 'column', 'row']} pb={[2, 0, 0]}>
          <Flex
            flex={1}
            flexWrap="wrap"
            justifyContent="flex-start"
            flexDirection="column"
            pt={[4, 4, 5]}
            pb={[2, 2, 5]}
            pl={2}
            pr={2}
          >
            <Media query={`(min-width: ${breakpoints[1]})`}>
              {matches => {
                return matches ? null : (
                  <H2 mb={20} markdown={true}>
                    {header}
                  </H2>
                )
              }}
            </Media>

            <Box borderTop={'1px solid gray'} width="100%" />
            {mapIndex(
              ({text, url}) => (
                <Link
                  to={url}
                  className={css({
                    textDecoration: 'none',
                    color: 'inherit'
                  })}
                >
                  <Flex
                    flexDirection="row"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    pt={20}
                    pb={20}
                    className={css({
                      borderWidth: '0px 0px 1px 0px',
                      borderStyle: 'solid',
                      borderColor: 'gray'
                    })}
                  >
                    <SmallText>{text}</SmallText>
                    <i
                      className={css({
                        color: colors.yellow,
                        fontStyle: 'normal',
                        fontSize: 30
                      })}
                    >
                      →
                    </i>
                  </Flex>
                </Link>
              ),
              faqList
            )}
          </Flex>

          <Flex
            flex={1}
            flexWrap="wrap"
            justifyContent="flex-start"
            flexDirection="column"
            pt={[2, 3, 5]}
            pb={[2, 3, 5]}
            pl={2}
            pr={2}
          >
            <Flex flexDirection="column" mb={[3, 3, 3]}>
              <Media query={`(min-width: ${breakpoints[1]})`}>
                {matches => {
                  return matches ? (
                    <H2 mb={20} markdown={true}>
                      {header}
                    </H2>
                  ) : null
                }}
              </Media>
              <BodyText>{body}</BodyText>
            </Flex>

            <PrimaryButton
              className={css({
                alignSelf: 'flex-start'
              })}
              onClick={goToHelp}
            >
              <ArrowText moveOnHover={false}>
                <p
                  className={css({
                    fontSize: 17
                  })}
                >
                  {buttonText}
                </p>
              </ArrowText>
            </PrimaryButton>
          </Flex>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default FUfaqSection

FUfaqSection.propTypes = {
  testimonials: PropTypes.array
}

const styles = {
  text: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 17px;
    line-height: 34px;
    margin-bottom: 40px;
    text-transform: uppercase;
    max-width: 75%;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      text-transform: none;
      font-size: 24px;
      line-height: 34px;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
      line-height: 44px;
    }
    `
}

const style = {}

injectGlobal`
  h2 {
    ${style.text}
  }
`
