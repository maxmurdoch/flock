import React, {Component} from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import ReactModalVideo from 'react-modal-video'
import {css, injectGlobal} from 'react-emotion'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import H3 from './H3'
import playIcon from '../images/icons/play.svg'
import {space} from '../constants/theme'

import 'react-modal-video/css/modal-video.min.css'

injectGlobal`
.modal-video-inner {
  padding-left: ${R.nth(4, space)}px;
  padding-right: ${R.nth(4, space)}px;
}
`
class ModalVideo extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    const {text, videoId, coverImage} = this.props
    return (
      <Flex justifyContent="center">
        <SiteContainer>
          <button
            className={css({
              background: 'none',
              cursor: 'pointer',
              border: 0,
              padding: 0,
              width: '100%',
              '&:hover .image': {
                transform: 'scale(1.1)'
              },
              '&:hover .background': {
                backgroundSize: '105%'
              }
            })}
            onClick={this.openModal}
          >
            <Flex
              className={`background ${style.background(coverImage)}`}
              pt={[4, 5]}
              pb={[4, 5]}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <img
                className={`image ${css({
                  transition: 'transform 400ms ease-in-out',
                  marginBottom: 0,
                  paddingBottom: R.nth(2, space)
                })}`}
                src={playIcon}
              />
              <H3 color="white" mb={0}>
                {text}
              </H3>
            </Flex>
          </button>
          <ReactModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId={videoId}
            onClose={() => this.setState({isOpen: false})}
          />
        </SiteContainer>
      </Flex>
    )
  }
}

const style = {
  background: image =>
    css({
      backgroundImage: `url(${image})`,
      backgroundPosition: 'center',
      backgroundSize: '100%',
      transition: 'background-size 400ms ease-in-out'
    })
}

ModalVideo.propTypes = {
  text: PropTypes.string,
  videoId: PropTypes.string,
  coverImage: PropTypes.string
}

export default ModalVideo
