import React from 'react';
import { Box } from '@mui/material';
import { getFeedPageStyles } from './FeedPage.styles';

const FeedPage = () => {
    const { classes } = getFeedPageStyles();
    return (
        <Box className={classes.feedPageTopContStyles}>
            <Box>FeedPage</Box>
        </Box>
    );
}

export default FeedPage;