import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards';
import {useState} from 'react';
import Dashboard from './Components/Dashboard'
import {Route, Switch, Redirect} from 'react-router-dom';
import {Component} from 'react';
import axios from 'axios';


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

  componentDidMount(){
    axios.get("http://localhost:1234/auth/userInfo")
    .then(res => {
      
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
  
  render(){
    return(
      <div className="App">
    
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
            <Profile/>
          </Route>
          <Route path='/Cards'>
            <Cards/>
          </Route>
          <Route path='/Dashboard'>
            <Dashboard
            currentUser={this.state.currentUser}
            isLoggedIn={this.state.isLoggedIn}/>
          </Route>
        </Switch>
        
    
      </div>
    )
  }

}

export default App;