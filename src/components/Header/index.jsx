/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './styles.css'
import Logo from 'assets/img/logo.png'
import './header-styles.css'

const Header = () => {
  return (
    <>
      <div className="pace  pace-inactive">
        <div
          className="pace-progress"
          data-progress-text="100%"
          data-progress="99"
          style={{ transform: 'translate3d(0%, 0px, 0px)' }}
        >
          <div className="pace-progress-inner"></div>
        </div>
        <div className="pace-activity"></div>
      </div>

      <header id="header">
        <div id="logo-group">
          <span id="logo">
            <a href="/">
              <img
                style={{ width: '25px', padding: '5px' }}
                src={Logo}
                alt="logo"
              />
            </a>
          </span>
          <label
            style={{
              color: 'white',
              marginTop: '11%',
              fontSize: 'medium',
              fontWeight: 'bold'
            }}
          >
            V-Trac
          </label>
        </div>
      </header>
    </>
  )
}

export default Header
