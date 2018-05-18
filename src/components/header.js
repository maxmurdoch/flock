import React from 'react'
import Link from 'gatsby-link'
import { css } from 'react-emotion'

import blackLogo from '../images/logo-black.svg'
import Flex from '../components/Flex'
import Box from '../components/Box'

const Header = ({ siteTitle }) => {
  const linkClass = css({
    paddingLeft: '2rem',
  })

  return (
    <Flex
      className={css({
        display: 'flex',
        height: '5rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      <img className={css({ margin: 0 })} src={blackLogo} />
      <nav>
        <Link className={linkClass} to="/">
          Home
        </Link>
        <Link className={linkClass} to="/products">
          Products
        </Link>
        <Link className={linkClass} to="/support">
          Support
        </Link>
      </nav>
    </Flex>
  )
}

export default Header
