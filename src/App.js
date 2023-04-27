import React from 'react';
import FinalLayout from './pages/FinalLayout/FinalLayout';
import CreateAccount from '../src/pages/SignupPage/CreateAccount';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from './pages/ProfilePage/ProfilePage';
import FeedPage from '../src/pages/FeedPage/FeedPage';
import ViewPost from './components/ViewPost/ViewPost';

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/signup" element={<CreateAccount />} />
                    <Route exact path="/profile" element={<FinalLayout component={<ProfilePage />}/>} />
                    <Route exact path="/feed" element={<FinalLayout component={<FeedPage />}/>} />
                    <Route exact path="/post" element={<FinalLayout component={<ViewPost />}/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
