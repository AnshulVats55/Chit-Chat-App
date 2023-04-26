import React from 'react';
import { Link, useState} from 'react-router-dom';
import { Box, Grid, Container, Typography} from '@mui/material';
import GridLayout from '../../components/GridLayout/GridLayout';
import { getProfilePageStyles } from './ProfilePage.styles';
import Navbar from '../../components/navbar/Navbar';

import AddIcon from '@mui/icons-material/Add';

import UserProfileInfo from '../../components/UserProfileInfo/UserProfileInfo';
import ViewPostButton from '../../components/ViewPostButton/ViewPostButton';

const ProfilePage = ({ children }) => {
    const { classes } = getProfilePageStyles();

    return (
        <Container className={classes.profilePageContStyles} maxWidth="xl" >
            <Navbar />
            <UserProfileInfo />
            <Box className={classes.userPostLabelConStyles}>
                <Typography variant="h6" className={classes.userPostLabel}>
                    Your Posts
                </Typography>
                <Link to="/feed" className={classes.createPostBtnContStyles}>
                    <ViewPostButton children={<AddIcon fontSize="small" />} />
                </Link>
            </Box>
            <GridLayout />
        </Container>
    );
}

export default ProfilePage;