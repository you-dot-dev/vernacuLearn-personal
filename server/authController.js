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
  login: (req, res) => {

  },
  logout: (req, res) => {

  }

}