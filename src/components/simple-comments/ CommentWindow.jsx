import React, { useState, useEffect } from 'react';
import {Button, Grid} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Comments from './Comments';
import CommentField from './CommentField';

import { commentStyles } from "./comment/comment.styles";

const CommentWindow = ({ handleClose, open, scroll, descriptionElementRef, post }) => {

    const { classes } = commentStyles();

  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">
                <Grid item xs={12} className={classes.gridItemOneStyles}>
                    <CommentField post={post} />
                </Grid>
            </DialogTitle>

            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
                >
                <Comments />
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>

        </Dialog>
    </div>
    );
}

export default CommentWindow;