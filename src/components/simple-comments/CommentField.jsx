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
import { commentStyles } from "./comment/comment.styles";
import { makeStyles } from "tss-react/mui";

import  Bird from '../../assets/bird.jpg'
import CommonButton from "../Button/CommonButton";
import { background } from "@chakra-ui/react";
import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";



const useStyles = makeStyles()((theme)=>(
  ({
    
    
    
    // myslider:{
    //   width: 500,
    //   color: 'success.main',
    //   '& .MuiSlider-thumb': {
    //     borderRadius: '1px',
    //   },
    //   '& .MuiSlider-track':{
    //     color:'black',
    //     backgroundColor:'black'
    //   },
    //   '& .MuiSlider-rail':{
    //     backgroundColor:'yellow'
    //   }
    // }


  })
  
))

const CommentField = ({ handleSubmit }) => {
  const [input, setInput] = useState();
  // const { classes } = commentStyles();
  const {classes} = useStyles();
  console.log(classes)

  const handleCommentSubmit = (e) => {
      e.preventDefault()
      handleSubmit(input);
  };
  return (
     <form onSubmit={handleCommentSubmit}>
      <Grid container>
        <Grid item xs={12}> 
          <TextField className={classes.commentInput}
            label="Add comment"
            variant="outlined"
            multiline
            rows={2}
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
        {/* <Slider
  defaultValue={30}
  className={classes.myslider}
/> */}    
          <CommonButton
            variant="contained"
            type="submit"
            
          >
            Comment
          </CommonButton>
        </Grid>
      </Grid>
      </form>

  );
};

export default CommentField;
