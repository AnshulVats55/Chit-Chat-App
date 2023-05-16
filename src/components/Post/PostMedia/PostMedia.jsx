import { CardMedia } from '@mui/material';
import React from 'react';
import { PostMediaStyles } from './PostMediaStyles';

export const PostMedia = ({image}) => {
    const {classes} = PostMediaStyles();
      return (
      <CardMedia
          component="img"
          image={image}
          alt=""
          className={classes.container}
      />
    );
}

