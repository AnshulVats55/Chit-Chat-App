import { makeStyles } from "tss-react/mui";

export const getCreatePostStyles = makeStyles()((theme) => ({
  createPostContStyles: {
    // background: "wheat",
    width: "50%",
    margin: "1rem auto",
    display: "flex",
    flexDirection: "column",
  },

  createPostFormStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  root: {
    minWidth: "100%",
    background: theme.palette.secondary.main,
    borderRadius: "5px",
  },

  input: {
    border: "none",
    outline: "none",
    borderRadius: "5px",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },

  uploadMediaStyles: {},

  uploadMediaCont: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));
