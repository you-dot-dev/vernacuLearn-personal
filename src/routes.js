import {Switch, Route} from 'react-router-dom';
import Profile from './Components/Profile';
import Auth from './Components/Auth';
import Dashboard from './Components/Dashboard';
import Interests from './Components/Interests';



export default (
  <Switch>
    <Route path='/Auth' component={Auth}/>
    <Route path='/Dashboard' component={Dashboard}/>
    <Route path='/Profile' component={Profile}/>
    <Route path='/' component={Auth}/>
    <Route path='/Interests' component={Interests}/>
    
    

  </Switch>
)