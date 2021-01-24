import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const SignUp = ({ userName, title, avatar, message, inputValues: { name, email, password, confirmpassword }, isLoggedIn, transfer, canTransfer }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar}/>
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
                  {transfer ? 'Sign Up for the account with tranfer:' : 'Sign Up for a NEW registered account:'}
                </p>
                {canTransfer &&
                  <>
                    <p className="subtitle is-size-7 is-size-6-desktop has-text-grey has-text-centered is-italic mb-5">
                      {transfer ? '- your reslts from Guest Account will be saved -' : '- your results from Guest Account will be lost -'}
                    </p>

                    <form className="fled mb-6" method="POST" action="/auth/signup" >
                      <input type="hidden" name="transfer" value={transfer ? "false" : "true"} />
                      <button type="submit" className="button is-primary is-small is-fullwidth">
                        {transfer ? 'back to fresh sign up form for a new account' : 'transfer my data from guest account to registered account'}
                      </button>
                    </form>
                  </>
                }
                <form className="fled" method="POST" action="/auth/signup" enctype="multipart/form-data">
                  <input type="hidden" name="transfer" value={transfer ? "proceed" : "null"} />
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