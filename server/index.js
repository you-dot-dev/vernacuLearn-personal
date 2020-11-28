require('dotenv').config();
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const session = require('express-session');


const app = express();



//middleware
app.use(express.json());
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
app.get('/auth/login', ctrl.login)
app.get('/auth/register', ctrl.register)
app.get('/api/cards', ctrl.getAllCards)
app.get('/api/cards/:id', ctrl.getOneCard)
app.get('/api/cards/:id', ctrl.getOneCard)
app.post('api/cards/:id', ctrl.addCard)
app.put('api/cards/:id', ctrl.editCard)
app.delete('api/cards/:id', ctrl.deleteCard)


app.listen(SERVER_PORT, console.log(`listening on port ${SERVER_PORT}`))


