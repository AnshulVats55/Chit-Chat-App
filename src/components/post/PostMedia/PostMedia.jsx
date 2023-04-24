import { CardMedia } from '@mui/material'
import React from 'react'
import { PostMediaStyles } from './PostMediaStyles'
export const PostMedia = ({image}) => {
    const {classes} = PostMediaStyles();
  return (
    <CardMedia
        
        component="img"
        //   image="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
        image={image}
        alt="first post"
        className={classes.container}
      />
  )
}

PostMedia.defaultProps ={
    image:'https://picsum.photos/id/1/400/300'
}

