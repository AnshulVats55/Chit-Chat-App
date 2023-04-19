import React from 'react';
import { Box, Button } from '@mui/material';
import { getButtonStyles } from './Button.styles';

const MyButton = (props) => {
  // console.log(props)
    const {classes} = getButtonStyles(props);

  return (
    <>
      <Button className={classes.myButtonStyles}/>
    </>  
  );
}

export default MyButton;