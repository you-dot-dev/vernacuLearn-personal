import {Switch, Route} from 'react-router-dom';


export default (
  <Switch>
    <Route exact path='/Auth' component={Auth}/>
    <Route path='/Dashboard' component={Dashboard}/>
    <Route path='/Profile' component={Login}/>
    <Route path='/' component={Auth}/>

  </Switch>
)