import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const ResetPass = ({ userName, isLoggedIn, title, message, inputValues: { email } }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} />
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            {message &&
              <div className="notification is-warning">
                <button className="delete"></button>
                <div className="block">
                  {message}
                </div>
              </div>}
            <div className="box">
              <form className="fled" method="POST" action="/auth/resetpass" >
                <label className="label" htmlFor="mail">e-mail:</label>
                <div className="control">
                  <input className="input is-primary" name="email" id="mail" defaultValue={email} type="text" placeholder="yourmail@example.com" autoComplete="nope" />
                </div>
                <button type="submit" className="button is-primary">Reset password</button>
              </form>
            </div>


          </div>

        </div>

      </div>
    </section>
  </HeadTemplate>
)

export default ResetPass;