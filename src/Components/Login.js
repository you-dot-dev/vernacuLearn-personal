import axios from 'axios';
import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e){
    e.preventDefault()
      axios.post('http://localhost:1234/auth/login', {
        email,
        password
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  return (
    <form>
      <h1>this is where you will log in</h1>
      <input 
      type="email"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
      placeholder='email here'
      />
      <input 
      type="password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      placeholder='password please'
      />
      <button
        type="submit"
        onClick={(e) => onSubmit(e)}
        
        > Log in here</button>

    </form>
  )
}

export default Login;