import './App.scss';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards';
import Dashboard from './Components/Dashboard'
import {Route, Switch, Redirect} from 'react-router-dom';
import {Component} from 'react';
import axios from 'axios';
import Logout from './Components/Logout';
import NewCard from './Components/NewCard';
import EditCard from './Components/EditCard';
import Nav from './Components/Nav';
import Interests from './Components/Interests'


class App extends Component{
  constructor(){
    super()


    this.state = {
      isLoggedIn: false,
      currentUser: {
        firstname: '',
        lastname: '',
        email: '',
      },
      menuOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_API_URL}/auth/userInfo`)
    .then(res => {
      console.log("userInfo res:", res.data);
      if(!res.data.firstname) {
        console.log('dont have first name');
      } else {
        this.setState({
          currentUser: res.data,
          isLoggedIn: true
        })
      }
      
    }) 
  }

  setCurrentUser(user){
    console.log(user)
    this.setState({
      currentUser: user
    })
  }

  setLoggedIn(userIsLoggedIn){
    this.setState({
      isLoggedIn: userIsLoggedIn
    })
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  
  render(){
    return(
      <div className="App">
        

        {this.state.isLoggedIn ? 
        <>
        <svg viewBox="0 0 100 80" width="40" height="40" onClick={this.toggleMenu}>
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
        <Nav isLoggedIn={this.state.isLoggedIn} menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu} />
         </> 
          
        : null}
    
        <Switch> 
          <Route exact path='/' >
          {this.state.isLoggedIn ? <Redirect to="/Dashboard"/> : <Register 
            setLoggedIn={this.setLoggedIn}
            setCurrentUser={this.setCurrentUser}/>
            }
           
          </Route>
          <Route path='/Login'>
            <Login
            setLoggedIn={this.setLoggedIn}
            setCurrentUser={this.setCurrentUser}
            isLoggedIn={this.state.isLoggedIn}
            />
          </Route>
          <Route path='/Profile'>
            <Profile
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}
            setCurrentUser={this.setCurrentUser}/>
          </Route>
          <Route path='/Cards'>
            <Cards/>
          </Route>
          <Route path='/Interests'>
            <Interests
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}/>
          </Route>
          <Route path='/Dashboard'>
            <Dashboard
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}/>
          </Route>
          <Route path='/Logout'>
            <Logout
            setCurrentUser={this.setCurrentUser}
            setLoggedIn={this.setLoggedIn}/>
          </Route>
          <Route path="/NewCard">
            <NewCard
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}/>
          </Route>
          <Route path="/EditCard/:cardId">
            <EditCard
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}/>
          </Route>
        </Switch>
        
    
      </div>
    )
  }

}

export default App;