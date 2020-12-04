import { Link, Redirect } from "react-router-dom";
import {useState} from 'react';
import Nav from './Nav';

const Dashboard = (props) => {
  const [toggle, setToggle] = useState(false)

    return(
      <div>
        {!props.isLoggedIn ? <Redirect to="/"/> : null}
        <nav className="nav">
          <Nav onClick={() =>{setToggle(!toggle)}}/>

          <ul>
            <li><Link to="/Dashboard">Home</Link></li>
            <li><Link to="/Cards">Cards</Link></li>
            <li><Link to="/Interests">Interests</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
            <li><Link to="/NewCard">Add New Card</Link></li>
          </ul>
        </nav> 
        
        <h1 className="welcome">Welcome, {props.currentUser.firstname} !!!!!!  <br/>You did it!  <br/>Directing you to interest page shortly</h1>

        

      </div>
      
    )
}


export default Dashboard