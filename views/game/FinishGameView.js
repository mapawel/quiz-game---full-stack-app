import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';
import Spacer from '../components/atoms/Spacer';


const FinishGame = ({ userName, title, avatar, message, stats: { pointsInCurrentGame, currentGameTime, winner, currentGameFormatedTime }, isLoggedIn }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar}/>
    <Spacer />
    <section className="section">
      <div className="container is-widescreen">
        <div className="box mb-6">
          <div className="columns is-desktop is-vcentered mt-5 is-flex is-justify-content-space-between px-5">
            <div className="column is-half is-flex is-flex-direction-column">
              <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">{userName},</h1>
              <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
                {message}
              </h3>
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
              <div className="column is-half">
                <figure className="image is-2by3">
                  <img src="/images/winnerImage.svg" />
                </figure>
              </div>
            ) : (
                <div className="column is-one-quarter">
                  <figure className="image is-2by3">
                    <img src="/images/gameImage.svg" />
                  </figure>
                </div>
              )}
          </div>
        </div>
        <div className="columns is-desktop is-vcentered mt-6 is-flex is-justify-content-space-between px-5">
          <div className="column is-two-fifths">
            <figure className="image is-1by1">
              <img src="/images/statsImage.svg" />
            </figure>
          </div>
          <div className="column is-two-fifths is-flex is-flex-direction-column mb-6">
            <h3 className="title is-4 is-size-3-tablet is-size-2-desktop my-6">Your score:</h3>
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