import React from 'react';
import { Box, Button } from '@mui/material';
import { getViewPostButtonStyles } from './ViewPostButton.styles';

const ViewPostButton = () => {
    const {classes} = getViewPostButtonStyles();

    return (
        <Button className={classes.viewPostButtonStyles}>View Post &nbsp;<i class="fa-regular fa-eye"></i></Button>
    );
}

export default ViewPostButton;