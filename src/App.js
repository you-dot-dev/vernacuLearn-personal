import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards';
import {useState} from 'react';
import Dashboard from './Components/Dashboard'
import {Route, Switch, Link} from 'react-router-dom';


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)


  return(
    <div className="App">

      <Switch> 
        <Route path='/'>
          <Register/>
          
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
          <Dashboard/>
        </Route>
      </Switch>
      

    </div>

  )
}

export default App;