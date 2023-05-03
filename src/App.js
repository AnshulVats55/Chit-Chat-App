import React from 'react';
import '../src/css/style.css';
import Navbar from  './components/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Friends from './components/friendList/Friends';
// import Chat from './components/chat/Chat';


function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/chat" element={<Friends />} />
          </Routes>
        </Router>
    );
}

export default App;
