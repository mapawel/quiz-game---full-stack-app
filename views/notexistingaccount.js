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
        <p className="subtitle is-6 has-text-grey mb-2">You see this page because there was data in this web browser releting to the account in QUIZ GAME which doesn't exist any more. Probably a user removed it on the other device.</p>
        <p className="subtitle is-6 has-text-grey mb-3">To manage this situation we removed information releting this browser's data in our base to give you a possibility of using the app from start: either as a guest user or as a new signup mebmer. You can also log in if you alredy have an account.</p>
        <p className="subtitle is-6 has-text-grey mb-4">Here you find a home page:</p>
        <a href="/" className="my-6 button is-primary is-rounded is-small">home</a>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default Root;