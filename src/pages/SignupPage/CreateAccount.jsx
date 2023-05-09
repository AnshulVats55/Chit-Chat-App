import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
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
  Select,
} from "@mui/material";

import { useToast } from "@chakra-ui/react";

import CommonButton from "../../components/Button/CommonButton";
import BrandIdentity from "../../components/BrandIdentity/BrandIdentity";

import { createAccountPageStyles } from "./CreateAccount.styles";
import { emailValidator } from "../../validators/emailValidator";
import { passwordCheck } from "../../validators/passwordValidtor";

import LoginPageImage from "../../assets/loginPageImage1.gif";

const CreateAccount = () => {
  const { classes } = createAccountPageStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState({});
  const [passwordErrorMsg, setPasswordErrorMsg] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isProfilePicAttached, setIsProfilePicAttached] = useState(false);

  const navigate = useNavigate();
  const axios = require("axios");
  const toast = useToast();

  //method to create user account
  const onSubmit = (data) => {
    data.profilePicture = profilePicture;

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://192.168.1.110:8484/v1/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response);
        toast({
          title: "Account created successfully !",
          position: "top",
          description: "",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

        setTimeout(() => {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        toast({
          title: "Error Creating Account !",
          position: "top",
          description: "",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  function getBase64(file) {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedFile = reader.result;
      setProfilePicture(encodedFile);
      toast({
        title: "Profile Picture attached successfully !",
        position: "top",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    };
    reader.onerror = function (error) {
      toast({
        title: "Please try again !",
        position: "top",
        description: "",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    };
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "30px 0px",
        }}
      >
        <BrandIdentity />
      </Box>

      <Box className={classes.signupPageContStyles}>
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
                alt="signup image"
                width={"100%"}
                id="loginPageImage"
                className={classes.signupImage}
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
              <div>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Create a new account
                </Typography>
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
                  className={classes.formStyles}
                >
                  <Grid container columnSpacing={1} rowSpacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box>
                        <TextField
                          label="Enter first name"
                          variant="standard"
                          type="text"
                          required
                          className={classes.root}
                          InputProps={{ className: classes.input }}
                          {...register("firstName", {
                            required: true,
                            maxLength: 15,
                          })}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
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
                        variant="standard"
                        type="text"
                        required
                        className={classes.root}
                        InputProps={{ className: classes.input }}
                        {...register("lastName", {
                          required: true,
                          maxLength: 15,
                        })}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      ></TextField>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select your gender
                        </InputLabel>
                        <Select
                          variant="standard"
                          labelId="demo-simple-select-label"
                          className={classes.selectGenderRoot}
                          required
                          InputProps={{ className: classes.selectGenderInput }}
                          {...register("gender")}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
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
                      <input
                        type="file"
                        multiple={false}
                        className={classes.imageSelectorStyle}
                        {...register("profilePicture")}
                        onChange={(e) => {
                          getBase64(e.target.files[0]);
                          setIsProfilePicAttached(true);
                        }}
                      />
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        label="Enter your email"
                        variant="standard"
                        type="email"
                        className={classes.root}
                        required
                        InputProps={{ className: classes.input }}
                        {...register("email", { required: true })}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailErrorMsg(emailValidator(e.target.value));
                        }}
                      ></TextField>
                      {emailErrorMsg.status === "true" ? (
                        toast({
                          title: "Email Id is correct !",
                          position: "top",
                          description: "",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        })
                      ) : (
                        <p>{emailErrorMsg.text}</p>
                      )}
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        label="Create password"
                        variant="standard"
                        type="password"
                        required
                        className={classes.root}
                        InputProps={{ className: classes.input }}
                        {...register("password", {
                          required: true,
                          minLength: 8,
                          maxLength: 20,
                        })}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setPasswordErrorMsg(passwordCheck(e.target.value));
                        }}
                      ></TextField>
                      {passwordErrorMsg.status === "true" ? (
                        toast({
                          title: "Email Id is correct !",
                          position: "top",
                          description: "",
                          status: "success",
                          duration: 2000,
                          isClosable: true,
                        })
                      ) : (
                        <p>{passwordErrorMsg.text}</p>
                      )}
                    </Grid>
                  </Grid>

                  <CommonButton
                    type="submit"
                    children={"Sign up"}
                    buttonStyles={{
                      width: "40%",
                      height: "40px",
                      borderRadius: "25px",
                      marginTop: "20px",
                    }}
                    className={classes.loginButtonStyles}
                  />
                </form>

                <div
                  id="account-info"
                  className={classes.alreadyHaveAnAccountBox}
                >
                  <p className={classes.paraStyles}>Already have an account?</p>
                  <Link to="/" className={classes.linkStyles}>
                    Login Here
                  </Link>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreateAccount;
