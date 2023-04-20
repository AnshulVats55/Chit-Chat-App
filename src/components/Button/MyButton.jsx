import React from 'react';
import { Box, Button } from '@mui/material';
import { getButtonStyles } from './Button.styles';

const MyButton = ({ children, type, buttonStyles }) => {
    const {classes} = getButtonStyles(buttonStyles);

    return (
        <Button className={classes.allButtonStyles} type={type}>{children}</Button>
    );
}

export default MyButton;