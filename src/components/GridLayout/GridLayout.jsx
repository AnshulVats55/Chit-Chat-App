import React from 'react';
import { Grid } from '@mui/material';
import { getGridLayoutStyles } from './GridLayout.styles';

const GridLayout = ({ children }) => {
    const { classes } = getGridLayoutStyles();

    const userPosts = ['Post 1', 'Post-2', 'Post-3', 'Post-4', 'Post-5', 'Post-6'];

    return (
        <Grid container rowSpacing={2} columnSpacing={2} className={classes.gridContainerStyles}>
            {
                userPosts.map((gridItem)=>{
                    return(
                        <Grid item lg={4} md={6} sm={6} xs={12} className={classes.gridItemStyles}>
                            {gridItem}
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default GridLayout;