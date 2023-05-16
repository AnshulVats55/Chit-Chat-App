import React from "react";
import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { Container, Box, Grid, TextField, Typography } from "@mui/material";
import CommonButton from "../../components/Button/CommonButton";
import { getLoginPageStyles } from "./LoginPage.styles";
import BrandIdentity from "../../components/BrandIdentity/BrandIdentity";
import LoginPageImage from "../../assets/loginPageImage1.gif";
import SuccessfullLoginImage from "../../assets/successfull login image.gif";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/UserDataSlice";
import { handleUserLogin } from '../../api/services/UserLogin';
import DisplayAlert from "../../components/AlertBox/DisplayAlert";
import {changeDisplayState} from "./../../store/slices/DisplayAlertSlice";
import { useToast } from "@chakra-ui/react";

const LoginPage = () => {

  const { classes } = getLoginPageStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const toast = useToast();
  const dispatch = useDispatch();

  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: ""});
 
 useEffect(() => {
    if (showAlertToast.visiblity === true) {
      dispatch((changeDisplayState(showAlertToast)))
      setTimeout(()=>{
        setshowAlertToast({visiblity: false, message: ""});
      },1000);       
    }
}, [showAlertToast]);

  const userDetails = {
    email: email,
    password: password,
  };

  const handleLogin = async (event) => {

    event.preventDefault();
    const response = await handleUserLogin(userDetails);
    console.log(response);

      if(response?.data?.status === "success") {
        setIsLoggedIn(true);
        dispatch(setUserData(response.data));
        localStorage.setItem("token", response.data.data.token);
        let userToken = localStorage.getItem("token");

        if(userToken) {
          // toast({
          //   title: "You've successfully logged in !",
          //   position: "top",
          //   description: "",
          //   status: "success",
          //   duration: 2000,
          //   isClosable: true,
          // });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
          setshowAlertToast({visiblity: true, message:"You've successfully logged in !", status:"success"}) 

      }
    }

      else if(response?.response?.data?.status === 'failure'){
        // toast({
        //   title: "Error logging you in !",
        //   position: "top",
        //   description: "",
        //   status: "error",
        //   duration: 2000,
        //   isClosable: true,
        // });
        setshowAlertToast({visiblity: true, message:"Error logging you in !", status:"error"}) 

      }
  };

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
      {showAlertToast?.visiblity &&  <DisplayAlert />}

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

      <Box className={classes.loginPageContStyles}>
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
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {
              !isLoggedIn ? (
                <img
                  src={LoginPageImage}
                  alt="login image"
                  width={"100%"}
                  id="loginPageImage"
                  className={classes.loginImage}
                />
              ) : (

                <img
                  src={SuccessfullLoginImage}
                  alt="login image"
                  width={"100%"}
                  id="loginPageImage"
                  className={classes.loginImage}
                />
              )}
            </Box>
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
            <Box className={classes.loginFormContStyles}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center", fontWeight: "bold" }}
                >
                  Log into your account
                </Typography>
              </Box>

              <Box
                className="user-form-div"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <form onSubmit={handleLogin}
                  className={classes.formStyles}>

                  <TextField
                    label="Enter your email"
                    variant="standard"
                    type="email"
                    className={classes.root}
                    InputProps={{ className: classes.input }}
                    required
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></TextField>

                  <TextField
                    label="Enter your password"
                    variant="standard"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className={classes.root}
                    

                    InputProps={{ className: classes.input }}
                  ></TextField>

                  <CommonButton
                    type="submit"
                    children={"Login"}
                    buttonStyles={{
                      width: "40%",
                      height: "40px",
                      borderRadius: "25px",
                      marginTop: "10px",
                    }}
                  />
                </form>

                <Box className={classes.dontHaveAnAccountBox}>
                  <p className={classes.paraStyles}>Don't have an account?</p>
                  <Link to="/signup" className={classes.linkStyles}>
                    Register Here
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default LoginPage;
