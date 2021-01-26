import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MainStats from './components/organizms/MainStats';

const Root = ({ userName, isLoggedIn, avatar, title, resultsTables, message, mainStats }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
    {message &&
      <div className="container is-widescreen">
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="notification is-warning self-close">
              <button className="delete"></button>
              <div className="block">
                {message}
              </div>
            </div>
          </div>
        </div>
      </div>
    }
    <Header />
    <Winners resultsTables={resultsTables} />
    <MainStats mainStats={mainStats} />
  </HeadTemplate>
)

export default Root;