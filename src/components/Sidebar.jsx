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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Box className={classes.styleBox}>

      <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="icon tabs" sx={{height:"100vh"}}>
        <Tab icon={<HomeIcon fontSize="large" />} iconPosition="start" label="Home" />
        <Tab icon={<ChatBubbleIcon fontSize="medium" />} iconPosition="start" label=" Chat" />
        <Tab icon={<GroupsIcon fontSize="large" />} iconPosition="start" label=" Spaces" />
        <Tab className={classes.styleTab} icon={<LogoutIcon />} iconPosition="start" label="Log Out"  />
      </Tabs>
     </Box>
  );
}

// sx={{ position: "absolute", bottom: "20px" ,left:"30px"}}
 {/* <Tab icon="">
          <Box className={classes.sidebarLabel}>
            <Tab icon={<HomeIcon fontSize="large" />} iconPosition="start" />
            <Typography variant="h5" >Home</Typography>
          </Box>
        </Tab> */}