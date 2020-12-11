/* Auth Controller*/
const bcrypt = require('bcrypt');

module.exports = {

  register: async (req, res) => {
    console.log('registration wtf')
    const db = req.app.get('db');
    const {firstName, lastName, email, password} = req.body
    console.log(req.body)
    console.log("email wtf", email)

    try{
      console.log('trying to finduser wtf...')
      const foundUser = await db.find_email(email)
      console.log('foundUser wtf', foundUser)

      if(foundUser[0]){
        res.status(400).send('user already exists with this email')
      } else {
        console.log('about to gensalt...')

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const newUser = await db.register_user([firstName, lastName, email, hash])
        console.log('newUser wtf', newUser)

        req.session.user = newUser;
        res.status(200).send(req.session.user)
        console.log('hello from auth')
      }
    } catch(err){
      'database error on registration function', err
    }
  },

  login: async (req, res) => {
    console.log("req.bodywtf", req.body)
    const db = req.app.get('db');
    const {email, password} = req.body;
    const [foundUser] = await db.find_email(email);
    if(foundUser){
      const comparePassword = foundUser.password
      const authenticated = bcrypt.compareSync(password, comparePassword)
      console.log("foundUser wtf", foundUser)
      if(authenticated){
        delete foundUser.password
        req.session.user = foundUser;
        console.log("user logged in wtf", req.session)

        res.status(200).send(req.session.user)
      } else{
        res.status(401).send('email or password is incorrect')
      }
    } else{
      res.status(401).send('enail or password incorrect')
    }
  },

  updateProfile: async (req, res) => {
    const db = req.app.get('db')
    const {profile_url} = req.body;
    console.log("updateProfile req.body:", req.body);
    const {id} = req.session.user;

    const updatedUser = await db.update_profile([profile_url, id])
    req.session.user = updatedUser[0]
    console.log("updated profile pic. new session.user:", req.session.user);
    res.status(200).send(req.session.user)
  },

  userInfo: async (req, res) => {
    console.log("userInfo called");
    console.log("req.session", req.session);
    if (req.session && req.session.user) {
      console.log("req.session", req.session);
      res.json(req.session.user);
    } else {
      res.json({});
    }
  },

  logout: (req, res) => {
    const db = req.app.get('db')
    req.session.destroy()
    res.sendStatus(200)
  }

}