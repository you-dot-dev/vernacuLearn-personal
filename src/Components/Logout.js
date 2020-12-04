import { useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const Logout = (props) => {

  useEffect(() => {
    axios.post('http://localhost:1234/auth/logout')
    .then(res => {
      props.setCurrentUser({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      })
     props.setLoggedIn(false)
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className="container">
      <div className="form-wrap">
      <h1>Sad to see you go</h1>
      <p className="login-btn">accidentally signed out? <Link to="/Login">log in here</Link></p>
      </div>
    </div>
  )

}

export default Logout