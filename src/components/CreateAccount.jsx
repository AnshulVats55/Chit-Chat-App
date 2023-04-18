import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { TextField }from '@mui/material';
import CreateAccountImage from '../assets/create-account.jpg';
import BrandLogo from '../assets/fiftyfive-logo.png';

const CreateAccount = () => {

    //Hooks to store and update user input

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userNumber, setUserNumber] = useState();

    return (
      <Container maxWidth="lg" sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Grid container>

            <Grid item lg={5} md={5} sm={0} xs={0} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={CreateAccountImage} alt="signup" width={'100%'} id='loginPageImage'/>
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
                    <h3 style={{textAlign:'center', margin:'10px 0px'}}>Create a new account</h3>
                </div>
                          
                <div className="user-form-div" style={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <form style={{width:'90%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'10px 0px'}}>
                        <Grid container columnSpacing={1} rowSpacing={2}>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextField label='Enter first name' variant='outlined' type='text' required style={{width:'100%'}} name='firstName' value={firstName} onChange={(event)=>{setFirstName(event.target.value)}}></TextField>
                            </Grid>

                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{display:'flex', justifyContent:'flex-end'}}>
                                <TextField label='Enter last name' variant='outlined' type='text' required style={{width:'100%'}} name='lastName' value={lastName} onChange={(event)=>{setLastName(event.target.value)}}></TextField>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField label='Enter your email' variant='outlined' type='email' required style={{width:'100%'}} name='userEmail' value={userEmail} onChange={(event)=>{setUserEmail(event.target.value)}}></TextField>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField label='Create password' variant='outlined' type='password' required style={{width:'100%'}} name='userPassword' value={userPassword} onChange={(event)=>{setUserPassword(event.target.value)}}></TextField>
                            </Grid>

                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <TextField label='Enter your number' variant='outlined' type='tel' required style={{width:'100%'}} name='userNumber' maxLength="10" value={userNumber} onChange={(event)=>{setUserNumber(event.target.value)}}></TextField>
                            </Grid>
                        </Grid>

                            <Button id='login-button' variant='contained' type='submit' sx={{width:'80%', height:'50px', boxShadow:'none', fontWeight:'bold', fontSize:'1rem', margin:'10px 0px', backgroundColor:'buttonColor'}}>Create Account</Button>
                    </form>

                    <div id="account-info" style={{display:'flex', justifyContent:'flex-start', justifyContent:'center', alignItems:'center', margin:'10px 0px'}}>
                        <p style={{marginRight:'10px'}}>Already have an account?</p>
                        <Link to="/userlogin">Login Here</Link>
                    </div>
                </div>
            </Grid>

        </Grid>
        </Container>
    );
}

export default CreateAccount;