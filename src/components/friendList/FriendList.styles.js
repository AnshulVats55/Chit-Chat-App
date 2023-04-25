import { makeStyles } from "tss-react/mui";

export const ListStyles = makeStyles()((theme) => ({
  serachConatiner: {
    borderRadius: "0.5rem",
    border: "1px solid #363a91",
    padding: " 0 1rem",
    boxShadow: "none",
    textAlign: "center",
    width: "100%",
    margin: "auto",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  searchBar: {
    border: "none",
    outline: "none",
    padding: "0.5rem",
    fontSize: "1rem",
  },
  icon: {
    padding: "10px",
    color: "#363a91",
    textAlign: "right",
  },
  avatar: {
    backgroundColor: "#363a91",
    marginRight: "1rem",
  },
  friendGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "80vh",
    width: "100%",
    marginTop: "2rem",
    padding: "0 2rem",
  },
  friendContainer: {
    overflowY: "scroll",
    overflowX: "hidden",
    width: "100%",
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
    border: "1px solid blue",
    maxHeight: "20%",
    overflow: "hidden",
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
}));
