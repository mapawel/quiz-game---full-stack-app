import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MainStats from './components/organizms/MainStats';
import Message from './components/molecules/Message';
import Spacer from './components/atoms/Spacer';

const Root = ({ userName, isLoggedIn, avatar, title, resultsTables, message, mainStats }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
    <Spacer />
    {message && <Message message={message} />}
    <Header />
    <Winners resultsTables={resultsTables} />
    <MainStats mainStats={mainStats} />
  </HeadTemplate>
)

export default Root;