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
    background: '#FFF',
    borderRadius: "5px",
  },

  input: {
    border: "none",
    outline: "none",
    borderRadius: "5px",
    '&:hover': {
      outline:'none',
      border:'none',
    },

    '&:focus': {
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
    margin:'1rem 0rem 1rem 0rem',
    '@media screen and (max-width: 981px)': {
      flexDirection:'column',
    },
    '@media screen and (max-width: 900px)': {
      flexDirection:'row',
    },
    '@media screen and (max-width: 434px)': {
      flexDirection:'column',
    },
  },

  createPostTopText: {
    margin:'1rem 0rem',
    fontWeight:'bold',
  }
}));
