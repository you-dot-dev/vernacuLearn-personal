import { Link } from 'react-router-dom';

const Nav = (props) => {
  return(
    <nav className={props.menuOpen ? "nav nav-open": "nav"} id="navigation">
      <ul>
        <li><Link to="/Dashboard">Home</Link></li>
        <li><Link to="/Cards">Cards</Link></li>
        <li><Link to="/Interests">Interests</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/NewCard">Add New Card</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
      </ul>
      <button 
        className="add-card"
        onClick={props.toggleMenu}>Close</button>
    </nav>
  )
}

export default Nav;