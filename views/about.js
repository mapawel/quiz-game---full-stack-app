import React from 'react';
import HeadTemplate from './templates/HeadTemplate';
import TwoColumnsTemplate from './templates/TwoColumnsTemplate';

const Header = ({ userName, isLoggedIn, avatar, title }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <section className="section mt-6">
      <TwoColumnsTemplate>
        <div className="column is-flex is-flex-direction-column">
          <p className="title is-4 is-size-3-tablet is-size-2-desktop mb-6">About this project</p>
          <p className="is-size-6 mb-3">
            The QUIZ GAME is not a commercial project. It was created for fun as a result of practicing web development skills and is part of the author's portfolio.
          </p>

          <p className="is-size-6 mb-6">
            The project stores basic data of logged in users in the database ans uses cookies. The author has made effort to ensure that these data are secured, however, he cannot take full responsibility for it due to the nature of the project - you use this app at your own risk.
          </p>
          <p className="title is-6 is-size-5-tablet is-size-5-desktop mb-3">Tech-stack</p>
          <p className="is-size-6 mb-3">
            This is full-stack application. The entire application code is on the server side, created in Java Script on Node.js with the use of Express.js and many useful libraries.
            The application includes a fairly extensive auth module with full data validation and authentication via mail. User account editing and deletion possible.
            Browser-side JS code minimized. The application dynamically renders through the server upon receiving a request for static views.
            All user and game data are stored in MongoDB. Statistics module prepared.</p>
          <p className="is-size-6 mb-6">
            For styling Bulma library used due to focus on backend, this is not a front-end portfolio element. A "clock" component created on demand of this game.
            </p>
        </div>
        <div className="column is-flex is-justify-content-center">
          <figure class="image is-1x1">
            <img src="images/aboutImage.svg" />
          </figure>
        </div>
      </TwoColumnsTemplate>
      <TwoColumnsTemplate>
        <a href="https://github.com/mapawel/quiz-game---full-stack-app" class="column button is-rounded is-primary mx-6 my-4 p-2">See code</a>
        <a href="https://github.com/mapawel" class="column button is-rounded is-primary mx-6 my-4 p-2">Author's github</a>
        <a href="https://www.devpav.com/" class="column button is-rounded is-primary mx-6 my-4 p-2">Author's web-site</a>
      </TwoColumnsTemplate>
    </section>
  </HeadTemplate >
);

export default Header;

