import React from 'react'
import PropTypes from 'prop-types'
import {injectGlobal} from 'emotion'
import {StickyContainer} from 'react-sticky'
import Helmet from 'react-helmet'
import {ThemeProvider} from 'emotion-theming'

import theme from '../constants/theme'
import './index.css'

import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'
import chivo from '../fonts/chivo/Chivo-Regular.woff2'

injectGlobal`
::selection {
  backgroundColor: 'blue',
  color: 'white'
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-family: Chivo, serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: ITC, sans-serif;
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
const Layout = ({
  children,
  data: {
    markdownRemark: {frontmatter}
  }
}) => {
  return (
    <ThemeProvider theme={theme}>
      <StickyContainer>
        <Helmet
          title={frontmatter.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: frontmatter.siteMetadata.description
            },
            {name: 'keywords', content: frontmatter.siteMetadata.keywords}
          ]}
        />
        <div>{children()}</div>
      </StickyContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
}

export default Layout

export const query = graphql`
  query SettingsQuery {
    markdownRemark(frontmatter: {title: {eq: "settings"}}) {
      frontmatter {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  }
`
