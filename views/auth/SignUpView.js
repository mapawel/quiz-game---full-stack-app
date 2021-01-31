import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import OneColumnTemplate from '../templates/OneColumnTemplate';
import Message from '../components/molecules/Message';

const SignUp = ({ userName, title, avatar, message, inputValues: { name, email }, isLoggedIn, canTransfer }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    {message && <Message message={message} />}
    <section className="section">
      <OneColumnTemplate>
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
                <input className="input is-primary" name="email" id="email" defaultValue={email} type="text" placeholder="example@axample.com" />
              </div>
              <label className="label" htmlFor="avatar">avatar / photo:</label>
              <div className="control">
                <input className="input is-primary" name="avatar" id="avatar" type="file" placeholder="file ..." />
              </div>

              <label className="label" htmlFor="password">*password:</label>
              <div className="control">
                <input className="input is-primary" name="password" id="password" type="password" placeholder="my strong pass..." />
              </div>
              <label className="label" htmlFor="confirmpassword">*confrm password:</label>
              <div className="control">
                <input className="input is-primary" name="confirmpassword" id="confirmpassword" type="password" placeholder="the same password" />
              </div>
              {canTransfer &&
                <div>
                  <input type="checkbox" name="transfer" id="transfer" value="transfer" />
                  <label className="checkbox" htmlFor="transfer" >
                    <b>  I want to transfer my results from guest account</b>
                  </label>
                </div>
              }
              <button type="submit" className="button is-primary">Sign Up</button>
            </form>
          </div>
        }
      </OneColumnTemplate>
    </section>
  </HeadTemplate >
)

export default SignUp;