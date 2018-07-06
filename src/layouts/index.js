import React, {Component} from 'react'
import 'animate.css/animate.min.css'
import PropTypes from 'prop-types'
import R from 'ramda'
import {injectGlobal} from 'emotion'
import Helmet from 'react-helmet'
import {ThemeProvider} from 'emotion-theming'

import theme, {fontFamilies, colors} from '../constants/theme'
import './index.css'

import itc from '../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'
import chivo from '../fonts/chivo/Chivo-Regular.woff2'

injectGlobal`
::selection {
  background-color: ${colors.yellow};
  color: ${colors.dark};
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-family: ${fontFamilies.chivo}
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${fontFamilies.itc};
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
class Layout extends Component {
  render() {
    const {
      children,
      data: {
        markdownRemark: {frontmatter}
      }
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={frontmatter.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: frontmatter.siteMetadata.description
              },
              {
                name: 'keywords',
                content: R.join(',', frontmatter.siteMetadata.keywords)
              }
            ]}
          />
          <div>{children()}</div>
        </div>
      </ThemeProvider>
    )
  }
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
