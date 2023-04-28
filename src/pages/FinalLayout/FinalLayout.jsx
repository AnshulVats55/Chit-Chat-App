import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Bar from '../../components/SidebarNew/Bar';
// import CommonLayout from '../../pages/CommonLayoutPage/CommonLayout';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAccount from '../SignupPage/CreateAccount';
// import LoginPage from '..//LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';

const FinalLayout = ({ component }) => {
    return (
        <>
            <Navbar />
            <Bar />
            {component}
        </>
    );
}

export default FinalLayout;