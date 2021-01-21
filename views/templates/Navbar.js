import React from 'react'

const Navbar = ({ userName }) => (
  <nav className="navbar is-fixed" role="navigation" aria-label="main navigation">
    <div className="container is-widescreen">
      <div className="navbar-brand mr-3">
        <a className="navbar-item" href="/">
          <h1 className="title is-4 has-text-primary is-family-secondary mr-2">Quiz Game</h1>
        </a>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-nav="navBarTop">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navBarTop" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item mx-5">
            <a href="/guest" className="button is-success is-outlined has-text-black">
              PLAY
            </a>
          </div>
          <a href="/results" className="navbar-item mx-5">
            Results
              </a>
          <a className="navbar-item mx-5">
            About
              </a>
        </div>

        <div className="navbar-end">
          {/* <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div> */}
          <div className="level is-flex is-justify-content-flex-end">
            <figure className="image is-48x48 menu-avatar">
              <img src="/images/guestUser.svg" />
            </figure>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                {userName}
              </a>

              <div className="navbar-dropdown">
                {/* <a className="navbar-item">
                  Statistics
              </a>
                <a className="navbar-item">
                  Profile
              </a> */}
                {/* <hr className="navbar-divider" /> */}
                <a className="navbar-item">
                  Log In
              </a>
                <a className="navbar-item">
                  Sign On
              </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar;