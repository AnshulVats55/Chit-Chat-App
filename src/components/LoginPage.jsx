import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { Container, Box, Grid, TextField }from '@mui/material';

import MyButton from '../components/Button/MyButton';
import { getLoginPageStyles } from '../LoginPage.styles';

import BrandLogo from '../assets/fiftyfive-logo.png';
import LoginPageImage from '../assets//loginPageImage1.gif';

const LoginPage = () => {

    const { classes } = getLoginPageStyles();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userDetails = {//object to store user login details
        email: email,
        password: password,
    }

    const navigate = useNavigate();//redirecting user to profile page after successfull login

    const axios = require("axios");

    const handleLogin = async (event) => {
        event.preventDefault();

        let request = {
            method: "post",
            maxBodyLength: Infinity,
            url: "http://192.168.1.34:8484/v1/login",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-mode",
            referrerPolicy: "no-referrer",
            data: userDetails,
          };

          await axios
            .request(request)
                .then((response) => {
                if(response.data.status === "success"){
                    alert("You're successfully logged in !")
                    localStorage.setItem("token", response.data.data);
                    navigate("/profile");
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
        }

    return (
        <Container maxWidth="xl" sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
        <Grid container>
            <Grid item lg={5} md={5} sm={0} xs={0} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Box style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={LoginPageImage} alt="login image" width={'100%'}id='loginPageImage'/>
                </Box>
            </Grid>

            <Grid item lg={7} md={7} sm={12} xs={12} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Box className={classes.loginFormContStyles}>
                    <Box style={{width:'80%', display:'flex',justifyContent:'center', alignItems:'center'}}>
                        <Box style={{width:'35px', height:'35px', margin:'0px 10px', display:'flex',justifyContent:'center', alignItems:'center'}}>
                            <img
                                src={BrandLogo}
                                alt="55 Technologies"
                                style={{width:'100%', height:'100%'}}
                            />
                        </Box>
                        <h1>Chit-Chat</h1>
                    </Box>
                    <Box>
                        <h3 style={{textAlign:'center', margin:'10px 0px'}}>Sign into your account</h3>
                    </Box>
                          
                    <Box className="user-form-div" style={{width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>

                    <form onSubmit={handleLogin} className={classes.formStyles}>
                        <TextField
                            label='Enter your email'
                            variant='outlined'
                            type='email'
                            style={{width:'80%'}}
                            required name="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className={classes.root}
                            InputProps={{className: classes.input}}>
                        </TextField>

                        <TextField
                            label='Enter your password'
                            variant='outlined'
                            type='password'
                            style={{width:'80%', margin:'10px 0px'}}
                            required
                            name="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className={classes.root}
                            InputProps={{className: classes.input}}>
                        </TextField>

                        <MyButton
                            type="submit"
                            children={'Login'}
                            buttonStyles={{width:'40%', height: "40px", borderRadius: "25px", marginTop: "10px"}}
                        />
                    </form>


                        <Box className={classes.dontHaveAnAccountBox}>
                            <p className={classes.paraStyles}>Don't have an account?</p>
                            <Link to="/signup" className={classes.linkStyles}>Register Here</Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>

        </Grid>
        </Container>
    );
}

export default LoginPage;