import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Message from '../components/molecules/Message';
import OneColumnTemplate from '../templates/OneColumnTemplate';

const Settings = ({ userName, title, avatar, message, inputValues: { name, email }, isLoggedIn, deleteConfirmForm, menuActive }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
    menuActive={menuActive}
  >
    {message && <Message message={message} />}
    <section className="section">
      <OneColumnTemplate>
        <div className="box">
          <p className="is-size-6 is-size-5-desktop has-text-centered has-text-weight-bold mb-6">
            Account sattings
              </p>
          <p className="is-size-7 is-size-6-desktop mb-4 has-text-weight-bold">
            update basic data
              </p>
          <form className="fled" method="POST" action="/logged/dataupdate" encType="multipart/form-data">
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
              <input className="input is-primary" name="avatarChange" id="avatar" type="file" placeholder="file ..." />
            </div>
            <button type="submit" className="button is-primary">Udate</button>
          </form>
        </div>
        <div className="box">
          <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
            remove your avatar permanently
              </p>
          <div className="level is-flex is-justify-content-flex-start mb-6">
            <figure className="image is-48x48 menu-avatar mr-5">
              {avatar ? (
                <img src={`/${avatar}`} />
              ) : (
                  <img src="/images/guestUser.svg" />
                )}
            </figure>
            <a href="/logged/removeavatar?delete=true" className="">
              <button type="submit" className="button is-warning is-small">Remove</button>
            </a>
          </div>
        </div>
        <div className="box">
          <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
            change your password
              </p>
          <form className="fled" method="POST" action="/logged/changepassword">
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
            <button type="submit" className="button is-primary">Change password</button>
          </form>
        </div>
        <div className="box">
          <p className="is-size-7 is-size-6-desktop my-4 has-text-weight-bold">
            remove your registered account and all data permanently
              </p>
          {deleteConfirmForm ? (
            <form className="fled" method="POST" action="/logged/removeaccount">
              <label className="label" htmlFor="password">confirm by password:</label>
              <div className="control">
                <input className="input is-primary" name="password" id="password" type="password" placeholder="min 8 characters" />
              </div>
              <button type="submit" className="button is-warning is-small">Delete</button>
            </form>
          ) : (
              <a href="/logged/removeaccount" className="">
                <button type="button" className="button is-warning is-small mb-5">DELETE THIS ACCOUNT</button>
              </a>
            )
          }
        </div>
      </OneColumnTemplate>
    </section>
  </HeadTemplate >
)

export default Settings;