

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import HomeIcon from '@mui/icons-material/Home';
import Logo from '../assets/fiftyfive-logo-1.png';
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import {Link} from 'react-router-dom';

const pages = [
    {
        to: '/',
        icon: <HomeIcon fontSize="large" ></HomeIcon>
    },

    {
            to: '/chat',
            icon: <ChatIcon fontSize="large"></ChatIcon>
    },

    {

            to: '/groups',
            icon: <GroupsIcon fontSize="large"></GroupsIcon>
    }
];
const pagesScroll = [ {
    to: '/',
    data: "Home"
},

{
        to: '/chat',
        data: "Chat"
},

{

        to: '/groups',
        data: "Groups"
}];
const settings = [{
    to: '/userprofile',
    data: "Profile"
},

{
        to: '/userlogin',
        data: "Logout"
}];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        
        <AppBar position="static" sx={{background:'transparent'}}>
            <Container maxWidth="xl">
                <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>

                <Box sx={{ flexGrow:1, display: { sm: 'flex', md:'none', lg:'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon sx={{color:'blue'}}/>
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pagesScroll.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link to={page.to} style={{textAlign:"center",textDecoration:"none", color:"blue"}}>{page.data}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                </Box>

                    {/* medium devices */}
                    <Box className="left" sx={{flexGrow:1}}>
                        <div className="img-container">
                            <img src={Logo} alt="logo" />
                        </div>
                        <h2 style={{color:'blue'}}>Chit-Chat</h2>
                    </Box>

                    <Box sx={{ flexGrow: 1.2, display: { xs: 'none', md: 'flex', lg:'flex' }, justifyContent:'flex-start'}}>
                        {pages.map((page) => (
                            <Link
                            to={page.to}
                                key={page}
                                onClick={handleCloseNavMenu}
                                style={{ my: 2, color: 'white', display: 'block', color:'blue', margin:'0px 50px'}}
                            >
                                {page.icon}
                            </Link>
                        ))}
                    </Box>

                    {/* small devices */}
                    <Box sx={{flexGrow:1, display: { xs: 'flex', md: 'none', lg:'none' }}}>
                        <Box className="left-main">
                            <div className="img-container">
                                <img src={Logo} alt="" />
                            </div>
                            <h3 style={{color:'blue'}}>Chit-Chat</h3>
                        </Box>
                    </Box>
                   

                    <Box sx={{ flexGrow: 0.2 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'blue'}}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Link to={setting.to} style={{textAlign:"center",textDecoration:"none", color:"blue"}}>{setting.data}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
       
                </Box>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;