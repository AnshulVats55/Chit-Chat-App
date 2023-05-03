import React from 'react'
import { DeleteOutlined } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';

const CreateComment = ({ comment, onDelete }) => {

  const handleDelete=()=>{
      onDelete(comment.id)
   } 

  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar >
          {comment.user.profilePic}
          </Avatar>
        }
        action={
          <IconButton onClick={handleDelete}>
            <DeleteOutlined/>
          </IconButton>
        }
        title={`${comment.user.firstName} ${comment.user.lastName}`}
        subheader={comment.createdAt}
      />
  
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {comment.body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CreateComment;