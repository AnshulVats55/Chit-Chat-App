import React from 'react';
import '../src/css/style.css';
// import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Practice from './components/Practice';
import Newsidebar from './components/NewSidebar/Newsidebar';

function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/bar" element={<Newsidebar/>}/>
          </Routes>
        </Router>
    );
}

export default App;
