import {useState, useEffect} from 'react';

const Auth = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  handleSubmit(){
    
  }
  
  return (
    <div>
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
      type="text"
      name="password"
      placeholder="password"
      onChange={(e) => setPassword(e.target.value)}
      />
      

      <button onSubmit={handleSubmit}>Click me </button>
    
    </div>
  )
}

export default Auth;