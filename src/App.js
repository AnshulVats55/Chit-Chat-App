import React from 'react';
import '../src/css/style.css';
import '../src/css/responsive.css';
import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
    return (
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route exact path="/createaccount" element={<CreateAccount />} />
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
    );
}

export default App;