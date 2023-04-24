import React from 'react';
import '../src/css/style.css';
import Navbar from  './components/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatWindow from './components/chatWindow/ChatWindow';



function App() {
    return (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/userlogin" element={<LoginPage />} />
            <Route exact path="/chat" element={<ChatWindow />} />
          </Routes>
        </Router>
    );
}

export default App;
