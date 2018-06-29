import React from 'react'
import PropTypes from 'prop-types'
import {HomeTemplate} from '../../templates/home'

const HomePagePreview = ({entry}) => {
  const firstTestimonial = entry.getIn(['data', 'firstTestimonial']).toJS()
  const secondTestimonial = entry.getIn(['data', 'secondTestimonial']).toJS()
  const hero = entry.getIn(['data', 'hero']).toJS()
  const howFlockWorks = entry.getIn(['data', 'howFlockWorks']).toJS()
  const siteMetadataOverride = entry
    .getIn(['data', 'siteMetadataOverride'])
    .toJS()
  const stopWorrying = entry.getIn(['data', 'stopWorrying']).toJS()
  const download = entry.getIn(['data', 'download']).toJS()
  const featured = entry.getIn(['data', 'featured']).toJS()
  const calculator = entry.getIn(['data', 'calculator']).toJS()
  const kindOfPilot = entry.getIn(['data', 'kindOfPilot']).toJS()
  const risk = entry.getIn(['data', 'risk']).toJS()

  return (
    <HomeTemplate
      firstTestimonial={firstTestimonial}
      secondTestimonial={secondTestimonial}
      hero={hero}
      howFlockWorks={howFlockWorks}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      download={download}
      featured={featured}
      calculator={calculator}
      kindOfPilot={kindOfPilot}
      risk={risk}
    />
  )
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomePagePreview
