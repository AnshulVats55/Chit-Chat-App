import React from 'react';
import { Link, useState} from 'react-router-dom';
import { Box, Grid, Container, Typography} from '@mui/material';
import GridLayout from '../../components/GridLayout/GridLayout';
import { getProfilePageStyles } from './ProfilePage.styles';

import AddIcon from '@mui/icons-material/Add';

import UserProfileInfo from '../../components/UserProfileInfo/UserProfileInfo';
import ViewPostButton from '../../components/ViewPostButton/ViewPostButton';

const ProfilePage = ({ children }) => {
    const { classes } = getProfilePageStyles();

    return (
        <Box className={classes.profilePageTopContStyles}>
        <Container className={classes.profilePageContStyles} maxWidth="xl" >
            <UserProfileInfo />
            <Box className={classes.userPostLabelConStyles}>
                <Link to="/feedLayout" className={classes.createPostBtnContStyles}>
                    <ViewPostButton children={<AddIcon fontSize="small" />} />
                </Link>
            </Box>
            <GridLayout />
        </Container>
        </Box>
    );
}

export default ProfilePage;