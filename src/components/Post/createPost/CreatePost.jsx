import React, { useState,useEffect } from "react";
import { Box, TextField, Typography } from "@mui/material";
import DisplayAlert from "../../AlertBox/DisplayAlert";
import {changeDisplayState} from "../../../store/slices/DisplayAlertSlice";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../Button/CommonButton";
import { getCreatePostStyles } from "./createPostStyles";

const CreatePost = ({ createPost }) => {
  const { classes } = getCreatePostStyles();

  const currentUserId = useSelector((state)=>{
    return state.userDataReducer[0].data.user.id;
  });

  const [postDesc, setPostDesc] = useState("");
  const [postMedia, setPostMedia] = useState({});
  const [encodedProfilePic, setEncodedProfilePic] = useState("");

  const dispatch = useDispatch();

  const [showAlertToast,setshowAlertToast] = useState({visiblity: false, message: "", status: "Success | Error |info"});
 
  useEffect(() => {
      if (showAlertToast.visiblity === true) {
        dispatch((changeDisplayState(showAlertToast)));
        setTimeout(()=>{
          setshowAlertToast({visiblity: false, message: ""});
        }, 3000);
      }
  }, [showAlertToast]);

  const postData = {
    postDesc: postDesc,
    postMedia: encodedProfilePic,
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (postDesc.length === 0) {
      setshowAlertToast({visiblity: true, message: "Post caption can't be empty !", status:"info"});
    }
    else if(encodedProfilePic === ""){
      setshowAlertToast({visiblity: true, message: "Post media can't be empty !", status:"info"});
    }
    else {
      const response = await createPost(postData, currentUserId);
      
      if(response?.data?.status === "success"){
        setshowAlertToast({visiblity: true, message: "Post created successfully !", status:"success"});
      }
      else if(response?.response?.data?.status === "failure"){
        setshowAlertToast({visiblity: true, message: "Error creating post !", status:"error"});
      }
      else if(response?.response?.data === undefined){
        setshowAlertToast({visiblity: true, message: "Error creating post !", status:"error"});
      }
      setPostDesc("");
      setPostMedia({});
      setEncodedProfilePic("");
    }
  };

  function getBase64(file) {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedFile = reader.result;
      setEncodedProfilePic(encodedFile);
    };
  }

  return (
    <Box id="createPost" className={classes.createPostContStyles}>
      {showAlertToast?.visiblity &&  <DisplayAlert />}

      <form
        className={classes.createPostFormStyles}
        onSubmit={handleCreatePost}
      >
        <Typography variant="h6" className={classes.createPostTopText}>
          Start writing something !
        </Typography>

        <TextField
          type="text"
          multiline
          placeholder="What's on your mind today..."
          className={classes.root}
          InputProps={{ className: classes.input }}
          value={postDesc}
          onChange={(e) => {
            setPostDesc(e.target.value);
          }}
        ></TextField>

        <Box className={classes.uploadMediaCont}>
          <CommonButton
            for="files"
            class="btn"
            buttonStyles={{
              padding: "0.5rem 1rem",
              "@media screen and (max-width: 981px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 900px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 434px)": {
                width: "100%",
                margin: "0.5rem",
              },
            }}
          >
            <label
              htmlFor="files"
              style={{ minWidth: "100%", fontSize: "0.8rem" }}
            >
              Upload Image
            </label>
            <input
              id="files"
              name="files"
              accept="image/*"
              type="file"
              style={{
                visibility: "hidden",
                minWidth: "100%",
                position: "absolute",
              }}
              className={classes.uploadMediaStyles}
              onChange={(e) => {
                getBase64(e.target.files[0]);
                setPostMedia(e.target.files[0]);
              }}
            />
          </CommonButton>

          <CommonButton
            type="submit"
            children={"Post"}
            buttonStyles={{
              padding: "0.5rem 2rem",
              "@media screen and (max-width: 981px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 900px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 434px)": {
                width: "100%",
                margin: "0.5rem",
              },
            }}
          />
        </Box>
        <Box className={classes.postMediaPreviewCont}>
          {encodedProfilePic != "" ? (
            <img src={encodedProfilePic} className={classes.postMediaPreview} />
          ) : (
            <></>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
