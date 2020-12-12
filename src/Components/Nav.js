import { Link } from 'react-router-dom';

const Nav = (props) => {
  return(
    <nav className={props.menuOpen ? "nav nav-open": "nav"} id="navigation">
      <ul>
        <li><Link to="/Dashboard" onClick={props.toggleMenu}>Home</Link></li>
        <li><Link to="/Cards" onClick={props.toggleMenu}>Cards</Link></li>
        <li><Link to="/Interests" onClick={props.toggleMenu}>Interests</Link></li>
        <li><Link to="/Profile" onClick={props.toggleMenu}>Profile</Link></li>
        <li><Link to="/NewCard" onClick={props.toggleMenu}>Add New Card</Link></li>
        <li><Link to="/Logout" onClick={props.toggleMenu}>Logout</Link></li>
      </ul>
      <button 
        className="add-card"
        onClick={props.toggleMenu}>Close</button>
    </nav>
  )
}

export default Nav;