import { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

const Profile = (props) => {

  console.log("props from profile", props)


  useEffect(() => {
    if(!props.isLoggedIn){
      props.history.push('/')
    }

  }, [props.isLoggedIn])
  

    
  return (
    <div className="container">
      <div className="form-wrap">
      <h1>{props.currentUser.firstname} {props.currentUser.lastname}</h1>
      <h3>{props.currentUser.email}</h3>
      <label for="avatar">Choose a profile picture:</label>
      <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg"></input>
       <h3>Interests: </h3>
       <li>one</li>
       <li>two</li>
       <li>three</li>
       <li>four</li>
    </div>
    </div>
  )
}

export default withRouter(Profile);