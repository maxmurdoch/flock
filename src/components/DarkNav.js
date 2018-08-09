import React from 'react'
import Media from 'react-media'
import {nth} from 'ramda'

import DarkMobileNav from '../components/DarkMobileNav'
import DarkDesktopNav from '../components/DarkDesktopNav'

import {breakpoints} from '../constants/theme'

const DarkNav = () => (
  <Media query={`(min-width: ${nth(1, breakpoints)})`}>
    {matches => (matches ? <DarkDesktopNav /> : <DarkMobileNav />)}
  </Media>
)

export default DarkNav
