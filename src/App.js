import React from 'react';
import '../src/css/style.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Newsidebar from './components/NewSidebar/Newsidebar'
function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />

            {/* <Route exact path="/bar" element={<Newsidebar/>}/> */}

            <Route exact path="/bar" element={<Sidebar/>}/>

          </Routes>
        </Router>
    );
}

export default App;
