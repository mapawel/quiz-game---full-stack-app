import React from 'react'

const Navbar = ({ userName, isLoggedIn }) => (
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
            <a href="/auth" className="button is-success is-outlined has-text-black">
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
          <div className="level is-flex is-justify-content-flex-end">
            {isLoggedIn &&
              <p className="has-text-primary is-size-7 has-text-centered has-text-weight-bold is-italic mr-3">User Logged In!</p>}
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
                <a href="/auth/login" className="navbar-item">
                  Log In
              </a>
                <a href="/auth/signon" className="navbar-item">
                  Sign Up
              </a>
                <a href="/auth/logout" className="navbar-item">
                  Log Out
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