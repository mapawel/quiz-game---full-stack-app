import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import OneColumnTemplate from '../templates/OneColumnTemplate';
import Message from '../components/molecules/Message';

const ResetPass = ({ userName, isLoggedIn, avatar, title, message, inputValues: { email } }) => (
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
          <form className="fled" method="POST" action="/auth/resetpass" >
            <label className="label" htmlFor="mail">e-mail:</label>
            <div className="control">
              <input className="input is-primary" name="email" id="mail" defaultValue={email} type="text" placeholder="yourmail@example.com" autoComplete="nope" />
            </div>
            <button type="submit" className="button is-primary">Reset password</button>
          </form>
        </div>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default ResetPass;