import { makeStyles } from "tss-react/mui";

export const feedStyles = makeStyles()((theme) => {
  return {
    feedPageTopContStyles: {
      display: "flex", // alignContent:'center',
      position: "absolute",
      top: "0vh",
      left: "6%",
      width: "93%",
      height: "90vh", // backgroundColor:"yellow",
      "@media screen and (max-width: 900px)": {
        left: "0vw",
        width: "100%",
      },
    },
    box1: {
      position: "relative",
      left: "-3rem",
      width: "60rem",
      height: "100vh", // backgroundColor: "red",
      "@media screen and (max-width: 900px)": {
        width: "100%",
      },
    },

    box2: {
      position: "fixed",
      right: "5rem",
      top: "6.5rem",
      height: "100vh",
      width: "25%",
      backgroundColor: "pink",
      "@media screen and (max-width: 900px)": {
        display: "none",
      },
    },
  };
});
