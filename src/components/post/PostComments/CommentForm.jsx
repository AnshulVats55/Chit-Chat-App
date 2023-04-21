import { TextField } from "@mui/material";
import React, { useState } from "react";

export const CommentForm = ({ handleSubmit, submitLabel }) => {
  const [text, setText] = useState("");
  const onSubmit =(e)=>{
    e.preventDefault();
    handleSubmit(text);
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Write comment"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        onChange = {(e)=>setText(e.target.value)}
        
      />
    </form>
  );
};
