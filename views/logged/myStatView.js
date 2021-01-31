import React from 'react';
import HeadTemplate from '../templates/HeadTemplate';
import TwoColumnsTemplate from '../templates/TwoColumnsTemplate';

const MyStat = ({ userName, title, isLoggedIn, avatar, mainStats: {
  totalScore = 0,
  avarageScore = 0,
  winnerQty = 0,
  gamesPlaied = 0,
  bestFormatedTime = '-',
  avgAllGamesPlaied = 0,
  avgAllScore = 0,
  avgWinFormatedTime = 0,
  maxScoreIfNotWin = 0,
}, menuActive }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
    menuActive={menuActive}
  >
    <section className="section hero is-white">
      <div className="hero-body">
        <div className="container is-widescreen mt-5">
          <div className="columns is-desktop">
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide">
                <p className="is-size-1 has-text-weight-bold">{totalScore}</p>
                <p className="is-size-3 has-text-grey-light">points</p>
                <p className="is-size-7 has-text-grey-light">total and</p>
                <p className="is-size-2 has-text-weight-bold">{avarageScore}</p>
                <p className="is-size-5 has-text-grey-light">avarage</p>
              </div>
            </div>
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide">
                <p className="is-size-1 has-text-weight-bold">{winnerQty}</p>
                <p className="is-size-3 has-text-grey-light">wins</p>
                <p className="is-size-7 has-text-grey-light">in</p>
                <p className="is-size-2 has-text-weight-bold">{gamesPlaied}</p>
                <p className="is-size-5 has-text-grey-light">games</p>
              </div>
            </div>
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide">
                <p className="is-size-2 is-size-1-widescreen has-text-weight-bold">{bestFormatedTime}</p>
                <p className="is-size-3 has-text-grey-light">minutes</p>
                <p className="is-size-7 has-text-grey-light">is your</p>
                <p className="is-size-3 is-size-2-widescreen has-text-weight-bold">the best</p>
                <p className="is-size-5 has-text-grey-light">winning time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section hero is-white">
      <div className="hero-body">
        <div className="container is-widescreen mt-5">
          <div className="columns is-desktop is-vcentered">
            <div className="column has-text-centered is-flex">
              <div className="my-stat-img"></div>
            </div>
            <div className="column has-text-centered">
              <p className="title is-3 is-size-2-widescreen has-text-weight-bold">your best score:</p>
              <p className="subtitle big-paragraph has-text-weight-bold">{maxScoreIfNotWin}</p>
              <p className="subtitle is-size-5 has-text-grey">in one game</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section hero is-dark section-high">
      <div className="hero-body">
        <div className="container is-widescreen mt-5">
          <div className="columns is-desktop">
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide box-dark">
                <p className="is-size-1 has-text-weight-bold">{avgAllGamesPlaied}</p>
                <p className="is-size-3 has-text-grey">games</p>
                <p className="is-size-5 has-text-grey">plaied per user</p>
              </div>
            </div>
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide box-dark">
                <p className="is-size-1 has-text-weight-bold">{avgAllScore}</p>
                <p className="is-size-3 has-text-grey">avarage</p>
                <p className="is-size-5 has-text-grey">all players score</p>
              </div>
            </div>
            <div className="column has-text-centered is-flex">
              <div className="box p-6 box-wide box-dark">
                <p className="is-size-1 has-text-weight-bold">{avgWinFormatedTime}</p>
                <p className="is-size-3 has-text-grey">avarage</p>
                <p className="is-size-5 has-text-grey">win time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </HeadTemplate >
)

export default MyStat;