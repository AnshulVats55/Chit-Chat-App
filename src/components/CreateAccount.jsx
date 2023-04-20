import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box, MenuItem, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Select,
} from "@mui/material";
import { TextField } from "@mui/material";
import CreateAccountImage from "../assets/create-account.jpg";
import BrandLogo from "../assets/fiftyfive-logo.png";
import MyButton from "../components/Button/MyButton";
import { useForm } from "react-hook-form";
import { createAccountPageStyles } from "../CreateAccount.styles.js";
import { useToast } from '@chakra-ui/react'

const CreateAccount = () => {
  const { classes } = createAccountPageStyles();
  
  const [userAccountData, setUserAccountData] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
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
      if(accStatus){
          navigate("/userlogin");
      }
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  const axios = require("axios");
  //   let data = JSON.stringify(userAccountData);
  let data = JSON.stringify({
    firstName: "sameerbhsdsaiya123",
    lastName: "sexybsdsdoy",
    gender: "male",
    email: "samees1211198r.srivastava@fiftyfivetech.in",
    password: "1660128226",
  });

  

  

  return (
    <Container
      maxWidth="lg"
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
              src={CreateAccountImage}
              alt="signup"
              width={"120%"}
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
          <div
            style={{
              width: "80%",
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <Grid container columnSpacing={1} rowSpacing={4}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <TextField
                      label="Enter first name"
                      variant="outlined"
                      type="text"
                      style={{ width: "100%", height: "35px" }}
                      {...register("firstName", {
                        required: true,
                        maxLength: 15,
                      })}
                    ></TextField>
                    {errors.firstName && (
                      <Typography variant="body2">
                        Firstname should be less than 15 characters long
                      </Typography>
                    )}
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
                    style={{ width: "100%", height: "35px" }}
                    {...register("lastName", {required: true, maxLength: 15})}
                  ></TextField>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <FormControl fullWidth style={{ marginBottom: "-20px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Select your gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Select your gender"
                      style={{ width: "100%", height: "55px" }}
                      {...register("gender")}
                    >
                      <MenuItem value={"male"}>Male</MenuItem>
                      <MenuItem value={"female"}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Enter your email"
                    variant="outlined"
                    type="email"
                    style={{ width: "100%", height: "35px" }}
                    {...register("email", {required: true})}
                  ></TextField>
                </Grid>

                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    label="Create password"
                    variant="outlined"
                    type="password"
                    required
                    style={{ width: "100%", height: "35px" }}
                    {...register("password", {required: true, minLength: 8, maxLength: 20})}
                  ></TextField>
                </Grid>
              </Grid>

              <MyButton
                type="submit"
                children={"Create Account"}
                buttonStyles={{
                  width: "100%",
                  height: "50px",
                  boxShadow: "0.5px 0.5px 5px 0.5px grey",
                  borderRadius: "5px",
                  marginTop: "35px",
                }}
              />
            </form>

            <div
              id="account-info"
              style={{
                display: "flex",
                justifyContent: "flex-start",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px 0px",
              }}
            >
              <p style={{ marginRight: "10px" }}>Already have an account?</p>
              <Link to="/userlogin">Login Here</Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateAccount;
