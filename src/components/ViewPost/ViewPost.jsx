import React from 'react';
import { getViewPostStyles } from './ViewPost.styles';
import { Box, Grid } from '@mui/material';

const ViewPost = () => {
    const { classes } = getViewPostStyles();
    return (
        <Box className={classes.viewPostTopContStyles}>
            <Grid container className={classes.viewPostGridContStyles}>
                <Grid item lg={6} md={6} sm={6} xs={12} className={classes.viewPostGridItemStyles}>
                    My Post
                </Grid>
            </Grid>
        </Box>
    );
}

export default ViewPost;