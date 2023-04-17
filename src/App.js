import React from 'react';
import Navbar from './pages/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
          </Routes>
        </Router>
    );
}

export default App;
