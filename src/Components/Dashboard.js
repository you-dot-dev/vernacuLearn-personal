import { Link, Redirect } from "react-router-dom"

const Dashboard = (props) => {

    return(
      <div>
        {!props.isLoggedIn ? <Redirect to="/"/> : null}
        <nav className="nav">
          <ul>
            <li><Link to="/Dashboard">Home</Link></li>
            <li><Link to="/Interests">Interests</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
          </ul>
        </nav>
        <h1 className="welcome">Welcome, {props.currentUser.firstname} !!!!!!  <br/>You did it!  <br/>Directing you to interest page shortly</h1>

        <button className="login-btn">logout</button>

      </div>
      
    )
}


export default Dashboard