

// import { AddComment } from '@mui/icons-material'\
import React, { useState } from 'react'
import CommentField from './CommentField'
import { Stack, stackClasses } from '@mui/material';
import { Comment } from './comment/Comment';
import { commentStyles } from './comment/comment.styles';
 const Comments = () => {
  const comment =[
    { 
    id:1,
    body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus consequuntur nam fugit nihil aliquam sed ipsam quis reiciendis, sunt, culpa maxime odio rem sint quaerat rerum nulla. Laudantium, corporis a!",
    createdAt:new Date().toDateString(),
    updatedAt:new Date().toDateString(),
    user:{
      userId:1,
      firstName:'Jack',
      lastName:'Ryan',
      profilePic:'https://picsum.photos/id/1/200/300'
    }
  }
  ]
  const [commentData,setCommentData] = useState(comment);
  const{classes} = commentStyles();
  const addComment=(text)=>{
       const comment = {
        id:new Date().getTime(),
        body:text,
       }
  }
   
  return (
    <Stack className={classes.commentsContainer}>
        <CommentField handleSubmit={addComment}/>
        <Comments comment={comment}/>
    </Stack>
    
  )
}


export default CommentField;
