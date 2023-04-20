import React from "react";
import "../src/css/style.css";
// import Navbar from './pages/Navbar';
import LoginPage from "./components/LoginPage";
import { sidebar } from "./components/SideBar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Feed from "./components/Feed";
import { Post } from "./components/post/Post";
import { PostHeader } from "./components/post/PostHeader/PostHeader";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route exact path="/createaccount" element={<CreateAccount />} /> */}
        <Route exact path="/userlogin" element={<LoginPage />} />
        <Route exact path="/post" element={<Feed />} />
        <Route exact path="/" element={<Post />} />
        {/* <Route exact path="/userProfile" element={<UserProfilePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
