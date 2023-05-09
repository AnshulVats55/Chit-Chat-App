import { Typography } from '@mui/material'
import React, { useContext } from 'react';
import PostContext from '../../Posts';

export const Name = ({ name }) => {
  const { userName } = useContext(PostContext);
  return (
    <Typography sx={{fontWeight:'700'}}>
        {name}
    </Typography>
  )
}