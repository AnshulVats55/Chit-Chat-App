import { Avatar, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { PostHeaderStyles } from './postHead.styles'
import { Name } from './Name/Name';
import { Dates } from './Dates/Dates';

export const PostHeader = ({avatarLetter,title,postDate,styles}) => {
  const {classes}= PostHeaderStyles(styles);
  return (
    <CardHeader
        avatar={
          <Avatar  aria-label="recipe">
            {avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Name/>}
        subheader={<Dates/>}
      />
  )
}

PostHeader.defaultProps = {
    avatarLetter: "R",
    title: "Shrimp and Chorizo Paella",
    postDate: `${new Date()}`,
  
  };
