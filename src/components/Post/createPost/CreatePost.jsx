import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import CommonButton from "../../Button/CommonButton";
import { getCreatePostStyles } from "./createPostStyles";
import { setSnackbar } from "../../../store/slices/SnackBarSlice";
import message from "../../../Constants";

const CreatePost = ({ createPost }) => {
  const { classes } = getCreatePostStyles();

  const [postDesc, setPostDesc] = useState("");
  // eslint-disable-next-line
  const [postMedia, setPostMedia] = useState({});

  const [encodedProfilePic, setEncodedProfilePic] = useState("");

  const dispatch = useDispatch();

  const postData = {
    postDesc: postDesc,
    postMedia: encodedProfilePic,
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (postDesc.length === 0) {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.INFO,
          snackbarMessage: "Post caption can't be empty !",
        })
      );
    } else if (encodedProfilePic === "") {
      dispatch(
        setSnackbar({
          snackbarOpen: true,
          snackbarType: message.INFO,
          snackbarMessage: "Post Media can't be empty !",
        })
      );
    } else {
      await createPost(postData);
      setPostDesc("");
      setPostMedia({});
      setEncodedProfilePic("");
    }
  };

  function getBase64(file) {
    let reader = new FileReader();
    let encodedFile = "";
    reader.readAsDataURL(file);
    reader.onload = function () {
      encodedFile = reader.result;
      setEncodedProfilePic(encodedFile);
    };
  }

  return (
    <Box id="createPost" className={classes.createPostContStyles}>
      <form
        className={classes.createPostFormStyles}
        onSubmit={handleCreatePost}
      >
        <Typography variant="h6" className={classes.createPostTopText}>
          Start writing something !
        </Typography>

        <TextField
          type="text"
          multiline
          placeholder="What's on your mind today..."
          className={classes.root}
          InputProps={{ className: classes.input }}
          value={postDesc}
          onChange={(e) => {
            setPostDesc(e.target.value);
          }}
        ></TextField>

        <Box className={classes.uploadMediaCont}>
          <CommonButton
            for="files"
            class="btn"
            buttonStyles={{
              padding: "0.5rem 1rem",
              "@media screen and (max-width: 981px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 900px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 434px)": {
                width: "100%",
                margin: "0.5rem",
              },
            }}
          >
            <label
              htmlFor="files"
              style={{ minWidth: "100%", fontSize: "0.8rem" }}
            >
              Upload Image
            </label>
            <input
              id="files"
              name="files"
              accept="image/*"
              type="file"
              style={{
                visibility: "hidden",
                minWidth: "100%",
                position: "absolute",
              }}
              className={classes.uploadMediaStyles}
              onChange={(e) => {
                getBase64(e.target.files[0]);
                setPostMedia(e.target.files[0]);
              }}
            />
          </CommonButton>

          <CommonButton
            type="submit"
            children={"Post"}
            buttonStyles={{
              padding: "0.5rem 2rem",
              "@media screen and (max-width: 981px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 900px)": {
                width: "100%",
                margin: "0.5rem",
              },
              "@media screen and (max-width: 434px)": {
                width: "100%",
                margin: "0.5rem",
              },
            }}
          />
        </Box>
        <Box className={classes.postMediaPreviewCont}>
          {encodedProfilePic !== "" ? (
            <img
              src={encodedProfilePic}
              alt=""
              className={classes.postMediaPreview}
            />
          ) : (
            <></>
          )}
        </Box>
      </form>
    </Box>
  );
};

export default CreatePost;
