import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Navbar from '../templates/Navbar';

const PrepareGame = ({ userName, title }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} />
    <section className="section">
      <div className="container is-widescreen">
        <div className="box">
          <div className="columns is-desktop is-vcentered mt-5 is-flex is-justify-content-space-between px-5">
            <div className="column is-half is-flex is-flex-direction-column">
              <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">{userName}, </h1>
              <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
                answer 10 questions, watch your time! Good luck!
              </h3>
              <a href="/game/play" className="is-align-self-flex-end">
                <button className="button is-success is-medium mr-4"><b>Play</b></button>
              </a>
            </div>
            <div className="column is-one-quarter">
              <figure className="image is-2by3">
                <img src="/images/gameImage.svg" />
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