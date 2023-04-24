import { Typography } from '@mui/material'
import React from 'react'

export const Name = ({name}) => {
  return (
    <Typography sx={{fontWeight:'700'}}>
        {name}
    </Typography>
  )
}

Name.defaultProps ={
    name:'John Doe'
}