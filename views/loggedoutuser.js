import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import OneColumnTemplate from './templates/OneColumnTemplate';

const Root = ({ userName, isLoggedIn, avatar, title }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      <OneColumnTemplate>
        <p className="title is-3 mb-6">Information</p>
        <p className="subtitle is-6 has-text-grey mb-2">The user who used this app on this browser before was logged out on the other device.</p>
        <p className="subtitle is-6 has-text-grey mb-3">You can log in, sign up or start as a guest user.</p>
        <p className="subtitle is-6 has-text-grey mb-4">Here you find a home page:</p>
        <a href="/" className="is-align-self-flex-start my-6"><button className="button is-primary is-small">home</button></a>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default Root;