import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Slider,
  TextField,
  TextareaAutosize,
  
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "tss-react/mui";

import  Bird from '../../assets/bird.jpg'
import CommonButton from "../Button/CommonButton";
import { background } from "@chakra-ui/react";
import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";

import { commentStyles } from "./comment/comment.styles";

const CommentField = ({ handleSubmit }) => {

  const [input, setInput] = useState();
  // const { classes } = commentStyles();
  const { classes } = commentStyles();

  const handleCommentSubmit = (e) => {
      e.preventDefault()
      handleSubmit(input);
  };
  return (
    <Box className={classes.commentBoxStyles}>
     <form onSubmit={handleCommentSubmit}>
      <Grid container >
        <Grid item xs={12}> 
          <TextField className={classes.commentInput}
            label="Add comment"
            variant="outlined"
            multiline
            maxRows={5}
            value={input}
            fullWidth
            onChange={(e) => {
              setInput(e.target.value);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <Avatar src={Bird}></Avatar>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>  
          <CommonButton
            variant="contained"
            type="submit"
            buttonStyles={{width:'100%', margin:'0.5rem 0rem 1.5rem 0rem'}}
          >
            Comment
          </CommonButton>
        </Grid>

      </Grid>
      </form>
      </Box>
  );
};

export default CommentField;
