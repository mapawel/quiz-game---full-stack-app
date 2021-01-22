import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const LogIn = ({ userName, title, message, inputValues: { email } }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} />
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
              <form className="fled" method="POST" action="/auth/login" >
                <label className="label" htmlFor="mail">e-mail:</label>
                <div className="control">
                  <input className="input is-primary" name="email" id="mail" defaultValue={email} type="text" placeholder="yourmail@example.com" autoComplete="nope" />
                </div>
                <label className="label" htmlFor="password">password:</label>
                <div className="control">
                  <input className="input is-primary" name="password" id="password" type="password" placeholder="min 8 characters" />
                </div>
                <button type="submit" className="button is-primary">Log In</button>
              </form>
              <a href="" className="">I have forgotten password...</a>
            </div>


          </div>

        </div>

      </div>
    </section>
  </HeadTemplate>
)

export default LogIn;