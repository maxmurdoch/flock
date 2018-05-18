import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { css } from 'react-emotion'

import Flex from '../components/Flex'
import Header from '../components/header'
import theme from '../constants/theme'
import './index.css'

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div
      className={css({
        height: '100vh',
      })}
    >
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header />
      <Flex pl={3} pr={3}>
        <div className={css({ height: 'calc(100vh - 5rem)' })}>
          {children()}
        </div>
      </Flex>
    </div>
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
