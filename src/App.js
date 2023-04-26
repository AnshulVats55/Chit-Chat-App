import React from 'react';
import '../src/css/style.css';
import '../src/css/responsive.css';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Feed from './components/Feed';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import Comments from './components/simple-comments/Comments'
import FeedLayout from "./components/FeedLayout";
function App() {
    return (     
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/signup" element={<CreateAccount />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/feed" element={<Feed />} />
            <Route exact path="/feed" element={<FeedLayout />} />
        <Route exact path="/" element={<Comments />} />
          </Routes>
        </Router>
    );
}

export default App;
