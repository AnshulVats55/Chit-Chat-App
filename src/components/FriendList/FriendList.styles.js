import { makeStyles } from "tss-react/mui";

export const ListStyles = makeStyles()((theme) => ({
  friendContStyles: {
    position:'fixed',
    top:'12vh',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    overflowY:'hidden',
    padding:'3vh 0vh'
  },

  searchContainer: {
    borderRadius: "0.5rem",
    border: "1px solid #000",
    padding: " 0 1rem",
    boxShadow: "none",
    textAlign: "center",
    width: "95%",
    margin: "1rem 0rem",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  searchFriendContStyles:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    maxHeight:'35vh',
    width:"100%",
    overflowY:"scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    border:'none',
    borderRadius:'5px',
    background:'#F3F9FF',
  },

  friendRequestContStyles:{
    maxHeight:'25vh',
    border:'none',
    borderRadius:'5px',
    background:'#F3F9FF',
    overflowY:'scroll',
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  searchBar: {
    border: "none",
    outline: "none",
    padding: "0.5rem",
    fontSize: "1rem",
    width:"100%",
    cursor:"pointer",
  },

  icon: {
    padding: "10px",
    color: "#363a91",
    textAlign: "right",
  },

  avatar: {
    marginRight: "1rem",
  },

  friendContainer: {
    height: "300px",
    scrollbarWidth: "none",
    overflowY: "scroll",
    width: "100%",
    minHeight: "20vh",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  single: {
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    borderRadius: "5px",
    marginBottom: "10px",
    minWidth: "100%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    cursor:"pointer",
    background:'#FFF',
    transition:'0.2s ease-in-out',
    borderBottom:'2px solid #363a91',
      '&:hover': {
        transform:'scale(0.95)',
        boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px',
      },
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
  friendRequest: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  heading: {
    margin: "0.5rem 0rem",
    textAlign: "center",
  },
}));
