# QUIZ GAME
## full stack SSR with auth and database

> :warning: One of my first backend projects completed during my backend-end learning. Since that time, I have gained a lot of skills, and today it would look completely different :see_no_evil: I leave the code in the repository as a trace of my learning process from 2020 for comparison with current projects.

#### Tech stack:

- Node.js -> Express.js
- MongoDB -> Mongoose
- Express React Views
- Nodemailer
- Bcryptjs
- Express Flash Message
- Express Validator
- Multer
- Moment

### Project scope:

- full design with a selection of fonts, colors, illustrations
- creating graphic components - e.g. an animated clock
- design templates for front of the application
- creating a server application that connects to the database and provides data in templates to the front
- authentication and authorization system
- creating a user zone with data management
- creating game logic, actions, scoring, timing
- creating statistics and rankings
- launching the application on the cheapest possible hosting to present the operation
- application for further development after finding a commercial use.


### Description:
#### technicals

Whole App coded in JS on Node.js with use of Express.js. Server with Node generates html files which are displied in user's web browser - they are custom and depend on user's behaving. Also static JS files are served what is important to give the game smooth run (time lapse effect). App uses Mongo DB to store users' data and game data and express-session and cookies to keep user logged in, to log out etc.

The application includes a fairly extensive auth module with full data validation and authentication via mail - Nodemailer used. User account editing and deletion possible. Validation on the server is possible due to use of Express Validator, Photos (Avatars) can be hadled by Multer.

#### type

A server-side rendered web game displayed in a browser.

RWD (display on large screens as well as tablets or mobile phones).

#### goal

Creation of an MVP to present a working example of a quiz game using various technologies. App for further development after finding a commercial use.

#### design

The design wasn't the most important point here so components library was used to make the work faster however it's clear and universal. Ilustrations were used to create more attractive views. Some custom components - e.g. an animated clock. The app's views are dynamically generated on server.

#### statistics, cheating possibility

All registered users can build game results history and have acces to statistics view where basic game data are displaied. You can also play the game as a Guest user and if you make registration later you can merge your guest data to your account.

The app is cheating proof - no data about right answer is sent to front-end before giving the answer by user. User cannot see the same question two times if he knows the answer from previous game play...


