import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { commentStyles } from "../comment/comment.styles";
import userImage from '../../../assets/bird.jpg';

const CreateComment = ({ comment, onDelete }) => {

  const { classes } = commentStyles();

  const handleDelete=()=>{
      onDelete(comment.id);
  }

  return (
    <Card className={classes.commentTopCardStyles}>
      <CardHeader
        avatar={
          <Avatar >
          {userImage}
          </Avatar>
        }
        action={
          <IconButton onClick={handleDelete}>
            <DeleteIcon className={classes.deleteIconStyles}/>
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