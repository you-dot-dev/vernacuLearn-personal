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

  }, [props.isLoggedIn])
  
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
      // THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
    })
    .catch(err => {
      setIsUploading(false);
      console.log(err)
    });
  };
    
  return (
    <div className="container">
      <div className="form-wrap">
      <h1>{props.currentUser.firstname} {props.currentUser.lastname}</h1>
      <h3>{props.currentUser.email}</h3>
      <label for="avatar">Choose a profile picture:</label>
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
        borderColor: 'gray',
        borderStyle: 'dashed',
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
      <h3>Interests: </h3>
      <li>one</li>
      <li>two</li>
      <li>three</li>
      <li>four</li>
    </div>
  )
}

export default withRouter(Profile);