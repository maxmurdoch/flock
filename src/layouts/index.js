import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer } from 'react-sticky'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'emotion-theming'
import { css } from 'react-emotion'

import Flex from '../components/Flex'
import Nav from '../components/Nav'
import theme from '../constants/theme'
import './index.css'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <StickyContainer>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <Nav />
      <div>{children()}</div>
    </StickyContainer>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
