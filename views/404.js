import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import OneColumnTemplate from './templates/OneColumnTemplate';

const Page404 = ({ userName, isLoggedIn, avatar, title }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      <OneColumnTemplate>
        <p className="title is-3 mb-6">Page not found</p>
        <p className="subtitle is-6 has-text-grey mb-3">Please try the other route or use a menu</p>
        <p className="subtitle is-6 has-text-grey mb-4">Here you find a home page:</p>
        <a href="/" className="my-6 button is-primary is-rounded is-small">home</a>
        <figure className="image mt-6 is-1x1">
          <img src="/images/404img.svg" alt="404 error image" />
        </figure>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default Page404;