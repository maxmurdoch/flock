import React, {Component} from 'react'
import branch from 'branch-sdk'
import Card from '@material-ui/core/Card'

import blackLogo from '../images/logo-black.svg'

class TextMeTheAppTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.sendSMS = this.sendSMS.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  sendSMS(event) {
    event.preventDefault()
    var linkData = {
      tags: [],
      channel: 'Website',
      feature: 'TextMeTheApp',
      data: {
        foo: 'bar'
      }
    }
    var options = {}
    var callback = function(err, result) {
      if (err) {
        alert('Sorry, something went wrong.')
      } else {
        alert('SMS sent!')
      }
    }
    branch.sendSMS(this.state.value, linkData, options, callback)
    this.setState({value: ''})
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      >
        <Card
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 600,
            marginBottom: 200,
            paddingRight: 40,
            paddingLeft: 40,
            paddingTop: 20
          }}
        >
          <div>
            <img style={{width: '6rem', marginBottom: 20}} src={blackLogo} />
            <h2 style={{fontFamily: 'Chivo'}}>Let's get started!</h2>
            <p style={{fontFamily: 'Chivo'}}>
              Download the Flock Cover app (it's free!) on your mobile device to
              get a real-time quote for your drone flight in seconds.
            </p>
          </div>

          <div>
            <p style={{fontFamily: 'Chivo', marginTop: 20, marginBottom: 10}}>
              Enter your phone number to download the app:
            </p>
            <form onSubmit={this.sendSMS}>
              <div style={{display: 'flex'}}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+44"
                  value={this.state.value}
                  onChange={this.handleChange}
                  style={{
                    fontFamily: 'Chivo',
                    flex: 3,
                    fontSize: 25,
                    marginRight: 100,
                    paddingLeft: 15,
                    paddingTop: 15,
                    paddingBottom: 15
                  }}
                />

                <input
                  type="submit"
                  value="Send"
                  style={{
                    backgroundColor: 'rgb(255,224,1)',
                    fontFamily: 'Chivo-Bold',
                    fontSize: 25,
                    flex: 1,
                    paddingVertical: 15,
                    paddingRight: 30,
                    paddingLeft: 30,
                    borderWidth: 0
                  }}
                />
              </div>
            </form>
          </div>
        </Card>
      </div>
    )
  }
}

export {TextMeTheAppTemplate}

const TextMeTheApp = () => {
  return <TextMeTheAppTemplate />
}

export default TextMeTheApp

export const query = graphql`
  query TextMeTheApp($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
    }
  }
`
