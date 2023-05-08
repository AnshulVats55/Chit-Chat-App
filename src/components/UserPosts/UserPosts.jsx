import React, { useState, useRef, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getUserPostStyles } from './UserPosts.styles';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserPostDialogWindow from './UserPostDialogWindow';
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
                                <Typography variant="h6" className={classes.postCaption}>{post.body.length >= 100 ? post.body.substring(0,101) + " ..." : post.body}</Typography>
                            </Box>
                            <Box className={classes.viewPostContStyles}>
                                <Link>
                                    <RemoveRedEyeIcon fontSize="small" onClick={()=>{handleShowPost('paper')}}/>
                                    {
                                        showPost
                                        ?
                                        <>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            scroll={scroll}
                                            aria-labelledby="scroll-dialog-title"
                                            aria-describedby="scroll-dialog-description"
                                            >
                                                <DialogTitle id="scroll-dialog-title">
                                                    <Grid item xs={12} className={classes.userPostGridItemStyles}>
                                                        <img src={post.attachment} alt="" className={classes.userPostStylesTwo}/>
                                                    </Grid>
                                                </DialogTitle>

                                                <DialogContent dividers={scroll === 'paper'}>
                                                    <DialogContentText
                                                    id="scroll-dialog-description"
                                                    ref={descriptionElementRef}
                                                    tabIndex={-1}
                                                    >
                                                        {post.body}
                                                    </DialogContentText>
                                                </DialogContent>

                                                <DialogActions>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                </DialogActions>
                                                
                                            </Dialog>
                                        </>
                                        :
                                        <></>
                                    }
                                </Link>
                                <Link>
                                    <DeleteIcon fontSize="small" />
                                </Link>
                            </Box>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export default UserPosts;