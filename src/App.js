import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards';
import {useState} from 'react';
import Dashboard from './Components/Dashboard'
import {Route, Switch, Link} from 'react-router-dom';
import {Component} from 'react';


class App extends Component{
  constructor(){
    super()

    this.state = {
      isLoggedIn: false,
      currentUser: {
        firstname: '',
        lastname: '',
        email: '',
      }

      
    }
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.setLoggedIn = this.setLoggedIn.bind(this);
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
  
  render(){
    return(
      <div className="App">
    
        <Switch> 
          <Route path='/' >
          {this.state.isLoggedIn ? <Dashboard currentUser={this.state.currentUser} /> : <Register 
            setLoggedIn={this.setLoggedIn}
            setCurrentUser={this.setCurrentUser}/>
            }
           
          </Route>
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/Profile'>
            <Profile/>
          </Route>
          <Route path='/Cards'>
            <Cards/>
          </Route>
          <Route path='/Dashboard'>
            
          </Route>
        </Switch>
        
    
      </div>
    )
  }

}

export default App;