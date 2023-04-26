import React from 'react';
import CreateAccount from './pages/SignupPage/CreateAccount';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
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
            <Route exact path="/feed" element={<FeedLayout />} />
          <Route exact path="/" element={<Comments />} />
          </Routes>
        </Router>
    );
}

export default App;
