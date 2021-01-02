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
        <div className="container">
          <div className="form-wrap">
        <h1 className="welcome">Welcome to vernacuLearn, {props.currentUser.firstname} </h1>
          <h3 style={{textAlign:"center"}}>happy to have you here</h3>
          <h2>A little about us:</h2>
          <p>vernacuLearn is a career-driven application that is designed for professionals who want a deeper dive into their work environment, and for individuals who are looking for a career change but don't understand the verbiage used by other people in the field. feel free to scan through our pre-made cards by interest and expand your knowledge on the selected interest</p>
          <h2>What we offer:</h2>
          <p>as of currently, vernacuLearn offers 21 different topics that encapsulate a broad variety of career choices and interests. you will see that we also offer a "words you should know" category that give you a giant list of words that can be used in normal dialogue that makes you look and feel more intelligent. you can find a list of our interests <Link to="/Interests">here</Link></p>
            </div>
        </div>

      </div>
      
    )
}


export default Dashboard