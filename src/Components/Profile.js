import { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import GridLoader from 'react-dropzone';
import axios from 'axios';
import { v4 as randomString } from 'uuid';

const Profile = (props) => {

  console.log("props from profile", props)

  const [isUploading, setIsUploading] = useState(false);


  useEffect(() => {
    if(!props.isLoggedIn){
      props.history.push('/')
    }

  }, [props])
  
  const getSignedRequest = ([file]) => {
    setIsUploading(true)
 
    const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`
 
    axios.get('/api/sign-s3', {
      params: {
        'file-name': fileName,
        'file-type': file.type
      }
    }).then( (response) => {
      const { signedRequest, url } = response.data 
      uploadFile(file, signedRequest, url)
      console.log("upload file url:", url);
    }).catch( err => {
      console.log(err)
    })
 }

 const uploadFile = (file, signedRequest, url) => {
  const options = {
    headers: {
      'Content-Type': file.type,
    },
  };

  axios
    .put(signedRequest, file, options)
    .then(response => {
      setIsUploading(false);
      console.log("response", response)

      axios.put(`${process.env.REACT_APP_API_URL}/auth/updateProfile`, {
        profile_url: url
      })
      .then( (res)=> {
        props.setCurrentUser(res.data);
      })
      .catch( (err) => {console.log("update profile err:", err)});
      
    })
    .catch(err => {
      setIsUploading(false);
      console.log(err)
    });
  };
    
  const profileStyle = {
    backgroundImage: 'url(' + props.currentUser.profile_url + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '200px',
    width: '200px',
    display: 'inline-block'
  }

  return (
    <div className="container">
      <div className="form-wrap">
      <h1>{props.currentUser.firstname} {props.currentUser.lastname}</h1>
      <h3>{props.currentUser.email}</h3>
      <span style={profileStyle}></span>
      {/* <label for="avatar">Choose a profile picture:</label> */}
      <Dropzone
    onDropAccepted={getSignedRequest}
    accept="image/*"
    multiple={false}>
    {({getRootProps, getInputProps}) => (
    <div 
        style = {{
        position: 'relative',
        width: 160,
        height: 80,
        borderWidth: 5,
        marginTop: 25,
        // borderColor: 'gray',
        // borderStyle: 'dashed',
        borderRadius: 5,
        display: 'inline-block',
        fontSize: 17,}}
        {...getRootProps}>
        <input {...getInputProps} />
        {isUploading ? <GridLoader /> : <p>Drop files here, or click to select files</p>}
    </div>
    )}
</Dropzone>
      </div>
    </div>
  )
}

export default withRouter(Profile);