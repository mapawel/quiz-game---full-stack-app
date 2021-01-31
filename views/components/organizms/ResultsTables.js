import React from 'react';
import TwoColumnsTemplate from '../../templates/TwoColumnsTemplate';

const ResultsTables = ({ userName, results, page, isLoadingDisabled }) => {
  const pageLink = `/results?page=${+page + 1}`
  return (
    <section className="section">
      <TwoColumnsTemplate>
        <div className="column is-three-fifths is-flex is-flex-direction-column mt-0">
          {results.length > 0 && (
            <>
              <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">Results table:</h1>
              <table className="table is-small content ml-3 mr-5">
                <thead>
                  <tr>
                    <th><p className="tableText" title="position">Pos</p></th>
                    <th><p className="tableText" title="name">Name</p></th>
                    <th><p className="tableText" title="MaxScore">Max score</p></th>
                    <th><p className="tableText" title="AvScore">Avarage score</p></th>
                    <th><p className="tableText" title="time">Best Win-time</p></th>
                    <th><p className="tableText" title="winQty">wins</p></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>

                  {results.length > 0 && results.map((user, index) => (
                    <tr key={index + user.email}>
                      <th className="tableCell"><p className="tableText" >{index + 1}</p></th>
                      <td className="tableCell">
                        <p
                          className={`tableText ${user.name === userName ? 'has-text-weight-bold' : null}`} >
                          {user.name}
                          {user.name === userName ? (
                            <span className="tag is-primary ml-2 is-size-7 p-1">!</span>
                          ) : (
                              null
                            )}
                        </p>
                      </td>
                      <td className="tableCell"><p className="tableText" >{user.maxScoreIfNotWin}</p></td>
                      <td className="tableCell"><p className="tableText" >{user.avarageScore.toFixed(2)}</p></td>
                      <td className="tableCell"><p className="tableText" >{user.bestWinFormatedTime}</p></td>
                      <td className="tableCell"><p className="tableText" >{user.winnerQty}</p></td>
                      <td>
                        {user.winnerQty > 0 ? (
                          <figure className="image is-24x24">
                            <img src="images/winnerIcon.svg" />
                          </figure>
                        ) : null}

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          {isLoadingDisabled ? (
            <button className="button is-primary is-align-self-flex-start" disabled={isLoadingDisabled} >load more ...</button>
          ) : (
              <a href={pageLink} className="is-align-self-flex-start">
                <button className="button is-primary " disabled={isLoadingDisabled} >load more ...</button>
              </a>
            )
          }
        </div>
        <div className="column">
          <figure className="image is-4by3">
            <img src="images/winnersImage.svg" />
          </figure>
        </div>
      </TwoColumnsTemplate>
    </section>
  )
};

export default ResultsTables;

