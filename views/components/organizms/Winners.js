import React from 'react';

const Winners = () => (
  <section className="section">
    <div className="container is-widescreen mt-5">
      <div className="columns is-desktop is-vcentered">
        <div className="column is-flex is-flex-direction-column mt-3">
          <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-2 mt-2">The winners:</h1>
          <table className="table content is-small ml-3 mr-5">
            <thead>
              <tr>
                <th><p title="position">Pos</p></th>
                <th><p title="name">Name</p></th>
                <th><p title="time">Time</p></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td><p>Pavel</p></td>
                <td>34:23 s</td>
                <td>
                  <figure className="image is-24x24">
                    <img src="images/winnerIcon.svg" />
                  </figure>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td><p>Pavel</p></td>
                <td>34:23 s</td>
                <td>
                  <figure className="image is-24x24">
                    <img src="images/winnerIcon.svg" />
                  </figure>
                </td>
              </tr>
              <tr>
                <th>1</th>
                <td><p>Pavel</p></td>
                <td>34:23 s</td>
                <td>
                  <figure className="image is-24x24">
                    <img src="/images/winnerIcon.svg" />
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-2">The rest players:</h3>
          <table className="table content is-small ml-3 mr-5">
            <thead>
              <tr>
                <th><p title="Position">Pos</p></th>
                <th><p title="Name">Name</p></th>
                <th><p title="Points">Points</p></th>
                <th><p title="Time">Time</p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td><p>Pavel</p></td>
                <td>5</td>
                <td>34:23 s</td>
              </tr>
              <tr>
                <th>2</th>
                <td><p>Pavel</p></td>
                <td>4</td>
                <td>34:23s</td>
              </tr>
              <tr>
                <th>2</th>
                <td><p>Pavel</p></td>
                <td>6</td>
                <td>34:23s</td>
              </tr>
            </tbody>
          </table>
          <button className="button is-primary is-align-self-flex-start"><strong>full results list</strong></button>
        </div>
        <div className="column is-three-fifths">
          <figure className="image is-1by1">
            <img src="images/welcomeImage2.svg" />
          </figure>
        </div>
      </div>
    </div>
  </section>
);

export default Winners;

