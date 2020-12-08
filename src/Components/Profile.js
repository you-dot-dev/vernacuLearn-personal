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
 
    axios.get('/sign-s3', {
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
      this.setState({
        isUploading: false,
      });
      if (err.response.status === 403) {
        alert(
          `Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${
            err.stack
          }`
        );
      } else {
        alert(`ERROR: ${err.status}\n ${err.stack}`);
      }
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
        multiple={false}
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
          fontSize: 28}}
        >
        {isUploading ? <GridLoader /> : <p>Drop files here, or click to select files</p>}
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