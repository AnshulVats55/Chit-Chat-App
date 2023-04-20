import React from 'react';
import { Box, Grid, Container} from '@mui/material';
import GridLayout from '../../components/GridLayout/GridLayout';
import { getProfilePageStyles } from './ProfilePage.styles';
import UserProfileInfo from '../../components/UserProfileInfo/UserProfileInfo';

const ProfilePage = ({ children }) => {
    const { classes } = getProfilePageStyles();

    return (
        <Container className={classes.profilePageContStyles} maxWidth="lg" >
            <UserProfileInfo />
            <GridLayout></GridLayout>
        </Container>
    );
}

export default ProfilePage;