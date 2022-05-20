import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

const Decrypt = () => {
  const [vari , setVari] = useState(true);
  const [key , setKey] = useState();

  var bodyFormData = new FormData();
  const upload =(e)=>{
    console.log(e.target.files[0]);
    bodyFormData.append('file',e.target.files[0]); 
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/filedecrypt?key="+key,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
        // setVari(response.data.name)
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

 



  const getData =()=>{
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/return-decfile",
      responseType:'blob'
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data],
          {type: response.headers['content-type']
        })
        );
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download','dec.png')
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
      </div>
      {!vari && <div className='container'>
      <h1>DECRYPTED</h1>
        <div className='typewriter'>
          <h3>The decrypted image is..</h3>
        </div>
        <Button variant="contained" onClick={getData} >
          Download
        </Button>
      </div> }
      {vari && <div className='container'>
      <h1>DECRYPTION</h1>
        <div className='typewriter'>
          <h3>Upload encrypt image along with key..</h3>
        </div>
        <label htmlFor="contained-button-file">
        <TextField
          id="outlined-number"
          label="Number"
          onChange={(e)=>setKey(e.target.value)}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <br></br><br></br>
        <br></br><br></br>
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={upload} />
        <Button variant="contained" component="span">
          Choose file
        </Button>
        <br></br><br></br>
        <Button variant="contained" onClick={()=>{setVari(false)}}>
          Upload
        </Button>
      </label>
      </div> }
    </div>
  )
}

export default Decrypt
