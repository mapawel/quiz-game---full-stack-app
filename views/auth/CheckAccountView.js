import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import OneColumnTemplate from '../templates/OneColumnTemplate';
import Message from '../components/molecules/Message';

const CheckAccount = ({ userName, title, avatar, isLoggedIn, message }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      {message ? (
        <Message message={message} />
      ) : (
          <Message message={
            `You are not logged in.
              You can play as a guest however after log in you will have full statistics and comparisions to the other players.
              To play as a guest just put your nick-name on and press start game or use log in / sign up buttons.`
          } />
        )}
      <OneColumnTemplate>
        <div className="box">
          <form className="fled" method="POST" action="/game/prepare">
            <label className="label" htmlFor="nick">my nick-name is:</label>
            <div className="control">
              <input className="input is-primary is-rounded" name="name" id="nick" type="text" placeholder="nick" autoComplete="off" />
            </div>
            <button type="submit" className="button is-primary is-rounded">start game</button>
          </form>
        </div>
        <div className="box">
          <p className="subtitle">I have an account:</p>
          <a href="/auth/login" className="button is-primary is-rounded mb-5">Log In</a>
          <p className="subtitle">I don't have an account and I want one:</p>
          <a href="/auth/signup" className="button is-primary is-rounded">Sign Up</a>
        </div>
      </OneColumnTemplate>
    </section>
  </HeadTemplate>
)

export default CheckAccount;