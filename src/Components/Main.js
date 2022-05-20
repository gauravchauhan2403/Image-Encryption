import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div className='Header'>
        <Link className='link' to="/">
        <Typography variant="h3" >MINI-PROJECT</Typography>
        </Link>
        <div></div>
        <Button variant="outlined" size="large"><strong>Login</strong></Button>
      </div>
      <div className='container'>
        <div className='typewriter'>
          <h1>Image Security...</h1>
        </div>
        <div className='buttons'>
          <Link className='link' to="/encrypt">
          <Button className='butenc' variant="outlined" size="large" color="secondary"><strong>ENCRYPTION</strong></Button>
          </Link>
          <Link className='link' to="/decrypt">
          <Button className='butdec' variant="outlined" size="large" color="success"><strong>DECRYPTION</strong></Button>
          </Link>
        </div>
        <p className='paragraph'>Welcome to Image Security. We intend to protect your images from
           misuse and malpractices. In the encryption tab just upload your 
           image and download the encrypted image along with the key to decrypt. 
           You can just decrypt the image afterwards using the decryption tab.</p>
      </div>
    </div>
  )
}

export default Main