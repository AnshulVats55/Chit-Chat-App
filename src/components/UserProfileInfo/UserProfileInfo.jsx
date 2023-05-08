import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import { getUserProfileInfoBoxStyles } from './UserProfileInfo.styles';

// import UserProfilePicture from '../../assets/login-page-image.jpg';

// import { setUserData } from '../../';
import { useSelector } from 'react-redux';

const UserProfileInfo = () => {
    const { classes } = getUserProfileInfoBoxStyles();

    const userProfileDetails = useSelector((state)=>{
        return state.userDataReducer[0];
    });

        const userName = userProfileDetails?.data.user.firstName + " " + userProfileDetails?.data.user.lastName,
              userProfilePicture = userProfileDetails?.data.user.profilePicture;

    return (
        <Grid container className={classes.userProfileInfoGrid}>

            <Grid item lg={3} md={3} sm={12} xs={12} className={classes.userProfileInfoGridItem}>
                <ProfilePicture src={userProfilePicture} picStyles={{}} />
            </Grid>

            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.userSocialInfoCon}>
                <Box className={classes.userSocialInfo}>
                    <Typography variant="h5" className={classes.userName}>{userName}</Typography>

                    <Box className={classes.followerInfo}>
                        <Typography variant="h6" className={classes.socialAnalytics}>100 Posts</Typography>

                        <Typography variant="h6" className={classes.socialAnalytics}>1000 Followers</Typography>

                        <Typography variant="h6" className={classes.socialAnalytics}>150 Following</Typography>
                    </Box>
                    
                    <Typography variant="body1" className={classes.userBio}>Spitting fire and weaving words into poetry. Indian rapper and lyricist, bringing you the beats of the streets.</Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default UserProfileInfo;