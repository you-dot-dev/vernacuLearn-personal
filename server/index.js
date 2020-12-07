require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const session = require('express-session');
const cardCtrl = require('./cardController');
// import interestCtrl from './interestController';
const authCtrl = require('./authController');
const cors = require('cors');

const app = express();



//middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(session({
  resave:false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 100 * 60 * 60 * 24 * 7,
  }, 
})
);

massive({
  connectionString: CONNECTION_STRING,
  ssl:{
    rejectUnauthorized: false
  }
}).then((db) => {
  app.set('db', db);
  console.log('db is connected yo')
}).catch(err => console.log('database error' + err));


//endpoints
app.get('/api/cards', cardCtrl.getAllCards)
app.get('/auth/userInfo', authCtrl.userInfo)
app.get('/api/cards/:id', cardCtrl.getOneCard)
app.get('/api/myCards/:id', cardCtrl.getMyCards)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.put('/auth/editUser', authCtrl.editUser)
app.post('/auth/logout', authCtrl.logout)
app.post('/api/cards', cardCtrl.addCard)
app.put('/api/cards/:id', cardCtrl.editCard)
app.delete('/api/cards/:id', cardCtrl.deleteCard)


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))


