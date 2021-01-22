import React from 'react';

const Header = () => (
  <section className="section">
    <div className="container is-widescreen mt-5">
      <div className="columns is-desktop is-vcentered">
        <div className="column is-three-fifths">
          <figure className="image is-4by3">
            <img className="header-img" src="/images/headerImage.svg" />
          </figure>
        </div>
        <div className="column is-flex is-flex-direction-column">
          <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">Welcome to the Quiz Game</h1>
          <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
            Let's try to test yourself in general knowledge. Can you join to the winners?
          </h3>
          <a href="/auth" className="is-align-self-flex-end">
            <button className="button is-success is-medium mr-5"><strong>PLAY</strong></button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Header;

