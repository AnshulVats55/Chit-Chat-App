import React from 'react';
import { Grid } from '@mui/material';
import { getGridLayoutStyles } from './GridLayout.styles';
import PostImage from '../../assets/rocketimage.jpg';

const GridLayout = ({ children }) => {
    const { classes } = getGridLayoutStyles();

    return (
        <Grid container rowSpacing={2} columnSpacing={2} className={classes.gridContainerStyles}>
            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.gridItemStyles}>
                Anshul Vats
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.gridItemStyles} gridItem>
                what's going on
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.gridItemStyles} gridItem>
                what's going on
            </Grid>

            <Grid item lg={6} md={6} sm={6} xs={12} className={classes.gridItemStyles} gridItem>
                what's going on
            </Grid>
        </Grid>
    );
}

export default GridLayout;