import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MyStats from './components/organizms/MyStats';

const Root = ({ userName, isLoggedIn, title, resultsTables }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} />
      <Header />
      <Winners resultsTables={resultsTables} />
      <MyStats />
  </HeadTemplate>
)

export default Root;