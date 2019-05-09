import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'

import Layout from '../components/Layout/Layout'
import Box from '../components/Box'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Banner from '../components/RenewalBanner'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

const EnterpriseTemplate = ({
  navColor,
  hero,
  why,
  siteMetadataOverride,
  testimonial,
  banner,
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        {navColor === 'light' ? <LightNav /> : <DarkNav />}
        <Box css={css({backgroundColor: 'white'})}>
          <Hero
            headerCSS={{
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            textColor={colors[hero.textColor]}
            header={hero.header}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
            smallPrint={
              '*Maximum £75 discount off first month. [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
            }
          />
          {!why.hidden && (
            <Box mt={[3, 5]} mb={[3, 5]}>
              <TextGrid
                title={why.title}
                description={why.description}
                list={why.list}
              />
            </Box>
          )}
        </Box>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          {!banner.hidden && (
            <Box pt={[3, 6]}>
              <Banner
                image={banner.image}
                mainText={banner.mainText}
                buttonText={banner.buttonText}
                buttonUrl={banner.buttonUrl}
                buttonTrack={banner.buttonTrack}
              />
            </Box>
          )}
        </Box>

        <Footer
          FUnSmallPrint={
            '*One free month insurance for new Fly Unlimited customers who start their cover before 11/05/19. Credit card required. Maximum discount is £75. Policies over this amount will be charged at the full policy price, and £75 refunded back. After your free month, we’ll automatically renew your subscription and charge you the full ongoing monthly policy price. Cancel anytime. Full [T&C\'s](https://help.flockcover.com/legal/free-month-fly-unlimited-tcs) apply.'
          }
        />
      </div>
    </StickyContainer>
  )
}

export {EnterpriseTemplate}

const Enterprise = ({data}) => {
  const {
    navColor,
    hero,
    why,
    siteMetadataOverride,
    testimonial,
    banner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <EnterpriseTemplate
        hero={hero}
        navColor={navColor}
        why={why}
        siteMetadataOverride={siteMetadataOverride}
        testimonial={testimonial}
        banner={banner}
      />
    </Layout>
  )
}

export default Enterprise

export const query = graphql`
  query Enterprise($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        navColor
        hero {
          textColor
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
          backgroundImage
        }
        why {
          hidden
          title
          description
          list {
            title
            text
            icon
          }
        }
        testimonial {
          quote
          author
          image
        }
        banner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
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
