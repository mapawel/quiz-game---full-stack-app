import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Header from './components/organizms/Header';
import Winners from './components/organizms/Winners';
import MainStats from './components/organizms/MainStats';
import Message from './components/molecules/Message';

const Root = ({ userName, isLoggedIn, avatar, title, resultsTables, message, mainStats }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    {message && <Message message={message} />}
    <Header />
    <Winners resultsTables={resultsTables} />
    <MainStats mainStats={mainStats} />
  </HeadTemplate>
)

export default Root;