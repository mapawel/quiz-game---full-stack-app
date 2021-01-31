import React from 'react';
import Footer from '../components/organizms/Footer';
import Navbar from './Navbar';
import Spacer from '../components/atoms/Spacer';

const HeadTemplate = ({ userName, isLoggedIn, avatar, menuActive, children, title }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/css/main.css"></link>
      <link rel="stylesheet" href="/css/header-img.css"></link>
      <link rel="stylesheet" href="/css/my-stat-img.css"></link>
    </head>
    <body>
      <Navbar
        userName={userName}
        isLoggedIn={isLoggedIn}
        avatar={avatar}
        menuActive={menuActive}
      />
      <Spacer />
      {children}
      <Footer />
      <script src="/js/menu.js"></script>
      <script src="/js/notifications.js"></script>
    </body>
  </html>
)

export default HeadTemplate;
