import { makeStyles } from "tss-react/mui";
export const commentStyles = makeStyles()((theme, styles) => {
  return {
    commentContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    gridContainerStyles: {
      width: "100%",
      margin: "1rem 0rem",
    },

    gridItemStyles: {
      width: "100%",
    },

    commentBoxStyles: {
      width: "100%",
      marginTop: "0.5rem",
      marginBottom: "0rem",
    },

    commentCardStyles: {
      margin: "1rem 0rem",
    },

    commentTopCardStyles: {
      margin: "1rem 0rem",
      "&:hover": {
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
      },
    },

    deleteIconStyles: {
      transition: "0.2s ease-in-out",
      "&:hover": {
        color: "red",
      },
    },
  };
});
