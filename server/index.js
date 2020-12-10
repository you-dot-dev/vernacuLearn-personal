require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;
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
  methods: ["GET", "POST", "DELETE", "PUT", "HEAD"],
  credentials: true
}));
app.use(session({
  resave:false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
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
app.get('/api/myCards/:ownerId', cardCtrl.getMyCards)
app.get('/api/myCards/:ownerId/:cardId', cardCtrl.getMyCard)
app.put('/api/myCards/:ownerId/:cardId', cardCtrl.updateMyCard)
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.put('/auth/editUser', authCtrl.editUser)
app.post('/auth/logout', authCtrl.logout)
app.post('/api/cards', cardCtrl.addCard)
app.put('/api/cards/:id', cardCtrl.editCard)
app.delete('/api/cards/:id', cardCtrl.deleteCard)


app.get('/api/sign-s3', require("./signedS3Controller"));


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))


