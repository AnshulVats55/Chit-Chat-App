import React from "react";
import "../src/css/style.css";
// import Navbar from './pages/Navbar';
import LoginPage from "./components/LoginPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Feed from "./components/Feed";
import { Post } from "./components/post/Post";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route exact path="/createaccount" element={<CreateAccount />} /> */}
        <Route exact path="/userlogin" element={<LoginPage />} />
        <Route exact path="/post" element={<Feed />} />
        
        {/* <Route exact path="/userProfile" element={<UserProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
