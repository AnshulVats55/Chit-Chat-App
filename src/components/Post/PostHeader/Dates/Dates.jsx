import { Typography } from '@mui/material'
import React from 'react'

export const Dates = () => {
  return (
    <Typography>
        {new Date().toLocaleDateString()}
    </Typography>
  )
}
