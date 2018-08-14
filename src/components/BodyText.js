import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import Text from './Text'
import {breakpoints} from '../constants/theme'
import {css, cx} from 'emotion'

//[equipment insurance](https://blog.flockcover.com/just-landed-accessory-insurance-627b04c985bd).

const BodyText = ({children, mb = 0, className, ...props}) => {
  if (typeof(children) === 'string') {
    const matches = children.match(/\[([^\[\]]+)\]\(([^)]+)/g)
    if(!matches) {
      return(<Text mb={mb} className={cx(style.text, className)} {...props}>
        {' '}
        {children}{' '}
      </Text>)
    } else {
      console.log(children)
      const internalHtml = matches.reduce((memo, match) => {
        const matchGroup = match.split('](')
        const matchText = matchGroup[0].substr(1)
        const matchUrl = matchGroup[1].substr(0, matchGroup[1].length)
        console.log('potato', match)
        return memo.split(match).join(`<a class='inline-link' href='${matchUrl}'>${matchText}</a>`)
      }, children)
      return(
        <Text
          mb={mb}
          className={cx(style.text, className)}
          {...props}
          dangerouslySetInnerHTML={{ __html: internalHtml }}
        ></Text>
      )
    }
  } else {
    return (
      <Text mb={mb} className={cx(style.text, className)} {...props}>
        {' '}
        {children}{' '}
      </Text>
    )
  }
}

const style = {
  text: css({
    fontSize: 18,
    lineHeight: '26px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 20,
      lineHeight: '28px'
    },

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      fontSize: 20,
      lineHeight: '34px'
    }
  })
}

BodyText.propTypes = {
  children: PropTypes.node,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array])
}

export default BodyText
