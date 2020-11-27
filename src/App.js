import './App.css';
import Auth from './Components/Auth';
import Login from './Components/Login';
import Profile from './Components/Profile';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Auth/>
      <Login/>
      <Cards/>
      <Profile/>
      

    </div>
  );
}

export default App;
