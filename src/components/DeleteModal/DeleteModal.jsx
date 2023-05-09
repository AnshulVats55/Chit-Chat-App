import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import PostContext from "../post/Posts";

export default function Modal({ id }) {
  const [open, setOpen] = useState(false);
  const { handleDeletePost } = useContext(PostContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose1 = () => {
    setOpen(false);
    console.log("yes", id);
    handleDeletePost(id);
  };

  const handleClose2 = () => {
    setOpen(false);
    console.log("clicked on no");
    handleDeletePost("");
  };

  return (
    <div style={{ Width: "80%" }}>
      <DeleteIcon onClick={handleClickOpen} />
    
      <Dialog
        open={open}
        onClose={handleClose2}
        className="classes.body"
        sx={{ Width: "100%" }}
      >
        <DialogTitle className="classes.header" sx={{ color: "white", fontWeight:"20px", backgroundColor:"#363a91" }}>
          {"Delete Alert"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ paddingTop:"10px",  fontWeight:"20px" }}>
            Do you really want to delete this post?
          </DialogContentText>

        </DialogContent>
        <DialogActions>

          <Button onClick={handleClose2} sx={{color:"blue", '&:hover':{color: "white", backgroundColor:"#363a91"} }}>No</Button>
            <Button onClick={handleClose1} sx={{color:"red", '&:hover':{color: "white", backgroundColor:"#ef5350"} }}>Yes</Button>

        </DialogActions>

      </Dialog>
    </div>
  );
}

