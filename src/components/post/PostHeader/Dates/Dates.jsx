import { Typography } from '@mui/material'
import React from 'react'

export const Dates = () => {
    // const date = new Date();
  return (
    <Typography>
        {new Date().toLocaleDateString()}
    </Typography>
  )
}
