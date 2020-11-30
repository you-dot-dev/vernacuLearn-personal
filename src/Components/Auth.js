import {useState, useEffect} from 'react';

const Auth = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log("Using the effect!");

    let something = "this is a string?";
    return () => {
      console.log("Done with the effect wtf!");
      console.log("something???", something)
    }
    //e.target.name = e.target.value
  })
  /*
  const setFirstName = (e) => {
    e.target.name = e.target.value
  }
  */
  
  return (
    <div>
      <h1>Register Here.</h1>
      <input 
      type="text"
      name="firstName"
      placeholder="first name here"
      onChange={setFirstName}
      />
      <input 
      type="text"
      name="lastName"
      placeholder="last name here"
      
      />
      <input 
      type="text"
      name="email"
      placeholder="email"
      
      />
      <input 
      type="text"
      name="password"
      placeholder="password"
      
      />
      

      <button>Click me </button>
    </div>
  )
}

export default Auth;