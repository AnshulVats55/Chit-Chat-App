import React from 'react';
import { Box, Grid } from '@mui/material';
import { getGridLayoutStyles } from './GridLayout.styles';

import ViewPostButton from '../ViewPostButton/ViewPostButton';

import postOne from '../../assets/post1.jpg';
import postTwo from '../../assets/post2.jpg';
import postThree from '../../assets/pos3.jpg';
import postFour from '../../assets/post4.jpg';
import postFive from '../../assets//post5.jpg';
import postSix from '../../assets/post6.jpg';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';

const GridLayout = ({ children }) => {
    const { classes } = getGridLayoutStyles();

    const userPosts = [postOne, postTwo, postThree, postFour, postFive, postSix];

    return (
        <Grid container className={classes.gridContainerStyles}>
            {
                userPosts.map((gridItem)=>{
                    return(
                        <Grid item lg={4} md={6} sm={6} xs={12} className={classes.gridItemStyles}>
                            <Box className={classes.userPostContStyles}>
                                <img src={gridItem} alt="" className={classes.userPostStyles}/>
                            </Box>
                            <Box className={classes.viewPostContStyles}>
                                <Link to="/feed">
                                    <ViewPostButton />
                                </Link>
                            </Box>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export default GridLayout;