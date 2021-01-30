import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';
import Spacer from '../components/atoms/Spacer';


const SignUp = ({ userName, title, avatar, message, inputValues: { name, email }, isLoggedIn, canTransfer }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
    <Spacer />
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            {message &&
              <>
                <div className="notification is-warning">
                  <button className="delete"></button>
                  <div className="block">

                    {message}
                  </div>
                </div>
              </>
            }
            {!isLoggedIn &&
              <div className="box">
                <p className="is-size-6 is-size-5-desktop has-text-centered has-text-weight-bold mb-3">
                  Sign Up for a new account
                </p>
                <form className="fled" method="POST" action="/auth/signup" encType="multipart/form-data">
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
                    <input className="input is-primary" name="password" id="password" type="password" placeholder="min 8 characters" />
                  </div>
                  <label className="label" htmlFor="confirmpassword">*confrm password:</label>
                  <div className="control">
                    <input className="input is-primary" name="confirmpassword" id="confirmpassword" type="password" placeholder="the same password" />
                  </div>
                  {canTransfer &&
                    <label className="checkbox">
                      <input type="checkbox" name="transfer" value="transfer" />
                      I want to transfer my results from guest account
                    </label>
                  }
                  <button type="submit" className="button is-primary">Sign Up</button>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  </HeadTemplate >
)

export default SignUp;