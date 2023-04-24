import React from 'react';
import { Box, Button } from '@mui/material';
import { getButtonStyles } from './Button.styles';

const MyButton = (props) => {
    const {classes} = getButtonStyles(props);

  return (
    <>
      <Button className={classes.allButtonStyles}>{props.children}</Button>
    </>  
  );
}

export default MyButton;