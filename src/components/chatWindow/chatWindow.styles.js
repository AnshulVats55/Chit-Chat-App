import { makeStyles } from "tss-react/mui";

export const ChatStyles = makeStyles()((theme) => {
  return {
    chatWindow: {
      width: "100%",
      height: "100%",
      bordeRadius: "1rem",
      backgroundColor: "rgb(33, 108, 108)",


    },
    ChatwindowNot: {
      display: "none",

    },

    chatHeader: {
      height: "14%",
      borderBottom: "1px solid gray",
      padding: "1rem",
      overflow: "hidden",
      backgroundColor: "#fff",
      bordeRadius: "1rem",
      // backgroundColor:"#f1f0fa",
    },

    userName: {
      display: "flex",
      alignItems: "center",
      fontWeight: "bolder",
    },

    avatar: {
      // backgroundColor: "#363a91",
      marginRight: "1rem",
    },

    chatBody: {
      height: "60vh",
    },
    messageContainer: {
      width: "100%",
      height: "100%",
      overflowY: " scroll",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },

    messageSender: {
      height: "auto",
      display: "flex",
      justifyContent: "flex-end",
      padding: "1rem",
    },
    messageReceiver: {
      height: "auto",
      display: "flex",
      justifyContent: "flex-start",
      padding: "1rem",

    },
    messageContent: {
      width: "auto",
      height: "auto",
      minHeight: "2rem",
      minWidth: "10%",
      maxWidth: "60%",
      // backgroundColor: "rgb(289, 241, 236)",
      backgroundColor: "#363a91",
      borderRadius: "0.5rem",
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: " center",
      margin: "0 0.5rem",
      padding: "0.7rem",
      overflowWrap: "break-word",
      wordBreak: "break-word",
      fontSize: "0.8rem",
      "@media screen and (max-width: 900px)": {
        maxWidth: "90%",
      },
      "@media screen and (max-width: 600px)": {
        maxWidth: "100%",
        fontSize: "0.5rem",
      },
    },
    messageContent1: {
      width: "auto",
      height: "auto",
      minHeight: "2rem",
      minWidth: "10%",
      maxWidth: "60%",
      backgroundColor: "#4c4ced",
      borderRadius: "0.5rem",
      color: "black",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: " center",
      margin: "0 0.5rem",
      padding: "0.7rem",
      overflowWrap: "break-word",
      wordBreak: "break-word",
      fontSize: "0.8rem",
      "@media screen and (max-width: 900px)": {
        maxWidth: "90%",
      },
      "@media screen and (max-width: 600px)": {
        maxWidth: "100%",
        fontSize: "0.5rem",
      },
    },

    msg: {
      color: "#fff",

    },
    messageMeta: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",

    },

    chatFooter: {
      display: "flex",
      justifyContent: "space-between",
      height: "12%",
      width: "100%",
      margin: "auto",
    },

    input: {
      border: "none",
      outline: "none",
      width: "95%",
      marginLeft: "0.5rem",
      padding: "0.7rem",

      fontSize: "1rem",
    },
    author: {
      marginRight: "2px",
      "@media screen and (max-width: 600px)": {
        marginRight: "0.5rem",
      },
    },
    send: {
      bordeRadius: "50%",
      "&:hover": {
        color: "green",

      },
    },

    time: {

      color: "#fff",
      fontSize: "0.8rem",
      marginTop: "0.2rem"
    },



    // picture:{
    //     backgroundColor:"red",
    //     display:"flex",
    //     justifyContent:"center",
    //     backgroundColor:"yellow",
    //     height:"50%"
    // },
    // pic:{
    //   width:'40rem',
    //   backgroundColor:"red",
    //   height:"50%",
    //   "@media screen and (max-width: 960px)": {
    //     width:"70rem",
    //   },

    // }
    picture: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
      width:"100%",
      backgroundColor: "#fff",

    },

    pic: {

      width: '50rem',

    }
  };
});
