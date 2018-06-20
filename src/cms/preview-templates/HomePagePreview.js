import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../templates/home'

const HomePagePreview = ({entry, widgetFor}) => {
  console.log(entry.getIn(['data', 'title']))
  return <HomePageTemplate data={entry.getIn(['data'])} />
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default HomePagePreview
