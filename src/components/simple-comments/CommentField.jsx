import { Box, Button, TextField, TextareaAutosize } from '@mui/material';
import React, { useState } from 'react'
import { commentStyles } from './comment/comment.styles';
const CommentField = ({handleSubmit}) => {
   const [input,setInput] = useState();
   const {classes} = commentStyles();
   const handleCommentSubmit =()=>{
          handleSubmit(input)
   }
  return (
    <Box className={classes.fieldContainer}>
        <TextareaAutosize multiline label="Add comment..." variant="outlined"  className={classes.textField}
        minRows={3} minCols={5} value={input} setInput={(e)=>{setInput(e.target.value)}}/>
        <Button variant="contained" onClick={handleCommentSubmit} className={classes.button}>Comment</Button>
    </Box>
  )
}

export default CommentField