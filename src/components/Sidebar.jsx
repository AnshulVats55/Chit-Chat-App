import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box, Typography } from "@mui/material";
import { sidebarStyle } from "./Sidebar.style";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { classes } = sidebarStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.styleBox}>
      <Box className={classes.sidebarIconContStyles}>
        <Link to="/profile">
          <HomeIcon />
          <Typography variant="h6">Home</Typography>
        </Link>
      </Box>

      <Box className={classes.sidebarIconContStyles}>
        <Link
          to="/profile"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HomeIcon />
          <Typography variant="h6">Chat</Typography>
        </Link>
      </Box>

      <Box className={classes.sidebarIconContStyles}>
        <Link to="/profile">
          <HomeIcon />
          <Typography variant="h6">Groups</Typography>
        </Link>
      </Box>

      <Box className={classes.sidebarIconContStyles}>
        <Link to="/profile">
          <HomeIcon />
          <Typography variant="h6">Logout</Typography>
        </Link>
      </Box>
    </Box>
  );
}
