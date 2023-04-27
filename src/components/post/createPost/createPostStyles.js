import { makeStyles } from "tss-react/mui";

export const getCreatePostStyles = makeStyles()((theme) => ({
  createPostContStyles: {
    background:'#f3f9ff',
    width: "50%",
    display: "flex",
    flexDirection: "column",
    position:'absolute',
    top:'5vh',
    '@media screen and (max-width: 900px)': {
      width:'75%',
    },
    '@media screen and (max-width: 600px)': {
      width:'100%',
    },
  },

  createPostFormStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  root: {
    minWidth: "95%",
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

  uploadMediaStyles: {

  },

  uploadMediaCont: {
    width: "95%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin:'1rem 0rem 0.5rem 0rem'
  },

  createPostTopText: {
    margin:'1rem 0rem',
  }
}));
