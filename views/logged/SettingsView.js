import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const Settings = ({ userName, title, avatar, message, inputValues: { name, email }, isLoggedIn }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
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

            <div className="box">
              <p className="is-size-6 is-size-5-desktop has-text-centered has-text-weight-bold mb-6">
                Account sattings
              </p>
              <p className="is-size-7 is-size-6-desktop mb-4 has-text-weight-bold">
                update basic data
              </p>
              <form className="fled" method="POST" action="/auth/signup" enctype="multipart/form-data">
                <input type="hidden" name="transfer" value="" />
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
                <button type="submit" className="button is-primary is-small">Udate</button>
              </form>


              <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
                remove your avatar permanently
              </p>
              <div className="level is-flex is-justify-content-flex-start mb-6">
                <figure className="image is-48x48 menu-avatar">
                  {avatar ? (
                    <img src={`/${avatar}`} />
                  ) : (
                      <img src="/images/guestUser.svg" />
                    )}
                </figure>
                <button type="submit" className="button is-warning is-small">Remove</button>
              </div>

              <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
                change your password
              </p>
              <form className="fled" method="POST" action="/auth/signup" enctype="multipart/form-data">
                <label className="label" htmlFor="oldpassword">*old password:</label>
                <div className="control">
                  <input className="input is-primary" name="oldpassword" id="oldpassword" type="password" placeholder="min 8 characters" />
                </div>
                <label className="label" htmlFor="password">*new password:</label>
                <div className="control">
                  <input className="input is-primary" name="password" id="password" type="password" placeholder="min 8 characters" />
                </div>
                <label className="label" htmlFor="confirmpassword">*confrm new password:</label>
                <div className="control">
                  <input className="input is-primary" name="confirmpassword" id="confirmpassword" type="password" placeholder="the same password" />
                </div>
                <button type="submit" className="button is-primary is-small">Change password</button>
              </form>
              <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
                remove your registered account and all data permanently
              </p>
              <button type="button" className="button is-warning is-small mb-5">DELETE THIS ACCOUNT</button>
            </div>

          </div>
        </div>
      </div>
    </section>
  </HeadTemplate >
)

export default Settings;