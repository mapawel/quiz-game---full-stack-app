import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';

const FinishGame = ({ userName, title, avatar, message, stats: { pointsInCurrentGame, currentGameTime, winner, currentGameFormatedTime }, isLoggedIn }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section">
      <div className="container is-widescreen">
        <div className="box mb-6">
          <div className="columns is-desktop is-vcentered mt-5">
            <div className="column mr-5">
              <p className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">{userName},</p>
              <p className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
                {message}
              </p>
              <div className="level">
                <div className="level-left">
                  <a href="/results" className="">
                    <button className="button is-primary">See results</button>
                  </a>
                </div>
                <div className="level-right">
                  <form className="fled is-align-self-flex-end" method="POST" action="/game/prepare">
                    <input className="input is-primary" name="name" id="nick" type="hidden" value={userName} />
                    <button type="submit" className="button is-success">Play again</button>
                  </form>
                </div>
              </div>
            </div>
            {winner ? (
              <div className="column ml-5">
                <figure className="image">
                  <img src="/images/winnerImage.svg" className="game-img" />
                </figure>
              </div>
            ) : (
                <div className="column ml-5">
                  <figure className="image">
                    <img src="/images/gameImage.svg" className="game-img" />
                  </figure>
                </div>
              )}
          </div>
        </div>
        <div className="columns is-desktop is-vcentered mt-6">
          <div className="column mr-6">
            <figure className="image">
              <img src="/images/statsImage.svg" className="game-img" />
            </figure>
          </div>
          <div className="column ml-6 mb-6">
            <p className="title is-4 is-size-3-tablet is-size-2-desktop my-6">Your score:</p>
            <p className="subtitle has-text-grey is-6 is-size-5-tablet is-size-4-desktop mb-3">
              points: <span className="title has-text-centered is-5 is-size-4-tablet is-size-3-desktop mt-4">{pointsInCurrentGame}</span>
            </p>
            <p className="subtitle has-text-grey is-6 is-size-5-tablet is-size-4-desktop mb-3">
              time: <span className="title has-text-centered is-5 is-size-4-tablet is-size-3-desktop mt-4">{currentGameFormatedTime}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  </HeadTemplate>
)

export default FinishGame;