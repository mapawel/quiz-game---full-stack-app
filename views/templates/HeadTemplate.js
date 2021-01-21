import React from 'react';

const HeadTemplate = ({ children, title }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/css/main.css"></link>
    </head>
    <body>
      {children}
    <script src="/js/menu.js"></script>
    <script src="/js/notifications.js"></script>
    </body>
  </html>
)

export default HeadTemplate;
