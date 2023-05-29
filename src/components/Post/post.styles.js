import { makeStyles } from "tss-react/mui";

export const PostStyles = makeStyles()((theme, styles) => {
  return {
    PostsTopContStyles: {
      display: "flex",
      flexDirection: "row",
      width: "93%",
      position: "relative",
      top: "10vh",
      left: "7%",
      overflowY: "hidden",
      "@media screen and (max-width: 900px)": {
        left: "0vw",
        width: "100%",
      },
    },

    postContStyles: {
      maxWidth: "100%",
      display: "flex",
      alignItems: "center",
      overflowY: "hidden",
    },

    postContItemStyles: {
      minWidth: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  
    },

    friendReqGridStyles: {
      maxWidth: "25%",
      minHeight: "100%",
    },

    friendReqGridItemStyles: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    gridContainerStyles: {
      position: "relative",
      top: "6vh",
      margin: "0rem auto",
      minWidth: "75%",
      maxWidth: "75%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media screen and (max-width: 900px)": {
        width: "75%",
      },
      marginBottom: "5rem",
      "@media screen and (max-width: 600px)": {
        minWidth: "100%",
        maxWidth: "100%",
      },
    },

    gridItemStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0.5rem 0rem",
    },

    cardContainer: {
      width:"99%",
      transition: "0.2s ease-in-out",
      marginRight:"15px",
      boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 2px 4px 8px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px",
      "&:hover": {
        boxShadow:
          "rgba(0, 0, 0, 0.07) 8px 8px 10px, rgba(0, 0, 0, 0.07) 8px 8px 10px, rgba(0, 0, 0, 0.07) 8px 8px 10px, rgba(0, 0, 0, 0.07) 8px 8px 10px, rgba(0, 0, 0, 0.07) 8px 16px 32px, rgba(0, 0, 0, 0.07) 2px 32px 64px",
      },
      "@media screen and (max-width: 900px)":{
        minWidth: "85%",
        maxWidth: "85%",
      },
      "@media screen and (max-width: 681px)": {
        minWidth: "100%",
        maxWidth: "100%",
      },
    },

    postMediaContainer: {
      width: "100%",
    },

    postMedia: {
      maxWidth: "100%",
      margin: "10px 0px",
    },

    noPostsFoundContStyles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "3rem 0rem",
    },

    noPostFoundTextStyles: {
      margin: "1rem 0rem",
      padding: "0.5rem 1rem",
      background: theme.palette.primary.main,
      color: "#FFF",
      border: "none",
      borderRadius: "1.25rem",
      fontWeight: "bold",
    },

    noPostsFoundImageStyles: {
      maxWidth: "80%",
      margin: "1rem 0rem",
    },
  };
});
