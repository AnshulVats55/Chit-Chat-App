import { makeStyles } from "tss-react/mui";

export const barStyle = makeStyles()((theme, styles) => {
  return {
    mainContainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#363a91",
      height: "90vh",
      width: "5.5%",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "0.15s ease-in-out",
      position: "fixed",
      top: "10vh",
      "@media screen and (max-width: 900px)": {
        display: "none",
      },
    },

    containerOne: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "transparent",
    },

    itemCont: {
      minWidth: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#FFF",
      transition: "0.15s ease-in-out",
      "&:hover": {
        background: "#f1f0fa",
        color: "#363a91",
      },
    },

    item: {
      width: "100%",
      padding: "1rem 0rem",
      background: "transparent",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
    },

    link: {
      color: "#FFF",
      textDecoration: "none",
      transition: "0.15s ease-in-out",
      margin: "0px auto",
      "&:hover": {
        color: "#363a91",
      },
    },

    itemIcon: {
      transition: "0.15s ease-in-out",
      "@media screen and (max-width: 600px)": {
        fontSize: "1.75rem",
      },
    },

    itemText: {
      fontWeight: "bold",
      transition: "0.15s ease-in-out",
      "@media screen and (max-width: 600px)": {
        display: "none",
      },
    },
  };
});
