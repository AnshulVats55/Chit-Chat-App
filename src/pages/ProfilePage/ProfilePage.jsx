import React from 'react';
import { Box, Grid, Container, Typography} from '@mui/material';
import GridLayout from '../../components/GridLayout/GridLayout';
import { getProfilePageStyles } from './ProfilePage.styles';
import Navbar from '../../components/navbar/Navbar';

import UserProfileInfo from '../../components/UserProfileInfo/UserProfileInfo';

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
            </Box>
            <GridLayout />
        </Container>
    );
}

export default ProfilePage;