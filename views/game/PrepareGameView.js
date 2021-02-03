import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';

const PrepareGame = ({ userName, title, isLoggedIn, avatar }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      <div className="container is-widescreen">
        <div className="box">
          <div className="columns is-desktop is-vcentered mt-5">
            <div className="column mr-5">
              <p className="title is-5 is-size-2-tablet is-size-1-desktop mb-6 mt-2">{userName}, </p>
              <p className="subtitle is-6 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
                answer 10 questions, watch your time! Good luck!
              </p>
              <a href="/game/play" className="is-align-self-flex-end button is-success is-rounded is-medium mr-4"><b>Play</b></a>
            </div>
            <div className="column ml-6">
              <figure className="image">
                <img src="/images/gameImage.svg" className="game-img"/>
              </figure>
            </div>
          </div>
          <div className="columns is-centered mt-5">
          </div>
        </div>
      </div>
    </section>
  </HeadTemplate>
)

export default PrepareGame;