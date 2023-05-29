import { CardContent, Typography } from '@mui/material'
import React from 'react'
import { PostBodyStyles } from './postBodystyles'

export const PostBody = ({content,styles}) => {
    const {classes}= PostBodyStyles(styles);
  return (
    <CardContent>
        <Typography variant="body1" className={classes.cardContent}>{content}</Typography>
    </CardContent>
  )
}


