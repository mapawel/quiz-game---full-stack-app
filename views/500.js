import React from 'react'
import HeadTemplate from './templates/HeadTemplate';
import Navbar from './templates/Navbar';
import Spacer from './components/atoms/Spacer';

const Page500 = ({ userName, isLoggedIn, avatar, title, error }) => (
  <HeadTemplate
    title={title}
  >
    <Navbar userName={userName} isLoggedIn={isLoggedIn} avatar={avatar} />
    <Spacer />
    <p>Technical problemm occured: </p>
    <p>{error}</p>
  </HeadTemplate>
)

export default Page500;