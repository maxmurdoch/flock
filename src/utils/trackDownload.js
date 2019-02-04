'use strict'

const downloadClickHandler = () => {
  analytics.track('Application Download Viewed')
}

const webAppClickhandler = () => {
  analytics.track('WebApp Navigation Clicked')
}

export { downloadClickHandler, webAppClickhandler }
