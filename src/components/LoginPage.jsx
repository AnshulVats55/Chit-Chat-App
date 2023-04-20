import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { FormControl, InputLabel, Input, FormHelperText, Button } from '@mui/material';
import { TextField }from '@mui/material';
import LoginPageImage from '../assets/login-image.jpg';
import BrandLogo from '../assets/fiftyfive-logo.png';
// import { useForm } from 'react-hook-form';
import MyButton from '../components/Button/MyButton';

const LoginPage = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userDetails = {
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

                    <form onSubmit={handleLogin} style={{width:'90%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', margin:'10px 0px'}}>
                        <TextField label='Enter your email' variant='outlined' type='email' style={{width:'80%'}} required name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></TextField>

                        <TextField label='Enter your password' variant='outlined' type='password' style={{width:'80%', margin:'10px 0px'}} required name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></TextField>

                        <MyButton
                            type="submit"
                            children={'Login Now'}
                            buttonStyles={{width:'80%', height:'50px', boxShadow:'0.5px 0.5px 5px 0.5px grey', borderRadius:'5px', marginTop:'10px'}}
                        />
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