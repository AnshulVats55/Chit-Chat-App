import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import { getUserProfileInfoBoxStyles } from './UserProfileInfo.styles';
import BrandLogo from '../../assets/fiftyfive-logo.png';

const UserProfileInfo = () => {
    const {classes } = getUserProfileInfoBoxStyles();

    return (
        <Grid container className={classes.userProfileInfoGrid}>

            <Grid item lg={3} md={3} sm={12} xs={12} style={{backgroundColor:'red'}} className={classes.userProfileInfoGridItem}>
                <ProfilePicture src={BrandLogo} picStyles={{boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)', margin:'50px 100px'}}/>
            </Grid>

            <Grid item lg={9} md={9} sm={12} xs={12} style={{backgroundColor:'wheat'}} className={classes.userSocialInfoCon}>
                <Box className={classes.userSocialInfo}>
                    <Typography variant="h5" className={classes.userName}>User Name</Typography>

                    <Box className={classes.followerInfo}>
                        <Typography variant="h6" className={classes.postAndfollowerCount}>1022 Posts</Typography>
                        <Typography variant="h6" className={classes.postAndfollowerCount}>47.2K Followers</Typography>
                        <Typography variant="h6" className={classes.postAndfollowerCount}>652 Following</Typography>
                    </Box>
                    
                    <Typography variant="body1" className={classes.userBio}>User Name</Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default UserProfileInfo;