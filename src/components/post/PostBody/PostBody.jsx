import { CardContent, Typography } from '@mui/material'
import React from 'react'
import { PostBodyStyles } from './postBodystyles'

export const PostBody = ({content,styles}) => {
    const {classes}= PostBodyStyles(styles);
  return (
    <CardContent>
        <Typography variant="body1" p={2}>{content}</Typography>
    </CardContent>
  )
}

PostBody.defaultProps ={
    content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laboriosam voluptate sint, corrupti tempora ex unde praesentium impedit pariatur cupiditate ipsum nisi natus ab similique eveniet in, dicta sit voluptatem!'
}
