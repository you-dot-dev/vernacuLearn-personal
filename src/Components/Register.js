import axios from 'axios';
import {useState} from 'react';

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 function handleSubmit(e){
   e.preventDefault();
   console.log("wtf???")
   axios.post('http://localhost:1234/auth/register', {
     firstName,
     lastName,
     email,
     password
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  console.log("getting data", firstName, lastName, email, password)
  
  return (
    <form>
     
      <h1>Register Here.</h1>
      <input 
      type="text"
      name="firstName"
      placeholder="first name here"
      onChange={(e) => setFirstName(e.target.value)}
      />
      <input 
      type="text"
      name="lastName"
      placeholder="last name here"
      onChange={(e) => setLastName(e.target.value)}
      />
      <input 
      type="text"
      name="email"
      placeholder="email"
      onChange={(e) => setEmail(e.target.value)}
      />
      <input 
      type="password"
      name="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
      />
      

      <button
      type="submit"
       onClick={(e) => {handleSubmit(e)}}>Click me </button>
    
    </form>
  )
}

export default Register;