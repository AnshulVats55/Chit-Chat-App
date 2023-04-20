import React from 'react';
import '../src/css/style.css';
import Navbar from  './components/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';



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
