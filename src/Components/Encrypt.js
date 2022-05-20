import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const Encrypt = () => {
  const [name , setName] = useState();
  const [key , setKey] = useState();
  const [test,setTest] = React.useState();

  var bodyFormData = new FormData();

  const upload =(e)=>{ 
    console.log(e.target.files[0])
    var str=e.target.value
    var arr=str.split("\\fakepath\\");
      console.log(arr[1])
      bodyFormData.append('file',e.target.files[0]); 
  }

  const postData =()=>{
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/fileencrypt",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        setName(response.data.name)
        setKey(response.data.key)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  const getData =()=>{
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/return-encfile",
      responseType:'blob'
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data],
          {type: response.headers['content-type']
        })
        );
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download','enc.png')
        document.body.appendChild(link)
        link.click()
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <div>
      <div className='Header'>
      <Link className='link' to="/">
        <Typography variant="h3" >MINI-PROJECT</Typography>
        </Link>
        <div></div>
        <div></div>
      </div>
     {1 && name ? <div className='container'>
<h1>ENCRYPTED</h1>
<div className='typewriter'>
  <h3>This is your encrypted image..</h3>
</div>
<br></br><br></br>
<h4>The file name is </h4>
<div>
{name}
</div>
<h4>The key is </h4>
{key}
<br></br><br></br>
<Button variant="contained" onClick={getData} >
  Download
</Button>
</div> : <div className='container'>
<h1>ENCRYPTION</h1>
<div className='typewriter'>
  <h3>Upload your image here...</h3>
</div>
<label htmlFor="contained-button-file">
<Input accept="image/*" id="contained-button-file" type="file" onChange={upload}/>
<Button variant="contained" component="span">
  Choose file
</Button>
<br></br><br></br>
{name}
<br></br><br></br>
<Button variant="contained" onClick={postData} >
  Upload
</Button>
</label>
</div>}
    </div>
  )
}

export default Encrypt
