const debug = require('debug')('game')
const dotenv = require('dotenv').config()
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const { flash } = require('express-flash-message');
const User = require('./models/user');
const rootRoutes = require('./routes/rootRoutes');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');

if (dotenv.error) {
  throw dotenv.error
  console.log(dotenv.error)
}
const dburl = process.env.DBURL
const sesstionSecret = process.env.SESSIONSECRET

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.log('ERROR WHILE INITIAL CONNECT TO MONGODB', err));

const store = new MongoDBStore({
  uri: dburl,
  collection: 'sessions'
});
store.on('error', function (error) {
  console.log(error);
});

const app = express();
const db = mongoose.connection;
const port = process.env.port || 8000;
const userSession = {
  secret: sesstionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: {},
  store,
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(session(userSession));
app.use(flash({ sessionKeyName: 'flashMessage', useCookieSession: true }));



app.use(async (req, res, next) => {
  try {
    if (req.session.user) {
      const currentUser = await User.findById(req.session.user._id).exec();
      if (!currentUser) next()
      req.session.user = currentUser;
      res.locals.isLoggedIn = currentUser.isLoggedIn;
      res.locals.userName = currentUser.name;
      res.locals.avatar = currentUser.avatar;
      req.session.currentGame = ({ ...req.session.currentGame });
    }
    next();
  } catch (err) {
    console.log(err);
  }
})

app.use((req, res, next) => {
  debug(req.method + ' ' + req.url);
  next()
})

app.use('/', rootRoutes);
app.use('/auth', authRoutes);
app.use('/game', gameRoutes);




db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(port, () => {
    console.log('Database connected!')
    console.log(`server started at ${port}`)
  })
});
