/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// always return to top of page when a route changes

import smoothscroll from 'smoothscroll-polyfill'

export default {
  shouldUpdateScroll: () => {
    return false
  },
  onClientEntry: () => {
    smoothscroll.polyfill()
  }
}
