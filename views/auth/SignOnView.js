import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const SignOn = ({ userName, title, message, inputValues: { name, email, password, confirmpassword } }) => (
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
              <form className="fled" method="POST" action="/auth/signon" >
                <label className="label" htmlFor="name">*name:</label>
                <div className="control">
                  <input className="input is-primary" name="name" id="name" defaultValue={name} type="text" placeholder="John / Jane" autoComplete="nope" />
                </div>
                <label className="label" htmlFor="email">*e-mail:</label>
                <div className="control">
                  <input className="input is-primary" name="email" id="email" defaultValue={email} type="text" placeholder="example@axample.com" autoComplete="nope" />
                </div>
                <label className="label" htmlFor="avatar">avatar / photo:</label>
                <div className="control">
                  <input className="input is-primary" name="avatar" id="avatar" type="file" placeholder="file ..." />
                </div>
                <label className="label" htmlFor="password">*password:</label>
                <div className="control">
                  <input className="input is-primary" name="password" id="password" defaultValue={password} type="password" placeholder="min 8 characters" />
                </div>
                <label className="label" htmlFor="confirmpassword">*confrm password:</label>
                <div className="control">
                  <input className="input is-primary" name="confirmpassword" id="confirmpassword" defaultValue={confirmpassword} type="password" placeholder="the same password" />
                </div>
                <button type="submit" className="button is-primary">Sign On</button>
              </form>
            </div>


          </div>

        </div>

      </div>
    </section>
  </HeadTemplate>
)

export default SignOn;