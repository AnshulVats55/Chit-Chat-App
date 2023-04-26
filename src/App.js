import React from 'react';
<<<<<<< HEAD
import LoginPage from '../src/pages/LoginPage/LoginPage';
import CreateAccount from '../src/pages/SignupPage/CreateAccount';
import ProfilePage from '../src/pages/ProfilePage/ProfilePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FeedLayout from './components/Layout/FeedLayout'
import Bar from './components/SidebarNew/Bar';
import ChatLayout from './components/Layout/ChatLayout'
=======
import '../src/css/style.css';
import Navbar from  './components/Navbar';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ChatWindow from './components/chatWindow/ChatWindow';


>>>>>>> chatWindow

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
