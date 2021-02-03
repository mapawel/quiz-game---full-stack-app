import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Message from '../components/molecules/Message';
import OneColumnTemplate from '../templates/OneColumnTemplate';

const NewPass = ({ userName, isLoggedIn, avatar, title, resetToken, userId, message }) => (
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
          <form className="fled" method="POST" action="/auth/newpass" >
            <input name="resetToken" value={resetToken} type="hidden" />
            <input name="userId" value={userId} type="hidden" />
            <label className="label" htmlFor="password">new password:</label>
            <div className="control">
              <input className="input is-primary is-rounded" name="password" id="password" type="password" placeholder="minimum 8 characters" autoComplete="nope" />
            </div>
            <label className="label" htmlFor="confirmpassword">confirm a new password:</label>
            <div className="control">
              <input className="input is-primary is-rounded" name="confirmpassword" id="confirmpassword" type="password" placeholder="repeat your password" autoComplete="nope" />
            </div>
            <button type="submit" className="button is-primary is-rounded">Reset password</button>
          </form>
        </div>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default NewPass;