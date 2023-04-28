import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAccount from '../SignupPage/CreateAccount';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';

const CommonLayout = () => {
    return (        
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route exact path="/signup" element={<CreateAccount />} />
                <Route exact path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default CommonLayout;