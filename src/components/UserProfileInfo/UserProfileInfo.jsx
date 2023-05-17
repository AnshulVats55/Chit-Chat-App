import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import { getUserProfileInfoBoxStyles } from './UserProfileInfo.styles';
import { useSelector } from 'react-redux';
import MaleAvatar from '../../assets/male avatar.jpg';
import FemaleAvatar from '../../assets/female avatar.jpg';
import BASE_URL from "../../api/services/BaseUrl";


const axios = require("axios");
const userToken = localStorage.getItem("token");

const UserProfileInfo = () => {
    const { classes } = getUserProfileInfoBoxStyles();
    const [userSocialInfo, setUserSocialInfo] = useState({});
    const axios = require('axios');

    const userProfileDetails = useSelector((state)=>{
        return state.userDataReducer[0];
    });

    const userName = userProfileDetails.data.user.firstName + " " + userProfileDetails.data.user.lastName,
          userProfilePicture = userProfileDetails.data.user.profilePicture,
          currentUserId = userProfileDetails.data.user.id;

    let userAllPosts = [];
    useSelector((state)=>{
        state.postDataReducer.map((post)=>{
            if(post.userId === currentUserId){
                userAllPosts.push(post);
            }
        })
    });

    useEffect(()=>{    
        const getUserSocialInfo = async () => {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${BASE_URL}/all/${currentUserId}`,
                headers: {
                authorization: `Bearer ${userToken}`,
                }
            };
            const response = await axios.request(config);
            setUserSocialInfo(response.data.data);
            console.log(response);
        }
        getUserSocialInfo();
    }, []);

    return (
        <Grid container className={classes.userProfileInfoGrid}>

            <Grid item lg={3} md={3} sm={12} xs={12} className={classes.userProfileInfoGridItem}>
                <ProfilePicture src={userProfilePicture} picStyles={{}} />
            </Grid>

            <Grid item lg={9} md={9} sm={12} xs={12} className={classes.userSocialInfoCon}>
                <Box className={classes.userSocialInfo}>
                    <Typography variant="h5" className={classes.userName}>{userName}</Typography>

                    <Box className={classes.followerInfo}>
                        <Typography variant="h6" className={classes.socialAnalytics}>{userAllPosts.length <= 1 ? `${userAllPosts.length} Post` : `${userAllPosts.length} Posts`} </Typography>

                        <Typography variant="h6" className={classes.socialAnalytics}>{userSocialInfo.followers ? `${userSocialInfo.followers.length} Friends` : `0 Friends`}</Typography>
                    </Box>
                    
                    <Typography variant="body1" className={classes.userBio}>Spitting fire and weaving words into poetry. Indian Rapper and Lyricist, bringing you the beats of the streets.</Typography>
                </Box>
            </Grid>

        </Grid>
    );
}

export default UserProfileInfo;