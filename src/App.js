import React from 'react';
import FinalLayout from './pages/FinalLayout/FinalLayout';
import CreateAccount from '../src/pages/SignupPage/CreateAccount';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route exact path="/signup" element={<CreateAccount />} />
                    <Route exact path="/profile" element={<FinalLayout component={<ProfilePage />}/>} />
                    {/* <Route exact path="/feed" element={<FinalLayout  component={<Feed />}/>} > */}
                    {/* </Route> */}
                </Routes>    
            </Router>
        </>
    );
}

export default App;
