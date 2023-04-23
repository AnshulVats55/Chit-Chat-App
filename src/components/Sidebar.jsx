import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Typography } from '@mui/material';
import { sidebarStyle } from "./Sidebar.style";

export default function Sidebar() {
  const { classes } = sidebarStyle();
  const [value, setValue] = React.useState(0);
  const handleChange = (e) => {

  };

  return (
    <Box sx={{
      width: 200,
      height: "100vh",
      backgroundColor: '',
      boxShadow: '1px 2px 9px blue',
    }}>

      <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="icon tabs example">
        <Tab icon={<HomeIcon fontSize="large" />} iconPosition="start" label="Home" />
        <Tab icon={<ChatBubbleIcon fontSize="large" />} iconPosition="start" label="Chat" />
        <Tab icon={<GroupsIcon fontSize="large" />} iconPosition="start" label="Spaces" />

        <Tab icon="">
          <Box className={classes.sidebarLabel}>
            <Tab icon={<HomeIcon fontSize="large" />} iconPosition="start" />
            <Typography variant="h5" >Home</Typography>
          </Box>
        </Tab>

      </Tabs>

     
        <Tab icon={<LogoutIcon />} iconPosition="start" label="Log Out" sx={{ position: "absolute", bottom: "20px" }} />
      
    </Box>
  );
}