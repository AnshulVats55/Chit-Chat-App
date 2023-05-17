import React from "react";
import { getInputFieldStyles } from "./InputField.styles";
import { TextField } from "@mui/material";

const InputField = ({ style, variant, type, label }) => {
    const { classes } = getInputFieldStyles(style);

    return (
        <TextField
            className={classes.allInputFieldStyles}
            type={type}
            variant={variant}
            label={label}
        />
    );
};

export default InputField;
