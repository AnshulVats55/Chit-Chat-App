import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListStyles } from "./FriendList.styles";

const SearchBar = () => {
  const { classes } = ListStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const onhandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      className={classes.serachConatiner}
    >
      <input
        className={classes.searchBar}
        placeholder="Search your friends..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" className={classes.icon} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
