import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {Container,
        TextField,
        Box,
        MenuItem,
        Typography,
        Grid,
        FormControl,
        InputLabel,
        Input,
        FormHelperText,
        Button,
        Select} from "@mui/material";

import FileBase64 from 'react-file-base64';

import MyButton from "../components/Button/MyButton";
import { createAccountPageStyles } from "../CreateAccount.styles.js";

import BrandLogo from "../assets/fiftyfive-logo.png";
import CreateAccountImage from "../assets/create-account.jpg";
import LoginPageImage from '../assets//loginPageImage1.gif';

const CreateAccount = () => {
  const { classes } = createAccountPageStyles();

  const [profilePic, setProfilePic] = useState("");

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const navigate = useNavigate();//to redirect user to login page after successfull signup

  const axios = require("axios");

  //method to create user account
  const onSubmit = async (data) => {
    data.profilePic = profilePic;
    console.log(data);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.1.34:8484/v1/signup",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-mode",
      referrerPolicy: "no-referrer",
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(response);
        let accStatus = window.confirm("Account Created Successfully !");
        if (accStatus) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid
          item
          lg={5}
          md={5}
          sm={0}
          xs={0}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={LoginPageImage}
              alt="signup"
              width={"100%"}
              id="loginPageImage"
            />
          </div>
        </Grid>

        <Grid
          item
          lg={7}
          md={7}
          sm={12}
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className={classes.signupFormContStyles}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "35px", height: "35px", margin: "0px 10px" }}>
              <img
                src={BrandLogo}
                alt="55 Technologies"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <h1>Chit-Chat</h1>
          </div>
          <div>
            <h3 style={{ textAlign: "center", margin: "10px 0px" }}>
              Create a new account
            </h3>
          </div>

          <div
            className="user-form-div"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            
            <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyles}>
              <Grid container columnSpacing={1} rowSpacing={2}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <TextField
                      label="Enter first name"
                      variant="outlined"
                      type="text"
                      required
                      className={classes.root}
                      InputProps={{className: classes.input}}
                      {...register("firstName", {
                        required: true,
                        maxLength: 15,
                      })}
                    ></TextField>
                  </Box>
                </Grid>

                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <TextField
                    label="Enter last name"
                    variant="outlined"
                    type="text"
                    required
                    className={classes.root}
                      InputProps={{className: classes.input}}
                    {...register("lastName", { required: true, maxLength: 15 })}
                  ></TextField>
                </Grid>

                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select your gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select your gender"
                      className={classes.root}
                      required
                      inputProps={{className: classes.input}}
                      {...register("gender")}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  item
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >

                  <FileBase64
                    multiple={false}
                    className={classes.imageSelectorStyle}
                    {...register("profilePic")}
                    onDone={({base64})=>{console.log(base64); setProfilePic(base64)}}

                  />
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Enter your email"
                    variant="outlined"
                    type="email"
                    className={classes.root}
                    required
                    InputProps={{className: classes.input}}
                    {...register("email", { required: true })}
                  ></TextField>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Create password"
                    variant="outlined"
                    type="password"
                    required
                    className={classes.root}
                    InputProps={{className: classes.input}}
                    {...register("password", {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                    })}
                  ></TextField>
                </Grid>
              </Grid>

              <MyButton
                type="submit"
                children={"Sign up"}
                buttonStyles={{
                  width: "30%",
                  height: "40px",
                  borderRadius: "25px",
                  marginTop: "20px",
                }}
                className={classes.loginButtonStyles}
              />
            </form>

            <div id="account-info" className={classes.alreadyHaveAnAccountBox}>
              <p className={classes.paraStyles}>Already have an account?</p>
              <Link to="/" className={classes.linkStyles}>Login Here</Link>
            </div>
          </div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAccount;
