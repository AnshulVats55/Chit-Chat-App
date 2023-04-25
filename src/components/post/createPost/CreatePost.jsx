import React, { useState } from "react";
import { createContext } from "react";

import {
  Box,
  Button,
  Grid,
  Input,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import CommonButton from "../../Button/CommonButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { getCreatePostStyles } from "./createPostStyles";

const CreatePost = ({ createPost }) => {
  const { classes } = getCreatePostStyles();

  const [postDesc, setPostDesc] = useState("");
  const [postMedia, setPostMedia] = useState({});
  const [encodedProfilePic, setEncodedProfilePic] = useState("");

  const postData = {
    postDesc: postDesc,
    postMedia: encodedProfilePic,
    
  };


  const handleCreatePost = (e) => {
      e.preventDefault();
      console.log(postData);
      createPost(postData);
  };

  function getBase64(file) {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);

    reader.onload = function () { 
      encodedFile = reader.result;
      setEncodedProfilePic(encodedFile);
    }
}

  return (
    <Box className={classes.createPostContStyles}>
      <form
        className={classes.createPostFormStyles}
        onSubmit={handleCreatePost}
      >
        <Typography variant="h6">Create Post</Typography>

        <TextField
          type="text"
          multiline
          placeholder="Create a post..."
          className={classes.root}
          InputProps={{ className: classes.input }}
          value={postDesc}
          onChange={(e) => {
            setPostDesc(e.target.value);
          }}
        ></TextField>

        <Box className={classes.uploadMediaCont}>
          <input
            type="file"
            name="file"
            accept="image/*"
            className={classes.uploadMediaStyles}
            onChange={(e) => {
              getBase64(e.target.files[0]);
              setPostMedia(e.target.files[0]);
            }}
          />

          <CommonButton
            type="submit"
            children={"Post"}
            buttonStyles={{ width: "25%", margin: "10px 0px" }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
