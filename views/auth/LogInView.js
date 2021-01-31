import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import OneColumnTemplate from '../templates/OneColumnTemplate';
import Message from '../components/molecules/Message';

const LogIn = ({ userName, title, avatar, message, inputValues: { email }, isLoggedIn }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    {message && <Message message={message} />}
    <section className="section">
      <OneColumnTemplate>
        <div className="box">
          <form className="fled" method="POST" action="/auth/login" >
            <label className="label" htmlFor="mail">e-mail:</label>
            <div className="control">
              <input className="input is-primary" name="email" id="mail" defaultValue={email} type="text" placeholder="yourmail@example.com" />
            </div>
            <label className="label" htmlFor="password">password:</label>
            <div className="control">
              <input className="input is-primary" name="password" id="password" type="password" placeholder="my strong pass..." />
            </div>
            <button type="submit" className="button is-primary">Log In</button>
          </form>
          <a href="/auth/resetpass" className="">I have forgotten password...</a>
        </div>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default LogIn;