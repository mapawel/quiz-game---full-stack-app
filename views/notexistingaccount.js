import React from 'react'
import HeadTemplate from './templates/HeadTemplate';

const Root = ({ userName, isLoggedIn, avatar, title, message }) => (
  <HeadTemplate
    title={title}
    userName={userName}
    isLoggedIn={isLoggedIn}
    avatar={avatar}
  >
    <h1>{message}</h1>
  </HeadTemplate>
)

export default Root;