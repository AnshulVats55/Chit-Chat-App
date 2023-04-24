import { Box } from '@mui/material';
import React from 'react';
import { getProfilePictuteStyles } from './ProfilePicture.styles';

const ProfilePicture = ({ src, picStyles }) => {
    const { classes } = getProfilePictuteStyles(picStyles);

    return (
        <img 
            src={src}
            className={classes.userProfilePicStyles}
            alt="user profile picture"
        />
    );
}

export default ProfilePicture;