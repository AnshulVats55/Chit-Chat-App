import { makeStyles } from "tss-react/mui";

export const ListStyles = makeStyles()((theme) => ({
  searchContainer: {
    borderRadius: "0.5rem",
    border: "1px solid #363a91",
    padding: " 0 1rem",
    boxShadow: "none",
    textAlign: "center",
    width: "95%",
    // margin: "auto",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection:"row",
  },

  friendRequestContStyles:{
    overflowY:"scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  searchFriendContStyles:{
    minHeight: "30vh",
    width:"100%",
    overflowY:"scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    background:'#f3f9ff'
  },

  searchBar: {
    border: "none",
    outline: "none",
    padding: "0.5rem",
    fontSize: "1rem",
    width:"100%",
    cursor:"pointer"
  },

  icon: {
    padding: "10px",
    color: "#363a91",
    textAlign: "right",
  },

  avatar: {
    // backgroundColor: "#363a91",
    marginRight: "1rem",
  },

  friendContStyles: {
    position:'fixed',
    top:'15vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    overflowY:'hidden',
    height:'auto',
  },

  friendContainer: {
    overflowY: "scroll",
    width: "100%",
    minHeight:"20vh",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  single: {
    display: "flex",
    borderRadius: "10px",
    marginBottom: "10px",
    padding: "0 1rem",
    justifyContent: "center",
    width: "100%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    maxHeight: "20%",
    overflow: "hidden",
    cursor:"pointer"
  },

  single1: {
    display: "flex",
    marginBottom: "10px",
    width: "100%",
    justifyContent: "flex-start",
    paddingTop: "0.5rem",
  },

  h6: {
    color: "grey",
  },

  time: {
    marginTop: "0.5rem",
    width: "10%",
    textAlign: "right",
  },
  friendRequest:{
   
    "&::-webkit-scrollbar": {
      display: "none",
    },
  }
}));
