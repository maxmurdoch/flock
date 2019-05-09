import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StickyContainer} from 'react-sticky'
import * as R from 'ramda'
import {css} from '@emotion/core'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Flex from '../components/Flex'
import RenewalBanner from '../components/RenewalBanner'
import PromotionBanner from '../components/PromotionBanner'
import NonToggleiPhone from '../components/NonToggleIphone'
import BlackBackground from '../components/BlackBackground'
import FaqSection from '../components/FaqSection'
import Hero from '../components/Hero'
import {colors, breakpoints} from '../constants/theme'

import FUnBadge from '../../static/images/uploads/FUnBadge.svg'

class FlyUnlimitedPageTemplate extends Component {
  render() {
    const {
      hero,
      why,
      siteMetadataOverride,
      how,
      control,
      renewalBanner,
      promotionBanner,
      whatIsCovered,
      faqSection
    } = this.props.data.markdownRemark.frontmatter

    return (
      <Layout>
        <StickyContainer>
          <div>
            <SiteMetadata
              title={siteMetadataOverride.title}
              description={siteMetadataOverride.description}
              keywords={siteMetadataOverride.keywords}
            />
            <LightNav />
            <Box css={css({backgroundColor: 'white', paddingBottom: 75})}>
              <Hero
                headerCSS={{
                  backgroundImage: `url(${hero.backgroundImage})`,
                  backgroundPosition: 'top left',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                RightSideComponent={() => (
                  <Flex
                    alignItems={'center'}
                    justifyContent="center"
                    width={['100%', '20%', '30%']}
                    ml={3}
                  >
                    <img src={FUnBadge} css={style.heroImage} />
                  </Flex>
                )}
                textColor={colors.white}
                header={hero.header}
                description={hero.description}
                buttons={hero.buttons}
                features={hero.features}
                smallPrint={
                  '*Maximum £75 discount off first month. [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
                }
              />

              {!why.hidden && (
                <Box mt={[3, 5]}>
                  <TextGrid
                    title={why.title}
                    description={why.description}
                    list={why.list}
                  />
                </Box>
              )}
            </Box>

            {!how.hidden && (
              <BlackBackground css={css({paddingBottom: 40})}>
                <NonToggleiPhone
                  title={how.title}
                  description={how.description}
                  list={how.list}
                  image={how.image}
                  policyPauseSmallPrint={how.policyPauseSmallPrint}
                />
              </BlackBackground>
            )}

            <Box css={css({backgroundColor: 'white', paddingTop: 40})}>
              {!control.hidden && (
                <React.Fragment>
                  <Box mt={[3, 5]}>
                    <TextGrid
                      yellowUnderline
                      title={control.title}
                      description={control.description}
                      list={control.list}
                    />
                  </Box>

                  <div id="what-is-covered">
                    <BigSectionLine />
                  </div>
                </React.Fragment>
              )}

              {!whatIsCovered.hidden && (
                <WhatIsCoveredSection
                  mainTitle={whatIsCovered.mainTitle}
                  mainList={whatIsCovered.mainList}
                  mainDescription={whatIsCovered.mainDescription}
                  buttonOneText={whatIsCovered.buttonOneText}
                  buttonOneUrl={whatIsCovered.buttonOneUrl}
                  fromPrice={whatIsCovered.fromPrice}
                  policyFeatureList={whatIsCovered.policyFeatureList}
                  smallPrints={whatIsCovered.smallPrints}
                  productType={whatIsCovered.productType}
                  fromText={whatIsCovered.fromText}
                  perText={whatIsCovered.perText}
                />
              )}
            </Box>

            {!renewalBanner.hidden && (
              <RenewalBanner
                image={renewalBanner.image}
                mainText={renewalBanner.mainText}
                buttonText={renewalBanner.buttonText}
                buttonUrl={renewalBanner.buttonUrl}
                buttonTrack={renewalBanner.buttonTrack}
              />
            )}

            {!promotionBanner.hidden && (
              <PromotionBanner
                image={promotionBanner.image}
                mainText={promotionBanner.mainText}
                buttonText={promotionBanner.buttonText}
                buttonUrl={promotionBanner.buttonUrl}
                buttonTrack={promotionBanner.buttonTrack}
                buttonColor={promotionBanner.buttonColor}
              />
            )}

            {!faqSection.hidden && (
              <Box css={css({backgroundColor: 'white'})}>
                <FaqSection
                  header={faqSection.header}
                  body={faqSection.body}
                  buttonText={faqSection.buttonText}
                  buttonUrl={faqSection.buttonUrl}
                  disclosureIndicator={faqSection.disclosureIndicator}
                  faqs={faqSection.faqs}
                />
              </Box>
            )}

            <Footer
              FUnSmallPrint={
                '*One free month insurance for new Fly Unlimited customers who start their cover before 11/05/19. Credit card required. Maximum discount is £75. Policies over this amount will be charged at the full policy price, and £75 refunded back. After your free month, we’ll automatically renew your subscription and charge you the full ongoing monthly policy price. Cancel anytime. Full [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
              }
            />
          </div>
        </StickyContainer>
      </Layout>
    )
  }
}

const style = {
  heroImage: css({
    marginBottom: 0,
    display: 'block',
    height: 'auto',
    width: '60%',
    [`@media (max-width: ${R.nth(1, breakpoints)})`]: {
      width: '100%'
    }
  })
}

FlyUnlimitedPageTemplate.propTypes = {
  hero: PropTypes.object,
  flockStory: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  coreValues: PropTypes.object,
  meetTheTeam: PropTypes.object
}

export default FlyUnlimitedPageTemplate

export const query = graphql`
  query FlyUnlimitedPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
          buttons {
            title
            to
            color
            external
            branch
            track
          }
          features {
            leftIcon
            title
            rightIcon
          }
          description
          header
          smallPrint
          backgroundImage
        }
        why {
          hidden
          title
          description
          list {
            icon
            title
            text
          }
        }
        how {
          hidden
          title
          description
          image
          policyPauseSmallPrint
          list {
            title
            text
          }
        }
        control {
          hidden
          title
          description
          list {
            title
            text
          }
        }
        promotionBanner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
          buttonColor
        }
        renewalBanner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
        }
        whatIsCovered {
          hidden
          mainTitle
          mainDescription
          mainList {
            icon
            title
          }
          buttonOneUrl
          buttonOneText
          fromPrice
          policyFeatureList {
            text
          }
          productType
          fromText
          perText
          smallPrints {
            text
          }
        }
        faqSection {
          hidden
          header
          body
          buttonText
          buttonUrl
          disclosureIndicator
          faqs {
            title
            body
          }
        }
        siteMetadataOverride {
          title
          description
          keywords
        }
      }
    }
  }
`
