import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import OneColumnTemplate from './templates/OneColumnTemplate';

const Page500 = ({ userName, isLoggedIn, avatar, title }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      <OneColumnTemplate>
        <p className="title is-3 mb-6">A technical problem occured</p>
        <p className="subtitle is-5 has-text-grey mb-6">Please try again or wait for a repair, we are working on that.</p>
        <figure className="image is-1x1">
          <img src="/images/500img.svg" alt="Server 500 error image" />
        </figure>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default Page500;