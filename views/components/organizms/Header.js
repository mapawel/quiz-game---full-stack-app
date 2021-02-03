import React from 'react';
import TwoColumnsTemplate from '../../templates/TwoColumnsTemplate';

const Header = () => (
  <section className="section">
    <TwoColumnsTemplate>
      <div className="column is-flex is-justify-content-center">
        <div className="header-img"></div>
      </div>
      <div className="column is-flex is-flex-direction-column">
        <h1 className="title is-3 is-size-2-tablet is-size-1-desktop mb-6 mt-2">Welcome to the Quiz Game</h1>
        <h3 className="subtitle is-5 is-size-4-tablet is-size-3-desktop has-text-grey mb-6">
          Let's try to test yourself in general knowledge. Can you join the winners?
          </h3>
        <a href="/auth" className="is-align-self-flex-end button is-success is-rounded is-medium mr-5">Play</a>
      </div>
    </TwoColumnsTemplate>
  </section>
);

export default Header;

