import React from 'react'
import Media from 'react-media'
import {nth} from 'ramda'

import DarkMobileNav from '../components/DarkMobileNav'
import DarkDesktopNav from '../components/DarkDesktopNav'

import {breakpoints} from '../constants/theme'

const DarkNav = (to) => (
  <Media query={`(min-width: ${nth(1, breakpoints)})`}>
    {matches => (matches ? <DarkDesktopNav to={to}/> : <DarkMobileNav to={to}/>)}
  </Media>
)

export default DarkNav
