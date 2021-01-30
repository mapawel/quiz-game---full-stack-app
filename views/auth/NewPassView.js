import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';
import Spacer from '../components/atoms/Spacer';
import Message from '../components/molecules/Message';


const NewPass = ({ userName, isLoggedIn, avatar, title, resetToken, userId, message }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
    <Spacer />
    {message && <Message message={message} />}
    <section className="section">
      <div className="container is-widescreen">
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="box">
              <form className="fled" method="POST" action="/auth/newpass" >
                <input name="resetToken" value={resetToken} type="hidden" />
                <input name="userId" value={userId} type="hidden" />
                <label className="label" htmlFor="password">new password:</label>
                <div className="control">
                  <input className="input is-primary" name="password" id="password" type="password" placeholder="minimum 8 characters" autoComplete="nope" />
                </div>
                <label className="label" htmlFor="confirmpassword">confirm a new password:</label>
                <div className="control">
                  <input className="input is-primary" name="confirmpassword" id="confirmpassword" type="password" placeholder="repeat your password" autoComplete="nope" />
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

export default NewPass;