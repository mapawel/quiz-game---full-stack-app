import React from 'react';

const Winners = ({ resultsTables: { winners = [], restPlayers = [] } }) => (
  <section className="section">
    <div className="container is-widescreen mt-2">
      <div className="columns is-desktop is-vcentered">
        <div className="column is-flex is-flex-direction-column mt-0">
          {winners.length > 0 && (
            <>
              <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-2 mt-2">The winners:</h1>
              <table className="table content ml-3 mr-5">
                <thead>
                  <tr>
                    <th><p title="position">Pos</p></th>
                    <th><p title="name">Name</p></th>
                    <th><p title="time">Time</p></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {winners.length > 0 && winners.map((winner, index) => (
                    <tr key={index + winner.email}>
                      <th><p>{index + 1}</p></th>
                      <td><p>{winner.name}</p></td>
                      <td>{winner.bestWinFormatedTime}</td>
                      <td>
                        <figure className="image is-24x24">
                          <img src="images/winnerIcon.svg" />
                        </figure>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {restPlayers.length > 0 && (
            <>
              <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-2">The rest players:</h3>
              <table className="table content ml-3 mr-5">
                <thead>
                  <tr>
                    <th><p title="Position">Pos</p></th>
                    <th><p title="Name">Name</p></th>
                    <th><p title="Points">Points</p></th>
                    <th><p title="Time">Avarage pts.</p></th>
                  </tr>
                </thead>
                <tbody>
                  {restPlayers.length > 0 && restPlayers.map((player, index) => (
                    <tr key={index + player.email}>
                      <th><p>{index + 1}</p></th>
                      <td><p>{player.name}</p></td>
                      <td>{player.maxScoreIfNotWin}</td>
                      <td>{player.avarageScore.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <a href="/results" className="is-align-self-flex-start"><button className="button is-primary is-medium"><strong>full results list</strong></button></a>
        </div>
        <div className="column is-three-fifths">
          <figure className="image is-4by3">
            <img src="images/winnersImage.svg" />
          </figure>
        </div>
      </div>
    </div>
  </section >
);

export default Winners;

