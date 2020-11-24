/* Auth Controller*/
const bcrypt = require('bcrypt');

module.exports = {

  register: async (req, res) => {
    const db = req.app.get('db');
    const {firstName, lastName, email, password} = req.body
    try{
      const [foundUser] = await db.find_email(email)
      if(foundUser){
        res.status(400).send('user already exists with this email')
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const [newUser] = await db.register_user([email, hash])
        req.session.user = newUser;
        res.status(200).send(req.session.user)
      }
    } catch(err){
      'database error on registration function', err
    }
  },

  login: async (req, res) => {
    const db = req.app.get('db');
    const {email, password} = req.body;
    const [foundUser] = await db.find_email(email);
    if(foundUser){
      const comparePassword = foundUser.password
      const authenticated = bcrypt.compareSync(password, comparePassword)
      if(authenticated){
        delete foundUser.password
        req.session.user = foundUser
        res.status(200).send(req.session.foundUser)
      } else{
        res.status(401).send('email or password is incorrect')
      }
    } else{
      res.status(401).send('enail or password incorrect')
    }
  },

  editUser: async (req, res) => {
    const db = req.app.get('db')
    const {img} = req.body
    const {user_id} = req.session.user

    const updatedUser = await db.edit_user([user_id, username, img])
    req.session.user = updatedUser[0]
    res.status(200).send(req.session.user)
  },
  logout: (req, res) => {
    const db = req.app.get('db')
    req.session.destroy
    res.sendStatus(200)
  }

}