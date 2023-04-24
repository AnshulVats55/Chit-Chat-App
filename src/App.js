import React from 'react';
import '../src/css/style.css';
// import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideBar from './components/Sidebar';
import chatLayout from './components/chatLayout'

function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/bar" element={<SideBar />} />
            <Route exact path="/layout" element={<chatLayout />}/>
          </Routes>
        </Router>
    );
}

export default App;
