import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Input,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";

import { useToast } from '@chakra-ui/react';

import CommonButton from "../../Button/CommonButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { getCreatePostStyles } from "./createPostStyles";

const CreatePost = ({ createPost }) => {
  
  const { classes } = getCreatePostStyles();

  const [postDesc, setPostDesc] = useState("");
  const [postMedia, setPostMedia] = useState({});
  const [encodedProfilePic, setEncodedProfilePic] = useState("");

  const toast = useToast();

  const postData = {
    postDesc: postDesc,
    postMedia: encodedProfilePic,
  };
 

  const handleCreatePost = (e) => {
      e.preventDefault();
      if(postDesc.length == 0){
        toast({
          title: "Post caption can't be empty !",
          position:'top',
          description: "",
          status: 'error',
          duration: 2000,
          isClosable: true,
      });
      }
      else{
        createPost(postData);
        setPostDesc("");
        setPostMedia({});
      }
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
    <Box id="createPost" className={classes.createPostContStyles}>
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
            children={"Post"}
            buttonStyles={{
              padding:'0.5rem 2rem',
              '@media screen and (max-width: 981px)': {
                  width:'100%',
                  margin:'0.5rem',
                },
              '@media screen and (max-width: 900px)': {
                  width:'35%'
              },
              '@media screen and (max-width: 434px)': {
                width:'100%',
                margin:'0.5rem',
              },
              }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
