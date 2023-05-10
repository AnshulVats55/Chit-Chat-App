import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getUserPostStyles } from './UserPosts.styles';
import { useSelector } from 'react-redux';
import NoPostSVG from '../../assets/undraw_empty_re_opql.svg';

const UserPosts = ({ children }) => {
    const { classes } = getUserPostStyles();

    const [showPost, setShowPost] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleShowPost = (scrollType) => {
        setShowPost(!showPost);
        setScroll(scrollType);
    }
    
    const handleClose = () => {
        setShowPost(!showPost);
    };
    
    const descriptionElementRef = useRef(null);
      useEffect(() => {
        if (showPost) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
    }, [showPost]);
    
    const currentUserId = useSelector((state)=>{
        return state.userDataReducer[0].data.user.id;
    });

    let userAllPosts = [];
    useSelector((state)=>{
        state.postDataReducer.map((post)=>{
            if(post.userId === currentUserId){
                userAllPosts.push(post);
            }
        })
    });

    return (
        <Grid container className={classes.gridContainerStyles}>
            {
                userAllPosts.length != 0
                ?
                userAllPosts.map((post)=>{
                    return(
                        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.gridItemStyles}>
                            <Box className={classes.userPostContStyles}>
                                <img src={post.attachment} alt="" className={classes.userPostStylesOne}/>
                            </Box>
                            <Box className={classes.postCaptionCont}>
                                <Typography variant="h6" className={classes.postCaption}>{post.body}</Typography>
                            </Box>
                        </Grid>
                    );
                })
                :
                <Box className={classes.noPostsContStyles}>
                    <Typography className={classes.noPostsTextMessage} variant="body2">You don't have any posts</Typography>
                    <img src={NoPostSVG} className={classes.noPostsImage}/>
                </Box>
            }
        </Grid>
    );
}

export default UserPosts;