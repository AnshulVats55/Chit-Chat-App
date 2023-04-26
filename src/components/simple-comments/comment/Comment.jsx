import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { commentStyles } from './comment.styles';

export const Comment = ({comment}) => {
  const {classes} = commentStyles();
  console.log(comment.createdAt)
  return (
    <Stack direction="row" spacing={{xs:2,md:4}} className={classes.container}>
        <Avatar  className={classes.avatar} alt="Jack Ryan" src={comment.user.profilePic} />
        {/* <Avatar>J</Avatar> */}
        <Stack spacing={2} >
            <Stack spacing={5} direction="row" style={{ display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <Typography variant='h6'>{`${comment.user.firstName} ${comment.user.lastName}`}</Typography>
                <Typography variant='caption'>{comment.createdAt}</Typography>
            </Stack>
            
            <Typography>{comment.body}</Typography>
            <Stack direction="row">
                <Button>edit</Button>
                <Button>Delete</Button>
            </Stack>
        </Stack>
    </Stack>
  )
}

Comment.defaultProps={
  comment:{
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

}