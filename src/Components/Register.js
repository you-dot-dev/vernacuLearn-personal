import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const Register = (props) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


 function handleSubmit(e){
   e.preventDefault();
   console.log("wtf???")
   axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
     firstName,
     lastName,
     email,
     password
    })
    .then(res => {
      console.log(res.data)
      props.setCurrentUser(res.data[0]);
      props.setLoggedIn(true);
    })
    .catch(err => console.log(err))
  }
  console.log("getting data", firstName, lastName, email, password)
  
  return (
    <div className="container">
     <div className="form-wrap">
     
      <h1>welcome to vernacuLearn</h1>
      <p>it's free and only takes a minute</p>
    <div className="form-group">
      <label htmlFor="text">enter first name</label>
      <input 
      type="text"
      name="firstName"
      onChange={(e) => setFirstName(e.target.value)}
      /> </div>
      <div className="form-group">
      <label htmlFor="text">enter last name</label>
       <input 
      type="text"
      name="lastName"
      onChange={(e) => setLastName(e.target.value)}
      /></div>
      <div className="form-group">
      <label htmlFor="text">enter email address</label>
      <input 
      type="text"
      name="email"
      onChange={(e) => setEmail(e.target.value)}
      /></div>
      <div className="form-group">
      <label htmlFor="text">enter password</label>
      <input
      type="password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      /></div>
      

      <button
      className="reg-log"
      type="submit"
       onClick={(e) => {handleSubmit(e)}}>sign up </button>

       <p className="bottom-text">
         By clicking the Sign Up button, you agree to our Terms and Conditions and Privacy Policy
       </p>

    </div>
       
     
    <footer>
      <p className="login-btn">already have an account? <Link to="/Login">log in here</Link></p>
       </footer>
    </div> 
  
  )
}

export default Register;