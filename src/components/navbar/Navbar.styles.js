import { makeStyles } from "tss-react/mui";

export const NavbarStyles = makeStyles()((theme) => {
  return {
    container: {
      background: "transparent",
      height: "60px",
    },
    container1: {
      flexGrow: 1,
      display: "none",
      "@media screen and (max-width: 900px)": {
        display: "flex",
      },
    },
    mainContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 50px",
      "@media screen and (max-width: 900px)": {
        padding: "5px 20px",
      },
      "@media screen and (max-width: 600px)": {
        padding: "0",
      },
    },

    link: {
      textAlign: "center",
      textDecoration: "none",
      color: "#363a91",
    },
    left: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      "@media screen and (max-width: 900px)": {
        display: "none",
      },
    },
    leftMain: {
      display: "none",
      alignItems: "center",
      justifyContent: "flex-start",
      flexGrow: "0.5",
      "@media screen and (max-width: 900px)": {
        display: "flex",
      },
      "@media screen and (max-width: 600px)": {
        marginLeft: "2rem",
      },
    },
    iconsContainer: {
      display: "flex",
      flexGrow: 0.3,
      justifyContent: "flex-start",
      "@media screen and (max-width: 900px)": {
        display: "none",
      },
    },
    icons: {
      my: 2,
      display: "block",
      color: "#363a91",
      padding: "0px 40px",
    },
    imgContainer: {
      width: "16%",
      marginRight: "10px",
    },
    img: {
      width: "100%",
    },
    h5: {
      color: "#363a91",
      fontWeight: "bold",
    },
    menu: {
      marginTop: "3rem",
    },
    avatar: {
      backgroundColor: "#363a91",
    },
  };
});
