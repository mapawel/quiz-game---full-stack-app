import React from 'react'
import HeadTemplate from '../templates/HeadTemplate';
import Clock from '../components/organizms/Clock';
import Message from '../components/molecules/Message';

const PlayGame = ({ userName, title, avatar, message, gameData: { question, answers, id }, currentGame: { questionsToAnswer = 10, gameStartTime }, userScore: {
  maxScore, bestWinFormatedTime }, isLoggedIn }) => {
  let userResult = '';
  if (maxScore * 1 === 1) userResult = `${maxScore} point`;
  else if (maxScore * 1 === 10) userResult = `WIN in ${bestWinFormatedTime}`;
  else userResult = `${maxScore} points`;

  return (
    <HeadTemplate
      title={title}
      userName={userName}
      isLoggedIn={isLoggedIn}
      avatar={avatar}
    >
      <section className="section game-section">
        <div className="container is-widescreen">
          <div className="columns is-desktop is-vcentered">
            <div className="column ml-4">
              <Clock />
            </div>
            <div className="column is-flex is-flex-direction-column">
              <p className="subtitle is-6 is-size-5-tablet is-size-4-desktop has-text-grey mb-2">
                Question to answer: <span className="title is-4 is-size-3-tablet is-size-2-desktop">{questionsToAnswer}</span>
              </p>
              <p className="subtitle is-6 is-size-5-tablet is-size-4-desktop has-text-grey mb-4">
                Total game time: <span id="gameTime" data-gamestarttime={gameStartTime} className="title is-4 is-size-3-tablet is-size-2-desktop"></span>
              </p>
              <p className="subtitle is-7 is-size-6-tablet is-size-5-desktop has-text-grey">
                Your best score: <span className="title is-6 is-size-5-tablet is-size-4-desktop">
                  {userResult}
                </span>
              </p>
            </div>
          </div>
          <div className="box p-5">
            <div className="columns is-centered">
              <div className="column is-flex is-flex-direction-column">
                <p className="title is-6 is-size-5-tablet is-size-4normal-desktop">
                  {question}
                </p>
              </div>
            </div>
          </div>
          <div className="is-flex is-flex-direction-column">
            {answers.map((answer, index) =>
              <form method="POST" action="/game/play" key={index}>
                <button type="submit" id={index} className="button is-primary is-outlined mb-2 is-fullwidth">{answer}</button>
                <input type="hidden" name="answerNumber" value={index}></input>
                <input type="hidden" name="questionId" value={id}></input>
              </form>
            )}
          </div>
          {message && <Message message={message} close="game" />}
        </div>
      </section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossOrigin="anonymous"></script>
      <script src="/js/gameClock.js"></script>
    </HeadTemplate>
  )
}

export default PlayGame;