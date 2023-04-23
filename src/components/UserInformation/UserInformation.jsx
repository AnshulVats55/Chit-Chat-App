import { Box } from '@mui/material';
import React from 'react';
import { getUserInfoStyles } from './UserInformation.styles';

const UserInformation = ({ children, userInfoBoxStyles }) => {
    const { classes } = getUserInfoStyles(userInfoBoxStyles);

    return (
        <Box className={classes.userInfoBoxStyles}>{children}</Box>
    );
}

export default UserInformation;