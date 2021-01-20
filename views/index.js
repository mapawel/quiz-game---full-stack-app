import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MyStats from './components/organizms/MyStats';

const HelloMessage = ({ userName, title, resultsTables }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} />
      <Header />
      <Winners resultsTables={resultsTables} />
      <MyStats />
  </HeadTemplate>
)

export default HelloMessage;