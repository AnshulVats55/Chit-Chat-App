import React, { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ListStyles } from "./FriendList.styles";

const SearchBar = ({setFriends,changeHandler,search}) => {
  const { classes } = ListStyles();

  return (
    <>
    <Paper

      className={classes.searchContainer}
    >
      <input
        className={classes.searchBar}
        placeholder="Search your friends..."
        value={search}
        onChange={(e)=>changeHandler(e)}
      />
      <IconButton type="button" className={classes.icon} aria-label="search">
        <SearchIcon  />
      </IconButton>
     
    </Paper>
    </>
  );
};

export default SearchBar;
