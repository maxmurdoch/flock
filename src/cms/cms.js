import React from 'react'
import CMS from 'netlify-cms'
import CSSInjector from './CSSInjector'
import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewTemplate('home', props => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))
