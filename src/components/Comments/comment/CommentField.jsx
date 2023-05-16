import { Avatar, Box, Grid, InputAdornment, TextField } from "@mui/material";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommonButton from "../../Button/CommonButton";
import { commentStyles } from "../comment.styles";
import useCommentsContext from "../hooks/use-comment-context";
import MaleAvatar from "../../../assets/male avatar.jpg";
import FemaleAvatar from "../../../assets/female avatar.jpg";

const CommentField = ({ handleSubmit, post }) => {
  const { classes } = commentStyles();
  const [input, setInput] = useState();
  const { createComment } = useCommentsContext();

  const currentUserId = useSelector((state) => {
    return state?.userDataReducer[0]?.data?.user.id;
  });

  let data = {
    body: input,
    userId: currentUserId,
    postId: post.id,
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    await createComment(data);
    setInput("");
  };

  const userDetails = useSelector((state) => {
    return state.userDataReducer[0];
  });

  const userProfilePicture = userDetails?.data?.user?.profilePicture,
    userGender = userDetails?.data?.user?.gender;

  return (
    <Box className={classes.commentBoxStyles}>
      <form onSubmit={handleAddComment}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              className={classes.commentInput}
              label="Add comment"
              variant="outlined"
              multiline
              maxRows={5}
              value={input}
              fullWidth
              onChange={(e) => {
                setInput(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Avatar
                      src={
                        userProfilePicture
                          ? userProfilePicture
                          : userGender === "male"
                          ? MaleAvatar
                          : FemaleAvatar
                      }
                    ></Avatar>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <CommonButton
              variant="contained"
              type="submit"
              buttonStyles={{
                width: "100%",
                margin: "0.5rem 0rem 1.5rem 0rem",
              }}
            >
              Comment
            </CommonButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CommentField;
