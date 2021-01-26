import React from 'react';

const MainStats = ({mainStats: {
  usersQty,
  winnersQty,
  maxWinQty,
  inQtyGames,
  bestFormatedTime,
}}) => (

  <section className="section hero is-white">
    <div className="hero-body">
      <div className="container is-widescreen mt-5">
        <div className="columns">
          <div className="column has-text-centered">
            <div className="box">
              <p className="is-size-1 has-text-weight-bold">{usersQty}</p>
              <p className="is-size-3">players</p>
              <p className="is-size-7">only</p>
              <p className="is-size-2 has-text-weight-bold">{winnersQty}</p>
              <p className="is-size-5">winners</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="is-size-1 has-text-weight-bold">{maxWinQty}</p>
              <p className="is-size-3">wins</p>
              <p className="is-size-7">max in</p>
              <p className="is-size-2 has-text-weight-bold">{inQtyGames}</p>
              <p className="is-size-5">games</p>
            </div>
          </div>
          <div className="column has-text-centered">
            <div className="box">
              <p className="is-size-1 has-text-weight-bold">{bestFormatedTime}</p>
              <p className="is-size-3">minutes</p>
              <p className="is-size-7">is</p>
              <p className="is-size-2 has-text-weight-bold">the best</p>
              <p className="is-size-5">winning time</p>
            </div>
          </div>
        </div>
        <div className="level"></div>
        <a href="/results" className="level-right"><button className="button is-primary is-medium">my statistics</button></a>
      </div>
    </div>
  </section>
);

export default MainStats;

