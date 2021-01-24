import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MyStats from './components/organizms/MyStats';

const Root = ({ userName, isLoggedIn, title, resultsTables, message }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} />
    {message &&
      <div className="container is-widescreen">
        <div className="columns is-centered mt-5">
          <div className="column is-half">
            <div className="notification is-warning">
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
    <MyStats />
  </HeadTemplate>
)

export default Root;