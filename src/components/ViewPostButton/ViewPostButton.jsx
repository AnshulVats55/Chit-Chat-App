import React from 'react';
import { Box, Button } from '@mui/material';
import { getViewPostButtonStyles } from './ViewPostButton.styles';

const ViewPostButton = ({ children }) => {
    const {classes} = getViewPostButtonStyles();

    return (
        <Button className={classes.viewPostButtonStyles}>{children}</Button>
    );
}

export default ViewPostButton;