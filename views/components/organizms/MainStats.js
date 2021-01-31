import React from 'react';

const MainStats = ({ mainStats: {
  usersQty = 0,
  winnersQty = 0,
  maxWinQty = 0,
  inQtyGames = 0,
  bestFormatedTime = '-',
} }) => (

  <section className="section hero is-white">
    <div className="hero-body">
      <div className="container is-widescreen mt-5">
        <div className="columns is-desktop">
          <div className="column has-text-centered is-flex">
            <div className="box p-6 box-wide">
              <p className="is-size-1 has-text-weight-bold">{usersQty}</p>
              <p className="is-size-3 has-text-grey-light">players</p>
              <p className="is-size-7 has-text-grey-light">only</p>
              <p className="is-size-2 has-text-weight-bold">{winnersQty}</p>
              <p className="is-size-5 has-text-grey-light">winners</p>
            </div>
          </div>
          <div className="column has-text-centered is-flex">
            <div className="box p-6 box-wide">
              <p className="is-size-1 has-text-weight-bold">{maxWinQty}</p>
              <p className="is-size-3 has-text-grey-light">wins</p>
              <p className="is-size-7 has-text-grey-light">max in</p>
              <p className="is-size-2 has-text-weight-bold">{inQtyGames}</p>
              <p className="is-size-5 has-text-grey-light">games</p>
            </div>
          </div>
          <div className="column has-text-centered is-flex">
            <div className="box p-6 box-wide">
              <p className="is-size-2 is-size-1-widescreen has-text-weight-bold">{bestFormatedTime}</p>
              <p className="is-size-3 has-text-grey-light">minutes</p>
              <p className="is-size-7 has-text-grey-light">is</p>
              <p className="is-size-3 is-size-2-widescreen has-text-weight-bold">the best</p>
              <p className="is-size-5 has-text-grey-light">winning time</p>
            </div>
          </div>
        </div>
        <a href="/mystat" className="level-right">
          <button className="button is-primary is-medium mt-4 mb-6">my statistics</button>
        </a>
      </div>
    </div>
  </section>
);

export default MainStats;

