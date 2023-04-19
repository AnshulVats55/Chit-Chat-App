import React from 'react';
import '../src/css/style.css';
// import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { sidebar } from './components/SideBar';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { DashBoard } from './components/DashBoard';

function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/" element={<DashBoard/>} />
          </Routes>
        </Router>
    );
}

export default App;
