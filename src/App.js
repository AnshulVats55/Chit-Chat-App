import React from 'react';
import '../src/css/style.css';
import '../src/css/responsive.css';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
    return (     
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="signup" element={<CreateAccount />} />
            <Route exact path="/profile" element={<ProfilePage />} />
          </Routes>
        </Router>
    );
}

export default App;