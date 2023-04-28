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
        <Typography variant="h6" className={classes.createPostTopText}>Start writing something !</Typography>

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
            children={"Create Post"}
            buttonStyles={{padding:'0.5rem 1rem'}}
          />
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
