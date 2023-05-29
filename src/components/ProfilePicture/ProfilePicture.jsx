import { Box } from '@mui/material';
import React from 'react';
import { getProfilePictuteStyles } from './ProfilePicture.styles';

const ProfilePicture = ({ src, picStyles }) => {
    const { classes } = getProfilePictuteStyles(picStyles);

    return (
        <Box className={classes.userProfilePicContStyles}>
        <img 
            src={src}
            className={classes.userProfilePicStyles}
            alt=""
        />
        </Box>
    );
}

export default ProfilePicture;