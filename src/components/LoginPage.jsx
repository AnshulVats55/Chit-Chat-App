import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { TextField }from '@mui/material';
import LoginPageImage from '../assets/login-image.jpg';
import BrandLogo from '../assets/fiftyfive-logo.png';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    return (
        <Container maxWidth="lg" sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Grid container>
            <Grid item lg={5} md={5} sm={0} xs={0} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={LoginPageImage} alt="login image" width={'100%'}id='loginPageImage'/>
                </div>
            </Grid>

            <Grid item lg={7} md={7} sm={12} xs={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                    <div style={{width:'80%', display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <div style={{width:'35px', height:'35px', margin:'0px 10px'}}>
                            <img src={BrandLogo} alt="55 Technologies" style={{width:'100%', height:'100%'}}/>       
                        </div>
                        <h1>Chit-Chat</h1>
                    </div>
                    <div>
                        <h3 style={{textAlign:'center', margin:'10px 0px'}}>Sign into your account</h3>
                    </div>
                          
                <div className="user-form-div" style={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                    <form style={{width:'90%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'10px 0px'}}>
                        <TextField label='Enter your email' variant='outlined' type='email' style={{width:'80%'}} required></TextField>

                        <TextField label='Enter your password' variant='outlined' type='password' style={{width:'80%', margin:'10px 0px'}} color='secondary' required></TextField>

                        <Button id='login-button' variant='contained' type='submit' sx={{width:'80%', height:'50px', boxShadow:'none', fontWeight:'bold', fontSize:'1rem', margin:'10px 0px', backgroundColor:'buttonColor'}}>Login Now</Button>
                    </form>

                    <p>Forgot password?</p>

                    <div style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-start', margin:'10px 0px'}}>
                        <p style={{marginRight:'10px'}}>Don't have an account?</p>
                        <Link to="/createaccount">Register Here</Link>
                    </div>
                </div>
            </Grid>

        </Grid>
        </Container>
    );
}

export default LoginPage;