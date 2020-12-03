import { useEffect } from 'react';
import axios from 'axios';

const Logout = (props) => {

  useEffect(() => {
    axios.post('http://localhost:1234/auth/logout')
    .then(res => {
      props.setCurrentUser({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      })
     props.setLoggedIn(false)
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <h1>logging you out</h1>
  )

}

export default Logout