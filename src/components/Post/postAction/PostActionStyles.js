import { makeStyles } from "tss-react/mui";

export const PostActionStyles = makeStyles()((theme, styles) => {
  return {
    box: {
      display: "inline-block ",
      marginRight: "2px",
    },

    Hide: {
      "@media screen and (max-width:500px)": {
        display: "none",
        fontWeight: "bold",
      },
    },
  };
});
