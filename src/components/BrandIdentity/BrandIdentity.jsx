import React from "react";

import { Box, Typography } from "@mui/material";
import { getBrandIdentityStyles } from "./BrandIdentity.styles";

import BrandLogo from "../../assets/fiftyfive-logo.png";

const BrandIdentity = () => {
  const { classes } = getBrandIdentityStyles();

  return (
    <Box className={classes.brandIdentityContStyles}>
      <img
        src={BrandLogo}
        alt="FiftyFive Tech"
        className={classes.brandLogoStyles}
      />
      <Typography variant="h3" className={classes.brandNameStyles}>
        Chit-Chat
      </Typography>
    </Box>
  );
};

export default BrandIdentity;
