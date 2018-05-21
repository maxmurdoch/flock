import React from 'react'
import PropTypes from 'prop-types'
import { StickyContainer } from 'react-sticky'
import { injectGlobal } from 'emotion'
import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'
import chivo from '../fonts/chivo/Chivo-Regular.woff2'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { css } from 'react-emotion'

import Flex from '../components/Flex'
import Nav from '../components/Nav'
import theme from '../constants/theme'
import './index.css'

injectGlobal`
* {
  font-family: 'Chivo';
}
@font-face {
  font-family: 'ITC';
  font-style: normal;
  font-weight: 700;
  src: url(${itc}) format('woff');
}
@font-face {
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  src: url(${chivo}) format('woff2');
}
`

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
      <Flex>
        <div>{children()}</div>
      </Flex>
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
