import React from "react";
import { useState ,useEffect} from "react";
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
  Select,
} from "@mui/material";
import CommonButton from "../../components/Button/CommonButton";
import BrandIdentity from "../../components/BrandIdentity/BrandIdentity";
import { createAccountPageStyles } from "./CreateAccount.styles";
import { emailValidator } from "../../validators/emailValidator";
import { passwordCheck } from "../../validators/passwordValidtor";
import LoginPageImage from "../../assets/loginPageImage1.gif";
import { handleUserSignup } from '../../api/services/UserSignup';
import MaleAvatar from '../../assets/male avatar.jpg';
import FemaleAvatar from '../../assets/female avatar.jpg';
import DisplayAlert from "../../components/AlertBox/DisplayAlert";
import {changeDisplayState} from "../../store/slices/DisplayAlertSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [isProfilePicAttached, setIsProfilePicAttached] = useState(false);

  const navigate = useNavigate();
  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error |info"});
 
 useEffect(() => {
    if (showAlertToast.visiblity === true) {
      dispatch((changeDisplayState(showAlertToast)))
      setTimeout(()=>{
        setshowAlertToast({visiblity: false, message: ""});
      },1000);       
    }
}, [showAlertToast]);

  const onSubmit = async (data) => {
    data.profilePicture = profilePicture !== "" ? profilePicture : (gender === "male" ? MaleAvatar : FemaleAvatar);

    const response = await handleUserSignup(data);
    console.log(response);
    
    if(response?.data?.status === "success"){
      setshowAlertToast({visiblity: true, message:"Account created successfully !", status:"success"});
      setTimeout(() => {
        navigate("/");
      }, 2500);
    }
    else if(response?.response?.data?.status === 'failure'){
      setshowAlertToast({visiblity: true, message:"Error creating account !", status:"error"});
    }
  };

  function getBase64(file) {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedFile = reader.result;
      setProfilePicture(encodedFile);
      setshowAlertToast({visiblity: true, message:"Profile picture attached successfully !", status:"success"});
    };
    reader.onerror = function (error) {
      setshowAlertToast({visiblity: true, message:"Error attaching profile picture  !", status:"error"});
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
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        position: "relative",
                      }}
                    >
                      <CommonButton
                        for="files"
                        class="btn"
                        buttonStyles={{
                          borderRadius: "40px",
                          padding: "0px 20px",
                          "@media screen and (max-width:900px)": {
                            padding: "0.5rem 0rem",
                            minWidth: "50%",
                          },
                        }}
                      >
                        <label
                          htmlFor="files"
                          style={{ minWidth: "100%", fontSize: "0.8rem" }}
                        >
                          Choose Profile Pic
                        </label>
                        <input
                          id="files"
                          type="file"
                          style={{
                            visibility: "hidden",
                            minWidth: "100%",
                            position: "absolute",
                          }}
                          multiple={false}
                          className={classes.imageSelectorStyle}
                          {...register("profilePicture")}
                          onChange={(e) => {
                            getBase64(e.target.files[0]);
                            setIsProfilePicAttached(true);
                          }}
                        />
                      </CommonButton>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        label="Enter your email"
                        variant="standard"
                        type="email"
                        className={classes.root}
                        color={!emailErrorMsg.status && "warning"}
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
                        <Typography
                          className={
                            !emailErrorMsg.status
                              ? classes.errorTextStyle
                              : classes.successTextStyle
                          }
                          variant="caption"
                        >
                          {emailErrorMsg.text}
                        </Typography>
                      )}
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        label="Create password"
                        variant="standard"
                        type="password"
                        required
                        className={classes.root}
                        color={!passwordErrorMsg.status && "warning"}
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
                        <Typography
                          className={
                            !passwordErrorMsg.status
                              ? classes.errorTextStyle
                              : classes.successTextStyle
                          }
                          variant="caption"
                        >
                          {passwordErrorMsg.text}
                        </Typography>
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
