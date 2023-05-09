import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getUserPostStyles } from './UserPosts.styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const UserPosts = ({ children }) => {
    const { classes } = getUserPostStyles();

    const [showPost, setShowPost] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

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
            }
        </Grid>
    );
}

export default UserPosts;