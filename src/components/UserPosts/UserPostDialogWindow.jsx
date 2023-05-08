import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import ImageOne from '../../assets/post1.jpg';
import { getUserPostStyles } from './UserPosts.styles';

const UserPostDialogWindow = ({ handleClose, open, scroll, descriptionElementRef, postAttachment, postBody }) => {

    const { classes } = getUserPostStyles();

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
                <Grid item xs={12} className={classes.userPostGridItemStyles}>
                    <img src={postAttachment} alt="" className={classes.userPostStylesTwo}/>
                </Grid>
            </DialogTitle>

            <DialogContent dividers={scroll === 'paper'}>
                <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
                >
                    {postBody}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
            
        </Dialog>
    </div>
  );
}

export default UserPostDialogWindow;