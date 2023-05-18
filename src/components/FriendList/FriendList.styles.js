import { makeStyles } from "tss-react/mui";

export const ListStyles = makeStyles()((theme) => ({
  friendContStyles: {
    position: "fixed",
    top: "12vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    overflowY: "hidden",
    height: "80%",
    padding: "3vh 0vh",
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

  searchFriendContStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
    width: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    border: "none",
    borderRadius: "5px",
    background: "#F3F9FF",
  },

  friendRequestContStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
    width: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    border: "none",
    borderRadius: "5px",
    background: "#F3F9FF",
  },

  searchBar: {
    border: "none",
    outline: "none",
    padding: "0.5rem",
    fontSize: "1rem",
    width: "100%",
    cursor: "pointer",
  },

  icon: {
    padding: "10px",
    color: "#363a91",
    textAlign: "right",
  },

  avatar: {
    margin: "0rem 0.5rem",
  },

  friendContainer: {
    overflowY: "scroll",
    width: "100%",
    minHeight: "20vh",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  allFriends: {
    overflowY: "scroll",
    width: "100%",
    height: "85%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    margin: "1rem 0rem",
  },

  single: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    margin: "0 auto 0.75rem",
    width: "95%",
    overflowWrap: "break-word",
    wordBreak: "break-word",
    cursor: "pointer",
    background: "#FFF",
    transition: "0.2s ease-in-out",
    borderBottom: "2px solid #363a91",
    "&:hover": {
      transform: "scale(0.95)",
      boxShadow:
        "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
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

  friendGrid: {
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 0px",
    height: "100%",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  searchFriends: {
    maxWidth: "100%",
    minHeight: "3rem",
    margin: "0px auto",
    padding: "0rem 1rem",
    border: "none",
    borderRadius: "5px",
    outline: "none",
    background: "#F3F9FF",
    "@media screen and (max-width: 600px)": {
      maxWidth: "75%",
    },
  },

  friendRequestText: {
    margin: "0.5rem 0rem",
    textAlign: "center",
    fontWeight: "bold",
    background: "#363a91",
    color: "#FFF",
    padding: "0.25rem 1rem",
    borderRadius: "15px",
    fontSize: "0.9rem",
  },
}));
