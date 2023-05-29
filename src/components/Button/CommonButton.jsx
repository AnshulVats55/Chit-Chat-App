import React from "react";
import { Button } from "@mui/material";
import { getButtonStyles } from "./Button.styles";

const CommonButton = ({ children, type, buttonStyles }) => {
  const { classes } = getButtonStyles(buttonStyles);

  return (
    <Button className={classes.allButtonStyles} type={type}>
      {children}
    </Button>
  );
};

export default CommonButton;
