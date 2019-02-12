import React, {Component, Fragment} from 'react'
import Card from '@material-ui/core/Card'
import {StickyContainer} from 'react-sticky'
import SiteMetadata from '../components/SiteMetadata'
import NavBarExternal from '../components/NavBarExternal'
import TopHalfWhite from '../components/TopHalfWhite'
import blackLogo from '../images/logo-black.svg'
import {css} from 'react-emotion'
import Media from 'react-media'
import arrowWhite from '../images/icons/arrow-white.svg'
import iPhone from '../../static/images/uploads/white-phone-cropped-2@2x.png'

class TextMeTheAppTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {value: '', sent: false}
    this.handleChange = this.handleChange.bind(this)
    this.sendSMS = this.sendSMS.bind(this)
    this.setInitialValue = this.setInitialValue.bind(this)
  }

  setInitialValue() {
    this.setState({value: '+44'})
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
    branch.sendSMS(this.state.value, linkData, options, () => {})
    this.setState({value: '', sent: true})
  }

  renderButton (textField) {
    const text = this.state.sent ? textField.buttonTextAfter : textField.buttonText
    return (
      <button style={styles.buttonStyle} onClick={this.sendSMS}>
        <span style={
          styles.buttonContainer
        }>
          <Media query="(min-width: 400px)">
            {(matches) => matches
            ? <Fragment><span style={styles.buttonText}>{text}</span>
              <Media query="(min-width: 610px)">
                {(matches) => matches
                  ? <img style={styles.buttonIcon} src={arrowWhite}></img>
                  : null
                }
              </Media></Fragment>
            : <Fragment><span style={{
                fontSize: '14px',
                lineHeight: '20px',
                ...styles.buttonText
              }}>{text}</span>
              <Media query="(min-width: 610px)">
                {(matches) => matches
                  ? <img style={styles.buttonIcon} src={arrowWhite}></img>
                  : null
                }
              </Media></Fragment>
            }
          </Media>
        </span>
      </button>
    )
  }

  renderInput (textField) {
    return(
      <input
        id="phone"
        name="phone"
        type="tel"
        placeholder={textField.placeholder}
        value={this.state.value}
        onChange={this.handleChange}
        style={styles.inputStyle}
        onFocus={this.setInitialValue}
      />
    )
  }

  renderHelperText (textField) {
    return(
      <p style={styles.helperParagraph}>{textField.subText}</p>
    )
  }

  renderIphone () {
    return(<Media query="(min-width: 850px)">
      {(matches) => matches
        ? <img style={{maxHeight: '80vh'}} src={iPhone}></img>
        : null
      }
    </Media>)
  }

  render() {
    const { siteMetadataOverride, header, topHalf, textField } = this.props.data.markdownRemark.frontmatter
    return (
      <StickyContainer>
        <div className={css(styles.container)}>
          <SiteMetadata
            title={siteMetadataOverride.title}
            description={siteMetadataOverride.description}
            keywords={siteMetadataOverride.keywords}
          />
          <NavBarExternal backIcon={header.backIcon} backText={header.backText} backUrl={header.backUrl}/>
          <TopHalfWhite title={topHalf.title} subTitle={topHalf.subTitle}/>
          <div className={css(styles.bottomWrapper)}>
            <Media query="(min-width: 1024px)">
              {(matches) => matches
                ? <div style={{
                    width: '1024px',
                    ...styles.inputWrapper
                  }}>
                    {this.renderInput(textField)}
                    {this.renderButton(textField)}
                    {this.renderIphone()}
                  </div>
                : <div style={{
                    width: '100%',
                    ...styles.inputWrapper
                  }}>
                    {this.renderInput(textField)}
                    {this.renderButton(textField)}
                    {this.renderIphone()}
                  </div>
              }
            </Media>
            <Media query="(min-width: 1024px)">
              {(matches) => matches
                ? <div style={{
                    width: '1024px',
                    ...styles.helperParagraphWrapper
                  }}>
                    {this.renderHelperText(textField)}
                  </div>
                : <div style={{
                    width: '100%',
                    ...styles.helperParagraphWrapper
                  }}>
                    {this.renderHelperText(textField)}
                  </div>
              }
            </Media>
          </div>
        </div>
      </StickyContainer>
    )
  }
}

export default TextMeTheAppTemplate

export const query = graphql`
  query TextMeTheApp($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        siteMetadataOverride {
          title
          description
          keywords
        }
        header {
          backIcon
          backText
          backUrl
        }
        textField {
          subText
          buttonText
          buttonTextAfter
          placeholder
        }
        topHalf {
          subTitle
          title
        }
      }
    }
  }
`

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    minHeight: '100vh'
  },
  helperParagraph: {
    maxWidth: '450px',
    fontSize: '14px',
    fontFamily: 'Chivo',
    color: '#979797'
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '5vh',
    flexDirection: 'row',
    flex: 1,
    margin: '-13px auto 40px auto',
    paddingLeft: '16px'
  },
  bottomWrapper: {
    width: '100%',
    display: 'flex',
    flex: '1 1',
    justifyContent: 'center',
    backgroundColor: '#FFDA00',
    flexDirection: 'column'
  },
  buttonStyle: {
    apperance: 'none',
    display: 'inline-block',
    minHeight: '54px',
    padding: '0 16px',
    background: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '2px',
    boxShadow: '0 4px 12px -5px rgba(0,0,0,0.5)',
    outline: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    lineHeight: '54px',
    textAlign: 'left',
    marginLeft: '32px',
    marginRight: '16px'
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  buttonText: {
    fontFamily: 'ITC, sans-serif',
    fontSize: '16px',
    fontWeight: 700,
    flex: '1 1 auto',
    textAlign: 'left'
  },
  buttonIcon: {
    marginLeft: '24px',
    marginTop: '24px'
  },
  inputStyle: {
    appearance: 'none',
    minHeight: '54px',
    padding: '0 16px',
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: 1,
    fontFamily: 'Chivo, sans-serif',
    fontSize: '20px',
    maxHeight: '5vh',
    maxWidth: '450px',
    backgroundColor: '#fff',
    border: '1px solid #979797',
    borderRadius: '2px',
    boxShadow: '0 4px 12px -5px rgba(0,0,0,0.5)'
  },
  helperParagraphWrapper: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '5vh',
    flexDirection: 'row',
    margin: '0 auto auto auto',
    paddingLeft: '16px'
  }
}
