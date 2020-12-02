import axios from 'axios';
import {useState} from 'react';
import { Redirect } from 'react-router-dom';
axios.defaults.withCredentials = true;

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e){
    e.preventDefault()
      axios.post('http://localhost:1234/auth/login', {
        email,
        password
      })
      .then(res => {
        if(res.data && res.data.firstname) {
          console.log("res.data in login form:", res.data);
          props.setCurrentUser(res.data);
          props.setLoggedIn(true);
         
        }
      })
      .catch(err => {
        console.log("login err:", err)
      })
  }

  return (
    <div className="container">
      {props.isLoggedIn ? <Redirect to="/Dashboard"/> : null}
    <form className="form-wrap">
      <h1>login to vernacuLearn</h1>
      <div className="form-group">
      <label htmlFor="text">email address</label>
      <input 
      type="email"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
      /></div>
      <div className="form-group">
      <label htmlFor="text">password</label>
      <input 
      type="password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      /></div>
      <button
        type="submit"
        onClick={(e) => onSubmit(e)}
        
        >Log in here</button>

    </form>
    </div>
  )
}

export default Login;